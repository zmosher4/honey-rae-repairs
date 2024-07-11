import { useState, useEffect } from 'react';
import { getAllTickets } from '../../services/ticketService';
import './Tickets.css';
import { Ticket } from './Ticket';
import { SearchBar } from './SearchBar';

export const TicketList = () => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchTickets = async () => {
      const ticketsArray = await getAllTickets();
      setAllTickets(ticketsArray);
      console.log('tick set');
    };
    fetchTickets();
  }, []);

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter((ticket) => ticket.emergency);
      setFilteredTickets(emergencyTickets);
    } else {
      setFilteredTickets(allTickets);
    }
  }, [showEmergencyOnly, allTickets]);

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTickets(foundTickets);
  }, [searchTerm, allTickets]);

  return (
    <>
      <div className="tickets-container"></div>
      <h2>Tickets</h2>
      <SearchBar
        setShowEmergencyOnly={setShowEmergencyOnly}
        setSearchTerm={setSearchTerm}
      />
      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return <Ticket key={ticketObj.id} ticket={ticketObj} />;
        })}
      </article>
    </>
  );
};
