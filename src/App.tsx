/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Bot, 
  Link as LinkIcon, 
  TrendingUp, 
  Users, 
  PlusCircle, 
  Settings, 
  Play, 
  Pause, 
  CheckCircle2,
  LayoutDashboard,
  DollarSign,
  Activity,
  Copy,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form State
  const [botName, setBotName] = useState('');
  const [botToken, setBotToken] = useState('');
  const [directLink, setDirectLink] = useState('');
  const [channelLink, setChannelLink] = useState('');

  const handleGenerateBot = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API call to create bot
    setTimeout(() => {
      setIsGenerating(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        setActiveTab('dashboard');
        setBotName('');
        setBotToken('');
        setDirectLink('');
        setChannelLink('');
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 border-l border-slate-800 flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Bot className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-xl text-white">ابدأ صح</h1>
            <p className="text-xs text-emerald-400 font-medium">ماكينة الأرباح الآلية</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">لوحة التحكم</span>
          </button>
          <button 
            onClick={() => setActiveTab('create')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'create' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
          >
            <PlusCircle className="w-5 h-5" />
            <span className="font-medium">إنشاء بوت جديد</span>
          </button>
          <button 
            onClick={() => setActiveTab('links')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'links' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
          >
            <LinkIcon className="w-5 h-5" />
            <span className="font-medium">إدارة الروابط</span>
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'settings' ? 'bg-emerald-500/10 text-emerald-400' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">الإعدادات</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm font-medium text-slate-300">النظام يعمل بكفاءة</span>
            </div>
            <p className="text-xs text-slate-500">متصل بسيرفرات التليجرام</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        {activeTab === 'dashboard' && (
          <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
            <header className="flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">مرحباً بك في إمبراطوريتك 🚀</h2>
                <p className="text-slate-400">نظرة عامة على أداء بوتاتك وأرباحك اليوم.</p>
              </div>
              <button 
                onClick={() => setActiveTab('create')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <PlusCircle className="w-5 h-5" />
                <span>بوت جديد</span>
              </button>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                title="الأرباح الكلية" 
                value="$1,284.50" 
                trend="+12.5%" 
                icon={<DollarSign className="w-6 h-6 text-emerald-400" />} 
                color="emerald"
              />
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-blue-500/10">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <span className="flex items-center text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
                    +843 اليوم
                  </span>
                </div>
                <h3 className="text-slate-400 text-sm font-medium mb-1">إجمالي المشتركين</h3>
                <p className="text-2xl font-bold text-white">14,209</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-purple-500/10">
                    <Activity className="w-6 h-6 text-purple-400" />
                  </div>
                  <span className="flex items-center text-sm font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-md">
                    +2.4%
                  </span>
                </div>
                <h3 className="text-slate-400 text-sm font-medium mb-1">معدل التحويل (CTR)</h3>
                <p className="text-2xl font-bold text-white">18.2%</p>
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-orange-500/10">
                    <Bot className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-slate-400 text-sm font-medium mb-1">البوتات النشطة</h3>
                <p className="text-2xl font-bold text-white">3 / 5</p>
              </div>
            </div>

            {/* Active Bots Table */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">البوتات النشطة حالياً</h3>
                <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium">عرض الكل</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                  <thead className="bg-slate-800/50 text-slate-400 text-sm">
                    <tr>
                      <th className="px-6 py-4 font-medium">اسم البوت</th>
                      <th className="px-6 py-4 font-medium">الشبكة الإعلانية</th>
                      <th className="px-6 py-4 font-medium">الزيارات اليوم</th>
                      <th className="px-6 py-4 font-medium">الأرباح</th>
                      <th className="px-6 py-4 font-medium">الحالة</th>
                      <th className="px-6 py-4 font-medium">إجراء</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <BotRow name="بوت أفلام 2024" network="Adsterra" visits="4,201" earnings="$12.40" status="active" />
                    <BotRow name="بوت تطبيقات مهكرة" network="Monetag" visits="8,192" earnings="$28.15" status="active" />
                    <BotRow name="بوت كورس التداول" network="Adsterra" visits="943" earnings="$3.20" status="paused" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'create' && (
          <div className="max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">صناعة ماكينة أرباح جديدة</h2>
              <p className="text-slate-400 text-lg">اربط بوت التليجرام الخاص بك مع الروابط المباشرة وفعل الاشتراك الإجباري.</p>
            </div>

            {showSuccess ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 text-center animate-in zoom-in duration-300">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">تم تشغيل البوت بنجاح! 🎉</h3>
                <p className="text-slate-300 mb-6">البوت الآن يعمل ويقوم بتحويل الزيارات إلى أرباح بشكل آلي.</p>
                <div className="inline-flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 text-emerald-400 font-mono text-sm">
                  <span>t.me/{botName.replace(/\s+/g, '_').toLowerCase() || 'your_new_bot'}</span>
                  <Copy className="w-4 h-4 cursor-pointer hover:text-white" />
                </div>
              </div>
            ) : (
              <form onSubmit={handleGenerateBot} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="space-y-6">
                  
                  {/* Bot Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      اسم البوت (يظهر للمستخدمين) <span className="text-emerald-400">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={botName}
                      onChange={(e) => setBotName(e.target.value)}
                      placeholder="مثال: بوت تحميل أفلام 2024"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                    <p className="text-xs text-slate-500 mt-2">نصيحة: اختر اسماً جذاباً يتصدر نتائج البحث في تليجرام.</p>
                  </div>

                  {/* Bot Token */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      توكن البوت (من BotFather) <span className="text-emerald-400">*</span>
                    </label>
                    <input 
                      required
                      type="text" 
                      value={botToken}
                      onChange={(e) => setBotToken(e.target.value)}
                      placeholder="1234567890:ABCdefGhIJKlmNoPQRsTUVwxyZ"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Direct Link */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        الرابط المباشر (Monetag / Adsterra) <span className="text-emerald-400">*</span>
                      </label>
                      <input 
                        required
                        type="url" 
                        value={directLink}
                        onChange={(e) => setDirectLink(e.target.value)}
                        placeholder="https://..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    {/* Forced Channel */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        قناة الاشتراك الإجباري <span className="text-emerald-400">*</span>
                      </label>
                      <input 
                        required
                        type="text" 
                        value={channelLink}
                        onChange={(e) => setChannelLink(e.target.value)}
                        placeholder="@YourChannel"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isGenerating}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 disabled:cursor-not-allowed text-white text-lg font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/25"
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>جاري برمجة البوت وتفعيل الاستراتيجية...</span>
                        </>
                      ) : (
                        <>
                          <Bot className="w-6 h-6" />
                          <span>إطلاق ماكينة الأرباح الآن!</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-sm text-slate-500 mt-4">
                      بالضغط على الزر، أنت توافق على شروط استخدام منصة "ابدأ صح".
                    </p>
                  </div>

                </div>
              </form>
            )}
          </div>
        )}

        {/* Placeholder for other tabs */}
        {(activeTab === 'links' || activeTab === 'settings') && (
          <div className="flex flex-col items-center justify-center h-full text-slate-500 animate-in fade-in">
            <Settings className="w-16 h-16 mb-4 opacity-20" />
            <h2 className="text-2xl font-bold text-slate-400 mb-2">قريباً...</h2>
            <p>هذه الميزة قيد التطوير وسيتم إضافتها في التحديث القادم.</p>
          </div>
        )}

      </main>
    </div>
  );
}

// Helper Components
function StatCard({ title, value, trend, icon, color }: any) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl bg-${color}-500/10`}>
          {icon}
        </div>
        <span className={`flex items-center text-sm font-medium text-${color}-400 bg-${color}-400/10 px-2 py-1 rounded-md`}>
          {trend}
        </span>
      </div>
      <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function BotRow({ name, network, visits, earnings, status }: any) {
  const isActive = status === 'active';
  
  return (
    <tr className="hover:bg-slate-800/50 transition-colors group">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
            <Bot className="w-4 h-4" />
          </div>
          <span className="font-medium text-white">{name}</span>
        </div>
      </td>
      <td className="px-6 py-4">
        <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700">
          {network}
        </span>
      </td>
      <td className="px-6 py-4 text-slate-300 font-medium">{visits}</td>
      <td className="px-6 py-4 text-emerald-400 font-bold">{earnings}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-slate-600'}`}></div>
          <span className={`text-sm font-medium ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}>
            {isActive ? 'يعمل' : 'متوقف'}
          </span>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            <Settings className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
