
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { Candidate } from '../types';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';

const mockParty = {
    id: 'tahaleef-al-nasr',
    name: 'تحالف النصر',
    logoUrl: 'https://via.placeholder.com/150/007a3d/FFFFFF?text=Logo', // Placeholder logo
    leader: 'حيدر العبادي',
    founded: '2018',
    description: 'تحالف النصر هو تحالف سياسي عراقي تأسس لخوض الانتخابات التشريعية. يركز التحالف على تعزيز الأمن، ومحاربة الفساد، وتحسين الخدمات العامة للمواطنين.',
};

const mockPartyCandidates: Candidate[] = [
    { id: 1, name: 'أحمد علي', party: 'تحالف النصر', imageUrl: 'https://picsum.photos/200/200?random=11', verified: true },
    { id: 10, name: 'سارة محمود', party: 'تحالف النصر', imageUrl: 'https://picsum.photos/200/200?random=12', verified: true },
    { id: 11, name: 'يوسف خالد', party: 'تحالف النصر', imageUrl: 'https://picsum.photos/200/200?random=13', verified: true },
];

const CandidateCard: React.FC<{ candidate: Candidate }> = ({ candidate }) => (
    <Card className="flex items-center space-x-4 space-x-reverse">
        <img src={candidate.imageUrl} alt={candidate.name} className="w-16 h-16 rounded-full object-cover" />
        <div>
            <h3 className="text-lg font-bold text-gray-900">{candidate.name}</h3>
            {candidate.verified && (
            <div className="mt-1 flex items-center text-xs text-green-600 font-semibold">
                <CheckCircleIcon className="w-4 h-4 ml-1" />
                مرشح موثق
            </div>
            )}
        </div>
    </Card>
);

const PoliticalPartyPage: React.FC = () => {
    // In a real app, `id` would be used to fetch party data.
    const { id } = useParams<{ id: string }>();

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                <Card className="mb-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-right space-y-4 md:space-y-0 md:space-x-8 md:space-x-reverse">
                        <img src={mockParty.logoUrl} alt={`${mockParty.name} logo`} className="w-32 h-32 rounded-lg object-contain bg-white shadow-md" />
                        <div>
                            <h1 className="text-4xl font-extrabold text-gray-900">{mockParty.name}</h1>
                            <p className="text-lg text-gray-600 mt-2">{mockParty.description}</p>
                            <div className="mt-4 flex justify-center md:justify-start space-x-4 space-x-reverse text-gray-700">
                                <span><strong>القائد:</strong> {mockParty.leader}</span>
                                <span><strong>سنة التأسيس:</strong> {mockParty.founded}</span>
                            </div>
                        </div>
                    </div>
                </Card>

                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-right border-r-4 border-[#007a3d] pr-4">أبرز المرشحين</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mockPartyCandidates.map(c => <CandidateCard key={c.id} candidate={c} />)}
                    </div>
                     <div className="text-center mt-8">
                        <Link to="/dashboard" className="text-[#007a3d] font-bold">عرض جميع المرشحين</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PoliticalPartyPage;
