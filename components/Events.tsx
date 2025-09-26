import React from 'react';
import { Event } from '../types';
import Section from './Section';

interface EventsProps {
  events: Event[];
}

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  
  return (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex-shrink-0 text-center bg-iwc-gold text-iwc-blue rounded-md p-3 w-20">
        <p className="text-3xl font-bold">{day}</p>
        <p className="text-sm font-semibold">{month}</p>
      </div>
      <div>
        <h3 className="text-lg font-bold text-iwc-blue">{event.name}</h3>
        <p className="text-sm text-gray-500">{event.location}</p>
        <p className="mt-1 text-gray-700">{event.description}</p>
      </div>
    </div>
  );
};

const Events: React.FC<EventsProps> = ({ events }) => {
  const now = new Date();
  // Sort events by date descending to show newest first
  const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= now).reverse(); // show nearest upcoming first
  const pastEvents = sortedEvents.filter(event => new Date(event.date) < now);

  return (
    <Section
      id="events"
      title="Club Events"
      subtitle="Join us, get involved, and be part of our community initiatives."
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-serif font-bold text-iwc-blue mb-6 text-center lg:text-left">Upcoming Events</h3>
          <div className="space-y-6">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => <EventItem key={event.id} event={event} />)
            ) : (
              <p className="text-center text-gray-500 p-4 bg-white rounded-lg shadow-sm">No upcoming events scheduled. Please check back soon!</p>
            )}
          </div>
        </div>
        <div>
           <h3 className="text-2xl font-serif font-bold text-iwc-blue mb-6 text-center lg:text-left">Past Events</h3>
           <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2">
             {pastEvents.length > 0 ? (
                pastEvents.map((event) => <EventItem key={event.id} event={event} />)
             ) : (
                <p className="text-center text-gray-500 p-4 bg-white rounded-lg shadow-sm">Our event history will appear here.</p>
             )}
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Events;