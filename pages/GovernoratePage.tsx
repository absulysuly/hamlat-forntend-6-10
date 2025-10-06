import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { IRAQ_GOVERNORATES } from '../constants';
import { Candidate, NewsArticle } from '../types';
import CheckCircleIcon from '../components/icons/CheckCircleIcon';
import StarIcon from '../components/icons/StarIcon';

const mockCandidates: Candidate[] = [
    { id: 1, name: 'أحمد علي', party: 'تحالف النصر', imageUrl: 'https://picsum.photos/200/200?random=1', verified: true },
    { id: 2, name: 'فاطمة حسن', party: 'دولة القانون', imageUrl: 'https://picsum.photos/200/200?random=2', verified: true },
    { id: 3, name: 'علي كريم', party: 'التيار الصدري', imageUrl: 'https://picsum.photos/200/200?random=3', verified: false },
    { id: 4, name: 'مريم جاسم', party: 'الحزب الديمقراطي الكردستاني', imageUrl: 'https://picsum.photos/200/200?random=4', verified: true },
    { id: 5, name: 'حسن عبدالله', party: 'مستقل', imageUrl: 'https://picsum.photos/200/200?random=5', verified: true },
    { id: 6, name: 'زينب محمد', party: 'تحالف الفتح', imageUrl: 'https://picsum.photos/200/200?random=6', verified: false },
];

const mockFeaturedCandidates: Candidate[] = [
    { id: 7, name: 'يوسف القاسم', party: 'ائتلاف الوطنية', imageUrl: 'https://picsum.photos/200/200?random=7', verified: true },
    { id: 8, name: 'نور الهدى', party: 'مستقل', imageUrl: 'https://picsum.photos/200/200?random=8', verified: true },
];


const mockNews: NewsArticle[] = [
    { id: 1, title: 'انطلاق الحملات الانتخابية في المحافظة', summary: 'بدأ المرشحون حملاتهم الانتخابية مع التركيز على القضايا المحلية والخدمية...', date: '2025-09-15' },
    { id: 2, title: 'IHEC تؤكد جاهزيتها ليوم الاقتراع', summary: 'أعلنت المفوضية العليا المستقلة للانتخابات عن استكمال كافة الاستعدادات اللوجستية والفنية...', date: '2025-09-14' },
    { id: 3, title: 'نقاشات حول البرامج الانتخابية للمرشحين الشباب', summary: 'شهدت المدينة ندوة حوارية شارك فيها عدد من المرشحين الشباب لعرض رؤاهم المستقبلية...', date: '2025-09-12' },
];

const CandidateCard: React.FC<{ candidate: Candidate; isFeatured?: boolean }> = ({ candidate, isFeatured = false }) => (
    <Card className={`flex items-center space-x-4 space-x-reverse hover:shadow-lg transition-shadow ${isFeatured ? 'bg-green-50' : ''}`}>
        <img src={candidate.imageUrl} alt={candidate.name} className="w-20 h-20 rounded-full object-cover" />
        <div className="flex-1">
            <div className="flex items-center">
                <h3 className="text-xl font-bold text-gray-900">{candidate.name}</h3>
                {isFeatured && <StarIcon className="w-5 h-5 text-yellow-500 mr-2" />}
            </div>
            <p className="text-gray-600">{candidate.party}</p>
            {candidate.verified && (
            <div className="mt-1 flex items-center text-sm text-green-600 font-semibold">
                <CheckCircleIcon className="w-4 h-4 ml-1" />
                مرشح موثق
            </div>
            )}
        </div>
        <Link to={`/candidate/${candidate.id}`} className="text-[#007a3d] font-semibold">
            عرض الملف
        </Link>
    </Card>
);

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <Card className="hover:bg-gray-50 transition-colors">
        <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
        <p className="text-gray-600 mt-2">{article.summary}</p>
        <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">{article.date}</span>
            <Link to={`/news/${article.id}`} className="text-[#007a3d] font-semibold">اقرأ المزيد</Link>
        </div>
    </Card>
);


const GovernoratePage: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const governorate = IRAQ_GOVERNORATES.find(g => g.enName.toLowerCase() === name);

    if (!governorate) {
        return <div className="text-center py-20">
            <h1 className="text-4xl">المحافظة غير موجودة</h1>
            <Link to="/" className="text-lg text-[#007a3d] mt-4 inline-block">العودة إلى الرئيسية</Link>
        </div>;
    }

    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900">محافظة {governorate.name}</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        استكشف المرشحين، تابع آخر الأخبار، وشارك في العملية الديمقراطية في محافظتك.
                    </p>
                </div>
                
                {/* Featured Candidates (Halo Section) */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 text-right border-r-4 border-yellow-500 pr-4 flex items-center justify-between">
                        <span>المرشحون المميزون</span>
                        <StarIcon className="w-6 h-6 text-yellow-500"/>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {mockFeaturedCandidates.map(c => <CandidateCard key={c.id} candidate={c} isFeatured />)}
                    </div>
                </section>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-right border-r-4 border-[#007a3d] pr-4">جميع المرشحين في {governorate.name}</h2>
                        <div className="space-y-6">
                            {mockCandidates.map(c => <CandidateCard key={c.id} candidate={c} />)}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-right border-r-4 border-[#007a3d] pr-4">آخر الأخبار</h2>
                        <div className="space-y-6">
                            {mockNews.map(n => <NewsCard key={n.id} article={n} />)}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GovernoratePage;