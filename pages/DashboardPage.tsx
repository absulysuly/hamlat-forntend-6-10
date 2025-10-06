import React from 'react';
import Card from '../components/ui/Card';
import { IRAQ_GOVERNORATES } from '../constants';
import Button from '../components/ui/Button';

const StatCard: React.FC<{ title: string; value: string; change?: string; changeType?: 'up' | 'down' }> = ({ title, value, change, changeType }) => (
    <Card>
        <p className="text-lg font-semibold text-gray-600">{title}</p>
        <p className="text-4xl font-bold text-gray-900 mt-2">{value}</p>
        {change && (
            <p className={`mt-1 text-sm ${changeType === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                {change}
            </p>
        )}
    </Card>
);

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900">لوحة بيانات المرشح</h1>
            <p className="text-lg text-gray-600 mt-2">مرحباً بك! هنا يمكنك متابعة أداء حملتك الرقمية.</p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard title="إجمالي المسجلين" value="25,123,456" />
            <StatCard title="نسبة المشاركة المتوقعة" value="65%" change="+2% عن الأسبوع الماضي" changeType="up" />
            <StatCard title="عدد المرشحين المعتمدين" value="8,500" />
            <StatCard title="البلاغات التي تم التحقق منها" value="1,245" change="-5% مخالفات جديدة" changeType="down" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Participation by Governorate */}
            <div className="lg:col-span-2">
                <Card>
                    <h2 className="text-2xl font-bold mb-4">المشاركة حسب المحافظة (تقديري)</h2>
                    <div className="space-y-4">
                        {IRAQ_GOVERNORATES.map(gov => {
                            const percentage = Math.floor(Math.random() * (75 - 45 + 1)) + 45; // Random % between 45 and 75
                            return (
                                <div key={gov.id}>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-base font-medium text-gray-700">{gov.name}</span>
                                        <span className="text-sm font-medium text-gray-700">{percentage}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-[#007a3d] h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Card>
            </div>

            {/* Other Info */}
            <div className="space-y-8">
                <Card className="bg-gradient-to-br from-green-600 to-green-800 text-white">
                    <h2 className="text-2xl font-bold mb-4">تأثير حملتك الخضراء</h2>
                    <div className="grid grid-cols-2 gap-4 text-center mb-6">
                        <div>
                            <span className="text-3xl font-bold">12</span>
                            <p className="text-green-200 text-sm">شجرة تم إنقاذها</p>
                        </div>
                        <div>
                            <span className="text-3xl font-bold">245</span>
                            <p className="text-green-200 text-sm">ملصق ورقي تم توفيره</p>
                        </div>
                         <div>
                            <span className="text-3xl font-bold">50kg</span>
                            <p className="text-green-200 text-sm">انبعاثات CO2 أقل</p>
                        </div>
                         <div>
                            <span className="text-3xl font-bold">✓</span>
                            <p className="text-green-200 text-sm">حملة معتمدة</p>
                        </div>
                    </div>
                    <Button className="w-full bg-white text-green-700 hover:bg-green-50">
                        تحميل شهادة الحملة الخضراء
                    </Button>
                </Card>
                <Card>
                    <h2 className="text-2xl font-bold mb-4">توزيع المرشحين</h2>
                    <div className="space-y-3">
                        <p className="flex justify-between"><strong>رجال:</strong> <span>6,120 (72%)</span></p>
                        <p className="flex justify-between"><strong>نساء:</strong> <span>2,380 (28%)</span></p>
                    </div>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;