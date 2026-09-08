import { useState } from 'react';
import { availabilityData, statusConfig, type DateStatus } from '@/data/availability';
import Reveal from './Reveal';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const eventTypes = ['WEDDING', 'ENGAGEMENT', 'BRIDAL', 'EDITORIAL'];

export default function Availability({ onContinue }: { onContinue: (date: string, eventType: string) => void }) {
  const [monthIndex, setMonthIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedEventType, setSelectedEventType] = useState<string | null>(null);

  const month = availabilityData[monthIndex];
  const selectedDate = selectedDay !== null ? month.dates.find((d) => d.day === selectedDay) : null;
  const selectedStatus: DateStatus | null = selectedDate?.status ?? null;

  const formattedDate = selectedDay
    ? `${String(selectedDay).padStart(2, '0')} ${month.name} ${month.year}`
    : '';

  const handleContinue = () => {
    if (formattedDate && selectedEventType) {
      onContinue(formattedDate, selectedEventType);
    }
  };

  return (
    <section id="availability" className="relative bg-charcoal py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <p className="label mb-4">BOOKING CALENDAR</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="editorial-heading text-4xl md:text-6xl lg:text-7xl">
              IS YOUR DATE
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <h2 className="editorial-heading text-4xl md:text-6xl lg:text-7xl text-bone/50">
              STILL ALIVE?
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 md:gap-12">
          {/* Calendar */}
          <Reveal>
            <div className="bg-obsidian border border-ash/30 p-6 md:p-8">
              {/* Month navigation */}
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => {
                    setMonthIndex((prev) => Math.max(0, prev - 1));
                    setSelectedDay(null);
                  }}
                  disabled={monthIndex === 0}
                  className="text-ivory/60 hover:text-ivory disabled:opacity-30 transition-colors p-2"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <h3 className="font-serif text-2xl md:text-3xl text-ivory font-light tracking-wide">
                  {month.name} {month.year}
                </h3>
                <button
                  onClick={() => {
                    setMonthIndex((prev) => Math.min(availabilityData.length - 1, prev + 1));
                    setSelectedDay(null);
                  }}
                  disabled={monthIndex === availabilityData.length - 1}
                  className="text-ivory/60 hover:text-ivory disabled:opacity-30 transition-colors p-2"
                  aria-label="Next month"
                >
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Day labels */}
              <div className="grid grid-cols-7 gap-1 md:gap-2 mb-3">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                  <div key={i} className="text-center label text-[8px] py-2">
                    {d}
                  </div>
                ))}
              </div>

              {/* Dates grid */}
              <div className="grid grid-cols-7 gap-1 md:gap-2">
                {month.dates.map((date) => {
                  const config = statusConfig[date.status];
                  const isSelected = selectedDay === date.day;
                  return (
                    <button
                      key={date.day}
                      onClick={() => date.status !== 'booked' && setSelectedDay(date.day)}
                      disabled={date.status === 'booked'}
                      className={`aspect-square flex items-center justify-center text-sm font-sans border transition-all duration-300 ${config.bgColor} ${
                        isSelected
                          ? 'border-ivory bg-ivory/10 text-ivory'
                          : config.color
                      }`}
                      title={config.hoverText}
                    >
                      {date.day}
                    </button>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-ash/20">
                {(['available', 'limited', 'booked'] as DateStatus[]).map((status) => (
                  <div key={status} className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 border ${
                        status === 'available'
                          ? 'border-ash/50 bg-transparent'
                          : status === 'limited'
                          ? 'border-burgundy/40 bg-burgundy/20'
                          : 'border-ash/20 bg-charcoal'
                      }`}
                    />
                    <span className="label text-[9px]">{statusConfig[status].label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Selection panel */}
          <Reveal delay={150}>
            <div className="bg-obsidian border border-ash/30 p-6 md:p-8 flex flex-col">
              <p className="label mb-6">YOUR SELECTION</p>

              {selectedDay && selectedStatus ? (
                <>
                  <p className="font-serif text-3xl md:text-4xl text-ivory font-light mb-2">
                    {formattedDate}
                  </p>
                  <div className="flex items-center gap-2 mb-8">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        selectedStatus === 'available'
                          ? 'bg-ivory'
                          : selectedStatus === 'limited'
                          ? 'bg-burgundy-light'
                          : 'bg-fog'
                      }`}
                    />
                    <p className="label">STATUS: {statusConfig[selectedStatus].label}</p>
                  </div>

                  {/* Event type */}
                  <p className="label mb-3">EVENT TYPE</p>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {eventTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedEventType(type)}
                        className={`py-3 text-[10px] uppercase tracking-widest border transition-all duration-300 ${
                          selectedEventType === type
                            ? 'border-ivory bg-ivory/10 text-ivory'
                            : 'border-ash/40 text-fog hover:text-bone hover:border-ash'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  {/* Continue */}
                  <button
                    onClick={handleContinue}
                    disabled={!selectedEventType}
                    className="btn-solid w-full justify-center disabled:opacity-30 disabled:cursor-not-allowed group mt-auto"
                  >
                    CONTINUE TO INQUIRY
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center flex-1 text-center py-12">
                  <p className="font-serif italic text-bone/40 text-lg">
                    Select a date to begin.
                  </p>
                  <p className="font-serif italic text-bone/30 text-sm mt-4">
                    Availability is limited. Apparently everyone wants their wedding photographed.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
