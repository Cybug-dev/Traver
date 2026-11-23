import { useId, useState, type FormEvent } from "react";

export default function TripSearchForm() {
  const id = useId();
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const dateLabel = date
    ? new Intl.DateTimeFormat("en-GB", {
        day: "2-digit", month: "long", year: "numeric",
      }).format(new Date(`${date}T12:00:00`))
    : "03 August 2022";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(`Demo trip: ${location.trim()} on ${dateLabel}. Destination results are coming soon; no booking has been made.`);
  }

  return (
    <>
      <form aria-label="Plan your trip" className="trip-search grid items-center rounded-lg border border-outline bg-canvas shadow-search" onSubmit={handleSubmit}>
        <label className="trip-search-field flex min-w-0 items-center gap-3 rounded-lg focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus-ring" htmlFor={`${id}-location`}>
          <span aria-hidden="true" className="trip-search-icon grid shrink-0 place-items-center rounded-full bg-peach text-accent">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="trip-search-label block font-bold text-content">Location</span>
            <input autoComplete="off" className="trip-search-value block w-full min-w-0 bg-transparent text-secondary placeholder:text-muted focus-visible:outline-none" id={`${id}-location`} maxLength={80} name="location" onChange={(event) => { setLocation(event.target.value); setMessage(""); }} pattern=".*\S.*" placeholder="Where are you going?" required type="text" value={location} />
          </span>
        </label>

        <label className="trip-search-field trip-search-date relative flex min-w-0 items-center gap-3 rounded-lg focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-focus-ring" htmlFor={`${id}-date`}>
          <span aria-hidden="true" className="trip-search-icon grid shrink-0 place-items-center rounded-full bg-peach text-accent">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 11h18" /></svg>
          </span>
          <span className="min-w-0">
            <span className="trip-search-label block font-bold text-content">Select Date</span>
            <span aria-hidden="true" className="trip-search-value block whitespace-nowrap text-secondary">{dateLabel}</span>
          </span>
          <input aria-label="Select Date" className="absolute inset-0 h-full w-full cursor-pointer opacity-0" id={`${id}-date`} name="date" onClick={(event) => event.currentTarget.showPicker?.()} onChange={(event) => { setDate(event.target.value); setMessage(""); }} required type="date" value={date} />
        </label>

        <button className="trip-search-button min-h-11 whitespace-nowrap rounded-control bg-accent px-4 font-semibold text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring active:scale-95" type="submit">Get Started</button>
      </form>
      <p aria-live="polite" className="mt-3 text-xs leading-relaxed text-secondary" role="status">{message}</p>
    </>
  );
}
