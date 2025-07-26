import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  Settings,
  Activity,
  Clock,
  UserPlus
} from 'lucide-react'

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'إجمالي المرضى', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { title: 'المواعيد اليوم', value: '28', icon: Calendar, color: 'bg-green-500' },
    { title: 'السجلات الطبية', value: '856', icon: FileText, color: 'bg-purple-500' },
    { title: 'المواعيد المعلقة', value: '12', icon: Clock, color: 'bg-orange-500' },
  ]

  const quickActions = [
    { title: 'إدارة المرضى', icon: Users, link: '/patients', color: 'bg-[#1A4199]' },
    { title: 'إدارة المواعيد', icon: Calendar, link: '/appointments', color: 'bg-[#00CFE8]' },
    { title: 'السجلات الطبية', icon: FileText, link: '/records', color: 'bg-green-600' },
    { title: 'التقارير', icon: BarChart3, link: '/reports', color: 'bg-purple-600' },
    { title: 'الإعدادات', icon: Settings, link: '/settings', color: 'bg-gray-600' },
  ]

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#222222] mb-2">لوحة التحكم</h1>
        <p className="text-gray-600">مرحباً بك في نظام إدارة العيادة الطبية</p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.title}</p>
                <p className="text-3xl font-bold text-[#222222]">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-[#222222] mb-6">الإجراءات السريعة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className="flex items-center p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className={`${action.color} p-3 rounded-lg mr-4`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium text-[#222222]">{action.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-[#222222] mb-4">النشاط الأخير</h3>
          <div className="space-y-4">
            {[
              { action: 'تم إضافة مريض جديد', time: 'منذ 5 دقائق', icon: UserPlus },
              { action: 'تم تحديث موعد', time: 'منذ 15 دقيقة', icon: Calendar },
              { action: 'تم إنشاء سجل طبي', time: 'منذ 30 دقيقة', icon: FileText },
              { action: 'تم إنجاز فحص طبي', time: 'منذ ساعة', icon: Activity },
            ].map((item, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="bg-[#1A4199] p-2 rounded-lg mr-3">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-[#222222]">{item.action}</p>
                  <p className="text-sm text-gray-500">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-[#222222] mb-4">المواعيد القادمة</h3>
          <div className="space-y-4">
            {[
              { patient: 'أحمد محمد', time: '10:00 ص', type: 'فحص دوري' },
              { patient: 'فاطمة علي', time: '11:30 ص', type: 'استشارة' },
              { patient: 'محمد حسن', time: '02:00 م', type: 'متابعة' },
              { patient: 'سارة أحمد', time: '03:30 م', type: 'فحص أولي' },
            ].map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-[#222222]">{appointment.patient}</p>
                  <p className="text-sm text-gray-500">{appointment.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-[#1A4199]">{appointment.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard