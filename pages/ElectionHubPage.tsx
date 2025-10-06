import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { useCountdown } from '../hooks/useCountdown';
import IhecQuickLinks from '../components/IhecQuickLinks';
import ClipboardCheckIcon from '../components/icons/ClipboardCheckIcon';
import LocationMarkerIcon from '../components/icons/LocationMarkerIcon';
import CalendarIcon from '../components/icons/CalendarIcon';
import UsersIcon from '../components/icons/UsersIcon';
import Input from '../components/ui/Input';
import { Link } from 'react-router-dom';
import CalculatorIcon from '../components/icons/CalculatorIcon';
import BellIcon from '../components/icons/BellIcon';

const DeadlineCountdown: React.FC = () => {
    const registrationDeadline = new Date('2025-08-01T23:59:59');
    const [days, hours, minutes, seconds] = useCountdown(registrationDeadline);

    if (days + hours + minutes + seconds <= 0) {
        return <p className="text-xl text-red-600 font-bold">انتهت فترة التسجيل!</p>;
    }

    return (
        <div className="flex justify-center space-x-2 space-x-reverse text-center text-gray-800">
            <div><span className="text-3xl font-bold">{days}</span><p className="text-sm">يوم</p></div>
            <div><span className="text-3xl font-bold">{hours}</span><p className="text-sm">ساعة</p></div>
            <div><span className="text-3xl font-bold">{minutes}</span><p className="text-sm">دقيقة</p></div>
            <div><span className="text-3xl font-bold">{seconds}</span><p className="text-sm">ثانية</p></div>
        </div>
    );
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
    <details className="p-4 rounded-lg bg-gray-50">
        <summary className="font-bold cursor-pointer">{question}</summary>
        <p className="mt-2 text-gray-700">{answer}</p>
    </details>
);

const ElectionHubPage: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900">المركز الإرشادي للانتخابات</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                        دليلك الشامل لجميع متطلبات ولوائح الانتخابات العراقية. أدوات للمرشحين وموارد للناخبين في مكان واحد.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Candidate Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 text-right border-r-4 border-[#007a3d] pr-4">أدوات للمرشحين</h2>
                        
                        <Card>
                             <div className="flex items-center mb-4">
                                <CalendarIcon className="w-8 h-8 text-[#007a3d] ml-4" />
                                <h3 className="text-xl font-bold">الموعد النهائي لتسجيل المرشحين</h3>
                            </div>
                            <DeadlineCountdown />
                        </Card>
                        
                        <Card>
                            <div className="flex items-center">
                                <ClipboardCheckIcon className="w-10 h-10 text-[#007a3d] ml-4" />
                                <div>
                                    <h3 className="text-xl font-bold">أداة التحقق من الأهلية</h3>
                                    <p className="text-gray-600">تحقق من متطلبات الترشح الأساسية.</p>
                                </div>
                            </div>
                            <Button variant="outline" className="mt-4 w-full">ابدأ التحقق</Button>
                        </Card>
                        
                         <Card>
                            <div className="flex items-center">
                                <CalculatorIcon className="w-10 h-10 text-[#007a3d] ml-4" />
                                <div>
                                    <h3 className="text-xl font-bold">حاسبة تمويل الحملة</h3>
                                    <p className="text-gray-600">أداة لتقدير ومتابعة نفقات حملتك.</p>
                                </div>
                            </div>
                             <Button variant="outline" className="mt-4 w-full">افتح الحاسبة</Button>
                        </Card>

                        <Card>
                            <div className="flex justify-between items-center">
                               <div className="flex items-center">
                                    <BellIcon className="w-8 h-8 text-[#007a3d] ml-4" />
                                    <div>
                                        <h3 className="text-xl font-bold">تنبيهات الامتثال</h3>
                                        <p className="text-gray-600">تلقي إشعارات حول المواعيد النهائية والقواعد.</p>
                                    </div>
                                </div>
                                <label className="inline-flex items-center cursor-pointer">
                                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                </label>
                            </div>
                        </Card>
                    </div>

                    {/* Voter Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-gray-800 text-right border-r-4 border-[#007a3d] pr-4">موارد للناخبين</h2>
                        
                        <Card>
                             <div className="flex items-center">
                                <UsersIcon className="w-10 h-10 text-[#007a3d] ml-4" />
                                <div>
                                    <h3 className="text-xl font-bold">التحقق من المرشحين</h3>
                                    <p className="text-gray-600">ابحث عن المرشحين في دائرتك وتأكد من توثيقهم.</p>
                                </div>
                            </div>
                            <Link to="/dashboard">
                                <Button variant="outline" className="mt-4 w-full">ابحث عن مرشح الآن</Button>
                            </Link>
                        </Card>
                        
                        <Card>
                            <div className="flex items-center">
                                <LocationMarkerIcon className="w-10 h-10 text-[#007a3d] ml-4" />
                                <div>
                                    <h3 className="text-xl font-bold">ابحث عن مركز الاقتراع</h3>
                                    <p className="text-gray-600">حدد موقع مركزك الانتخابي بسهولة.</p>
                                </div>
                            </div>
                            <div className="mt-4 space-y-3">
                                <Input id="voter-id" placeholder="أدخل رقم بطاقتك الانتخابية" />
                                <Button className="w-full">بحث</Button>
                            </div>
                        </Card>
                        
                        <Card>
                           <IhecQuickLinks />
                        </Card>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-center mb-8">أسئلة شائعة حول الانتخابات</h2>
                    <div className="max-w-4xl mx-auto space-y-4">
                        <FAQItem 
                            question="كيف يمكنني التسجيل للتصويت؟"
                            answer="يمكنك التحقق من حالة تسجيلك وتحديث معلوماتك من خلال زيارة أقرب مركز تسجيل تابع للمفوضية العليا المستقلة للانتخابات (IHEC) أو عبر بوابتهم الإلكترونية الرسمية."
                        />
                         <FAQItem 
                            question="ما هي الوثائق المطلوبة يوم الاقتراع؟"
                            answer="يجب عليك إحضار بطاقتك الانتخابية البيومترية. قد يُطلب منك إبراز وثيقة تعريفية أخرى مثل البطاقة الوطنية الموحدة أو هوية الأحوال المدنية للتحقق."
                        />
                         <FAQItem 
                            question="هل يمكنني التصويت إذا كنت خارج العراق؟"
                            answer="نعم، تنظم المفوضية تصويت العراقيين في الخارج في العديد من الدول. يجب عليك التسجيل مسبقاً في السفارة أو القنصلية العراقية في بلد إقامتك. تابع إعلانات المفوضية لمعرفة المواعيد والمواقع المحددة."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectionHubPage;