import { useState, useCallback } from 'react';
import { Network, Search } from 'lucide-react';
import ReactFlow, { Background, Controls, MiniMap, Node, Edge } from 'react-flow-renderer';

const networkingNodes: Node[] = [
  { id: 'me', data: { label: 'Me', desc: 'You are the center of your professional and personal network.' }, position: { x: 250, y: 100 } },
  // Social Media Platforms
  { id: 'social', data: { label: 'Social Media Platforms', desc: 'Platforms to connect and communicate.' }, position: { x: 50, y: 0 } },
  { id: 'linkedin', data: { label: 'LinkedIn', desc: 'Professional networking platform.' }, position: { x: -50, y: -80 } },
  { id: 'whatsapp', data: { label: 'WhatsApp', desc: 'Instant messaging and group communication.' }, position: { x: 50, y: -120 } },
  { id: 'telegram', data: { label: 'Telegram', desc: 'Messaging app for communities and networking.' }, position: { x: 150, y: -80 } },
  // Professional Connections
  { id: 'professional', data: { label: 'Professional Connections', desc: 'Expand your network for career growth.' }, position: { x: 450, y: 0 } },
  { id: 'professors', data: { label: 'University Professors', desc: 'Academic mentors and guides.' }, position: { x: 350, y: -80 } },
  { id: 'alumni', data: { label: 'Alumni Network', desc: 'Connect with university alumni.' }, position: { x: 550, y: -80 } },
  { id: 'industry', data: { label: 'Industry Professionals', desc: 'Professionals working in your field.' }, position: { x: 450, y: -120 } },
  { id: 'communities', data: { label: 'Online Communities', desc: 'Communities like GitHub and Stack Overflow.' }, position: { x: 450, y: 80 } },
  // Family & Friends
  { id: 'family', data: { label: 'Family & Friends', desc: 'Personal support network.' }, position: { x: 50, y: 200 } },
  { id: 'familymembers', data: { label: 'Family Members', desc: 'Immediate and extended family.' }, position: { x: -50, y: 300 } },
  { id: 'friendsoffamily', data: { label: 'Friends of Family', desc: 'Connections through family.' }, position: { x: 150, y: 300 } },
  // Real-World Interactions
  { id: 'real', data: { label: 'Real-World Interactions', desc: 'Face-to-face networking opportunities.' }, position: { x: 450, y: 200 } },
  { id: 'careerfairs', data: { label: 'Career Fairs & Events', desc: 'Events to meet employers and professionals.' }, position: { x: 350, y: 300 } },
  { id: 'localbiz', data: { label: 'Local Business Owners', desc: 'Entrepreneurs and business contacts.' }, position: { x: 550, y: 300 } },
  { id: 'interviews', data: { label: 'Informational Interviews', desc: 'Conversations to learn about careers.' }, position: { x: 450, y: 320 } },
  // Hidden Job Market
  { id: 'hidden', data: { label: 'Hidden Job Market', desc: 'Opportunities not publicly advertised.' }, position: { x: 250, y: 250 } },
  { id: 'referrals', data: { label: 'Referrals', desc: 'Jobs found through personal recommendations.' }, position: { x: 150, y: 350 } },
  { id: 'unpublished', data: { label: 'Unpublished Internships', desc: 'Internships not posted online.' }, position: { x: 250, y: 350 } },
  { id: 'networkingopps', data: { label: 'Networking Opportunities', desc: 'Opportunities via networking.' }, position: { x: 350, y: 350 } },
];

const networkingEdges: Edge[] = [
  // Central node to primary branches
  { id: 'e1', source: 'me', target: 'social' },
  { id: 'e2', source: 'me', target: 'professional' },
  { id: 'e3', source: 'me', target: 'family' },
  { id: 'e4', source: 'me', target: 'real' },
  { id: 'e5', source: 'me', target: 'hidden' },
  // Social Media Platforms
  { id: 'e6', source: 'social', target: 'linkedin' },
  { id: 'e7', source: 'social', target: 'whatsapp' },
  { id: 'e8', source: 'social', target: 'telegram' },
  // Professional Connections
  { id: 'e9', source: 'professional', target: 'professors' },
  { id: 'e10', source: 'professional', target: 'alumni' },
  { id: 'e11', source: 'professional', target: 'industry' },
  { id: 'e12', source: 'professional', target: 'communities' },
  // Family & Friends
  { id: 'e13', source: 'family', target: 'familymembers' },
  { id: 'e14', source: 'family', target: 'friendsoffamily' },
  // Real-World Interactions
  { id: 'e15', source: 'real', target: 'careerfairs' },
  { id: 'e16', source: 'real', target: 'localbiz' },
  { id: 'e17', source: 'real', target: 'interviews' },
  // Hidden Job Market
  { id: 'e18', source: 'hidden', target: 'referrals' },
  { id: 'e19', source: 'hidden', target: 'unpublished' },
  { id: 'e20', source: 'hidden', target: 'networkingopps' },
];

