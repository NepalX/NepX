"use client";

import { useEffect, useState } from "react";

const EVENT_START = new Date("2026-05-30T00:00:00+05:45").getTime();

type CountdownValue = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

function calculateCountdown(): CountdownValue {
  const remaining = Math.max(EVENT_START - Date.now(), 0);
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export function CountdownTimer() {
  const [countdown, setCountdown] = useState<CountdownValue | null>(null);

  useEffect(() => {
    setCountdown(calculateCountdown());

    const interval = window.setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const items = [
    [countdown?.days ?? "--", "Days", "primary"],
    [countdown?.hours ?? "--", "Hours", "secondary"],
    [countdown?.minutes ?? "--", "Mins", "primary"],
    [countdown?.seconds ?? "--", "Secs", "secondary"],
  ];

  return (
    <div className="countdown" aria-label="Countdown to May 30, 2026">
      {items.map(([value, label, tone]) => (
        <div className={`count-card ${tone}`} key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
