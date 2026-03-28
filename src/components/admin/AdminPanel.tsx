import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { LogOut, Search, Filter, Users, Calendar, Phone, MessageCircle, MapPin, Loader2 } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  phone: string;
  city: string;
  contactMethod: 'call' | 'whatsapp';
  timestamp: Timestamp;
}

const AdminPanel: React.FC = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [contactMethodFilter, setContactMethodFilter] = useState<'all' | 'call' | 'whatsapp'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name-asc' | 'name-desc'>('newest');

  // Fetch leads from Firestore
  useEffect(() => {
    const q = query(collection(db, 'leads'), orderBy('timestamp', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const leadsData: Lead[] = [];
      snapshot.forEach((doc) => {
        leadsData.push({ id: doc.id, ...doc.data() } as Lead);
      });
      setLeads(leadsData);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching leads:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Filter and sort leads
  useEffect(() => {
    let filtered = [...leads];

    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (lead) =>
          lead.name.toLowerCase().includes(search) ||
          lead.phone.includes(search) ||
          lead.city.toLowerCase().includes(search)
      );
    }

    // Apply contact method filter
    if (contactMethodFilter !== 'all') {
      filtered = filtered.filter((lead) => lead.contactMethod === contactMethodFilter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.timestamp.seconds - a.timestamp.seconds;
        case 'oldest':
          return a.timestamp.seconds - b.timestamp.seconds;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    setFilteredLeads(filtered);
  }, [leads, searchTerm, contactMethodFilter, sortBy]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const formatDate = (timestamp: Timestamp) => {
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-700/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-700/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-neutral-800/60 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                Leads Dashboard
              </h1>
              <p className="text-sm text-neutral-400 mt-1">
                Welcome back, {user?.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-5 py-8">
          {/* Stats Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-[#0a0a0a] rounded-xl p-6 border border-neutral-800/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-600/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Total Leads</p>
                  <p className="text-2xl font-bold text-white">{leads.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-[#0a0a0a] rounded-xl p-6 border border-neutral-800/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">Call Requests</p>
                  <p className="text-2xl font-bold text-white">
                    {leads.filter((l) => l.contactMethod === 'call').length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#0a0a0a] rounded-xl p-6 border border-neutral-800/60">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600/10 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-neutral-400 text-sm">WhatsApp Requests</p>
                  <p className="text-2xl font-bold text-white">
                    {leads.filter((l) => l.contactMethod === 'whatsapp').length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-[#0a0a0a] rounded-xl p-5 border border-neutral-800/60 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search by name, phone, or city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-11 bg-[#050505] border border-neutral-700 rounded-lg pl-10 pr-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all"
                />
              </div>

              {/* Contact Method Filter */}
              <div>
                <select
                  value={contactMethodFilter}
                  onChange={(e) => setContactMethodFilter(e.target.value as any)}
                  className="w-full h-11 bg-[#050505] border border-neutral-700 rounded-lg px-4 text-white focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all"
                >
                  <option value="all">All Contact Methods</option>
                  <option value="call">Call Only</option>
                  <option value="whatsapp">WhatsApp Only</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full h-11 bg-[#050505] border border-neutral-700 rounded-lg px-4 text-white focus:outline-none focus:border-amber-600/50 focus:ring-1 focus:ring-amber-600/30 transition-all"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-[#0a0a0a] rounded-xl border border-neutral-800/60 overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 text-amber-500 animate-spin" />
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="text-center py-20">
                <Users className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                <p className="text-neutral-400 text-lg">
                  {searchTerm || contactMethodFilter !== 'all' ? 'No leads match your filters' : 'No leads yet'}
                </p>
                <p className="text-neutral-500 text-sm mt-2">
                  {searchTerm || contactMethodFilter !== 'all' ? 'Try adjusting your search criteria' : 'Leads will appear here when submitted'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#050505] border-b border-neutral-800">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-300">Name</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-300">Phone</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-300">City</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-300">Contact Method</th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-neutral-300">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-[#0f0f0f] transition-colors">
                        <td className="px-6 py-4 text-white font-medium">{lead.name}</td>
                        <td className="px-6 py-4">
                          <a 
                            href={`tel:${lead.phone}`}
                            className="text-amber-500 hover:text-amber-400 transition-colors"
                          >
                            {lead.phone}
                          </a>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-neutral-300">
                            <MapPin className="w-4 h-4 text-neutral-500" />
                            {lead.city || 'N/A'}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {lead.contactMethod === 'call' ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-600/10 text-blue-400 rounded-full text-sm">
                              <Phone className="w-3.5 h-3.5" />
                              Call
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-600/10 text-green-400 rounded-full text-sm">
                              <MessageCircle className="w-3.5 h-3.5" />
                              WhatsApp
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-neutral-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            {formatDate(lead.timestamp)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Results Count */}
          {!loading && filteredLeads.length > 0 && (
            <div className="mt-4 text-center text-neutral-500 text-sm">
              Showing {filteredLeads.length} of {leads.length} leads
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
