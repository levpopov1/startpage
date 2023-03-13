import { useState } from 'react';

const locales = navigator.languages;
// const locales = 'en-us';

function Time() {
  const [dateTime, setDateTime] = useState(new Date());
  const [dateTimeFormat, setDateTimeFormat] =
    useState<Intl.DateTimeFormatOptions>({
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

  setTimeout(() => {
    setDateTime(new Date());
  }, 1000);

  return (
    <div>
      <p className="text-5xl">
        {dateTime.toLocaleString(locales, dateTimeFormat)}
      </p>
      <div className="flex flex-col mt-3 gap-y-1 items-start">
        <button
          onClick={() =>
            setDateTimeFormat((prev) => ({ ...prev, hour12: !prev.hour12 }))
          }
          type="button"
          className="rounded-md bg-purple-600 text-white font-semibold px-3 py-2 hover:bg-purple-800"
        >
          Toggle time format
        </button>
        <button
          onClick={() =>
            setDateTimeFormat((prev) => ({
              ...prev,
              month: prev.month === 'numeric' ? '2-digit' : 'numeric',
              day: prev.day === 'numeric' ? '2-digit' : 'numeric',
              year: prev.year === 'numeric' ? '2-digit' : 'numeric',
            }))
          }
          type="button"
          className="rounded-md bg-purple-600 text-white font-semibold px-3 py-2 hover:bg-purple-800"
        >
          Toggle Date format
        </button>
        <button
          onClick={() =>
            setDateTimeFormat((prev) => ({
              ...prev,
              weekday: prev.weekday ? undefined : 'long',
            }))
          }
          type="button"
          className="rounded-md bg-purple-600 text-white font-semibold px-3 py-2 hover:bg-purple-800"
        >
          Toggle weekday
        </button>
      </div>
    </div>
  );
}

export default Time;
