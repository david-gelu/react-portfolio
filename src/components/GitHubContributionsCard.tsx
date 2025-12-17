import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import TooltipWrap from './TooltipWrap';

const firstYear = 2019;
const currentYear = new Date().getFullYear();

interface Contribution {
  date: string;
  count: number;
  level: number;
}

interface MonthData {
  name: string;
  weeks: Contribution[][];
}

const GitHubContributionsCard = (): JSX.Element => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [year, setYear] = useState<string>(String(currentYear));
  const username = 'david-gelu';
  const years = Array.from(
    { length: currentYear - firstYear + 1 },
    (_, i) => String(firstYear + i)
  ).reverse();

  useEffect(() => {
    const fetchContributions = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const data = await response.json() as {
          contributions: Array<{ date: string; count: number }>;
        };

        const total = data.contributions.reduce((sum, day) => sum + day.count, 0);
        setTotalContributions(total);

        const formattedData: Contribution[] = data.contributions.map((day) => {
          const count = day.count;
          let level: number;
          if (count === 0) level = 1;
          else if (count < 5) level = 2;
          else if (count < 10) level = 3;
          else level = 4;

          return {
            date: day.date,
            count: count,
            level: level
          };
        });

        setContributions(formattedData);
        setLoading(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('Error fetching contributions:', err);
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchContributions();

    const interval = setInterval(() => {
      fetchContributions();
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [year]);

  const getMonthsWithWeeks = (): MonthData[] => {
    if (contributions.length === 0) return [];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthsData: Record<string, MonthData> = {};

    contributions.forEach((day, dayIndex) => {
      const date = new Date(day.date);
      const month = date.getMonth();
      const yearNum = date.getFullYear();
      const key = `${yearNum}-${month}`;

      if (!monthsData[key]) {
        monthsData[key] = {
          name: months[month],
          weeks: []
        };
      }

      const weekIndex = Math.floor(dayIndex / 7);
      if (!monthsData[key].weeks[weekIndex]) {
        monthsData[key].weeks[weekIndex] = [];
      }
      monthsData[key].weeks[weekIndex].push(day);
    });

    return Object.values(monthsData);
  };

  const monthsWithWeeks = getMonthsWithWeeks();

  return (
    <div className="github-contributions-card">
      <div className="card-header">
        <div className="header-info">
          <h3 className="card-title">GitHub Contributions</h3>
          <p className="card-subtitle">
            {loading ? 'Loading...' : `${totalContributions} contributions in ${year}`}
          </p>
        </div>
      </div>

      <a
        href={`https://github.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        @{username} →
      </a>

      {error && !loading && <div className="error-message"> ⚠️ Could not fetch GitHub contributions. Please try again later. </div>}

      {loading ? (<div className="loading-container"><div className="spinner" /></div>) : (
        <div className="graph-container">
          <div className="contributions-grid">
            <div className="months-container">
              {monthsWithWeeks.map((month, monthIdx) => (
                <div key={monthIdx} className="month-section">
                  <div className="month-header">{month.name}</div>
                  <div className="weeks-container">
                    {month.weeks.map((week, weekIdx) => (
                      <div key={weekIdx} className="week-column">
                        {week.map((day, dayIdx) => (
                          <TooltipWrap key={dayIdx} desc={`${day.count} contributions on ${new Date(day.date).toLocaleDateString(
                            'ro-RO',
                            {
                              weekday: 'short',
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            }
                          )}`}>
                            <div className={`contribution-day level-${day.level}`} data-count={day.count} />
                          </TooltipWrap>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="years-container">
            {years.map((yr, idx) => (
              <Button
                key={idx}
                className={`year-button ${yr === year ? 'btn-success' : 'btn-outline-success'}`}
                onClick={() => setYear(yr)}
              >
                {yr}
              </Button>
            ))}
          </div>
        </div>
      )}

      <div className="card-footer">
        <div className="legend">
          <span>Less</span>
          {[1, 2, 3, 4].map((level) => (
            <div key={level} className={`legend-box level-${level}`} />
          ))}
          <span>More</span>
        </div>
        <div className="auto-update-label">Auto-updates every 10 min</div>
      </div>
    </div>
  );
};

export default GitHubContributionsCard;