const jobMarketNodes: Node[] = [
  { id: 'hidden', data: { label: 'Hidden Job Market', desc: 'Opportunities not publicly advertised.' }, position: { x: 250, y: 100 } },
  { id: 'referrals', data: { label: 'Referrals', desc: 'Jobs found through referrals.' }, position: { x: 100, y: 0 } },
  { id: 'famfriends', data: { label: 'Family & Friends', desc: 'Referrals from family and friends.' }, position: { x: 0, y: -80 } },
  { id: 'professors', data: { label: 'Professors', desc: 'Referrals from professors.' }, position: { x: 200, y: -80 } },
  { id: 'unpublished', data: { label: 'Unpublished Internships', desc: 'Internships not posted online.' }, position: { x: 400, y: 0 } },
  { id: 'startups', data: { label: 'Local Startups', desc: 'Internships at local startups.' }, position: { x: 350, y: -80 } },
  { id: 'events', data: { label: 'Industry Events', desc: 'Internships found at events.' }, position: { x: 450, y: -80 } },
  { id: 'networking', data: { label: 'Networking Opportunities', desc: 'Opportunities via networking.' }, position: { x: 250, y: 250 } },
  { id: 'conversations', data: { label: 'Conversations', desc: 'Opportunities from conversations.' }, position: { x: 150, y: 350 } },
  { id: 'meetups', data: { label: 'Tech Meetups', desc: 'Tech meetups for networking.' }, position: { x: 250, y: 350 } },
  { id: 'dm', data: { label: 'LinkedIn DM', desc: 'Direct messages on LinkedIn.' }, position: { x: 350, y: 350 } },
];

const tabData = [
  {
    label: 'My Networking',
    icon: <Network size={20} className="mr-2" />,
    nodes: networkingNodes,
    edges: networkingEdges,
  },
  {
    label: 'Hidden Job Market',
    icon: <Search size={20} className="mr-2" />,
    nodes: jobMarketNodes,
    edges: jobMarketEdges,
  },
];

const Mindmap = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; label: string; desc: string } | null>(null);

  const onNodeClick = useCallback((_: unknown, node: Node) => {
    setTooltip({
      x: node.positionAbsolute?.x || 0,
      y: node.positionAbsolute?.y || 0,
      label: node.data.label,
      desc: node.data.desc,
    });
  }, []);

  const closeTooltip = () => setTooltip(null);

  return (
    <section id="mindmap" className="pt-16 -mt-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Mindmap</h2>
        <div className="flex mb-6 border-b border-gray-200">
          {tabData.map((tab, idx) => (
            <button
              key={tab.label}
              className={`px-6 py-2 -mb-px font-semibold flex items-center transition-colors duration-300 border-b-2 focus:outline-none ${
                activeTab === idx
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative bg-white rounded-lg shadow-lg p-4 min-h-[500px] transition-all duration-500">
          <div className="h-[420px] w-full">
            <ReactFlow
              nodes={tabData[activeTab].nodes}
              edges={tabData[activeTab].edges}
              fitView
              onNodeClick={onNodeClick}
              panOnScroll
              zoomOnScroll
              style={{ background: '#f8fafc', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              <MiniMap nodeColor={() => '#3b82f6'} nodeStrokeWidth={2} />
              <Controls />
              <Background gap={16} color="#e0e7ef" />
            </ReactFlow>
            {tooltip && (
              <div
                className="absolute z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-[220px] max-w-xs transition-opacity duration-200"
                style={{ left: tooltip.x + 60, top: tooltip.y + 40 }}
                onClick={closeTooltip}
              >
                <div className="font-bold text-blue-700 mb-1">{tooltip.label}</div>
                <div className="text-gray-700 text-sm">{tooltip.desc}</div>
                <div className="mt-2 text-xs text-gray-400">Click anywhere to close</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mindmap;
// To use this component, install react-flow-renderer:
// npm install react-flow-renderer