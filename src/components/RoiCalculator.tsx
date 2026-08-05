import React, { useState } from 'react';
import { Calculator, Clock, Sparkles, ArrowRight, ShieldCheck, Lock, Check, Zap } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenTrial: (planId?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenTrial }) => {
  const [projectsPerMonth, setProjectsPerMonth] = useState<number>(4);
  const [averageProjectValue, setAverageProjectValue] = useState<number>(1500);
  const [unpaidAdjustmentHours, setUnpaidAdjustmentHours] = useState<number>(20);
  const [selectedPlan, setSelectedPlan] = useState<'pro' | 'enterprise'>('pro');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  // Real Plan Pricing (Matches exact pricing page)
  // Pro (Freelancer Core): $29.00/mo ($23.20/mo annual)
  // Enterprise (Compliance Suite): $79.00/mo ($63.20/mo annual)
  const monthlyPlanPrices = {
    pro: 29.00,
    enterprise: 79.00,
  };

  const annualPlanPrices = {
    pro: 23.20,
    enterprise: 63.20,
  };

  const currentPlanCost = billingCycle === 'annual'
    ? annualPlanPrices[selectedPlan]
    : monthlyPlanPrices[selectedPlan];

  // Calculations
  // Estimated average project duration = 40 hours -> hourly rate
  const hourlyRate = Math.max(Math.round(averageProjectValue / 40), 15);
  
  // Direct loss from unpaid rework/scope creep
  const unpaidReworkLoss = unpaidAdjustmentHours * hourlyRate;
  const annualUnpaidLoss = unpaidReworkLoss * 12;

  // With Velloxis Scope Lockdown:
  // 1. 100% of unpaid rework time is saved/prevented (or reclaimed for billable work)
  // 2. ~80% of out-of-scope requests are converted into official paid change orders
  const paidAddonsRevenue = Math.round(unpaidReworkLoss * 0.80);
  const totalGrossMonthlyBenefit = unpaidReworkLoss + paidAddonsRevenue;

  // Net Savings / Profit after software plan cost
  const netMonthlyProfit = totalGrossMonthlyBenefit - currentPlanCost;
  const netAnnualProfit = netMonthlyProfit * 12;

  // Exact ROI multiplier
  const roiMultiplier = Math.max(Math.round(totalGrossMonthlyBenefit / currentPlanCost), 1);

  return (
    <section className="py-20 dark:bg-[#080c14] bg-[#f7f8fc] relative border-t dark:border-[#131126] border-[#c7c4d8]/35" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/30 text-[10px] font-mono font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Scope Creep ROI & Real Savings Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black dark:text-white text-slate-950 tracking-tight">
            How Much Money Is Scope Creep Costing Your Agency?
          </h2>
          <p className="text-base dark:text-slate-300 text-slate-700">
            Adjust your project metrics and select a Velloxis plan to calculate your net financial profit in USD ($):
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="rounded-3xl dark:bg-[#0f172a] bg-white border dark:border-[#131126] border-[#c7c4d8]/35 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl backdrop-blur-xl">
          
          {/* Left Inputs Controls */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="text-lg font-black dark:text-white text-slate-900 border-b dark:border-[#131126] border-[#c7c4d8]/35 pb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#f59e0b]" />
              <span>1. Agency & Project Metrics</span>
            </h3>

            {/* Plan & Billing Selector */}
            <div className="p-4 rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold dark:text-slate-200 text-slate-800 uppercase tracking-wider font-mono">
                  Compare Velloxis Plan:
                </span>
                {/* Billing Cycle Toggle */}
                <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-slate-800 p-1 rounded-xl text-[11px] font-mono font-bold">
                  <button
                    type="button"
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      billingCycle === 'monthly'
                        ? 'bg-white dark:bg-[#3525cd] text-slate-900 dark:text-white shadow'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle('annual')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                      billingCycle === 'annual'
                        ? 'bg-[#10b981] text-white shadow'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    <span>Annual</span>
                    <span className="bg-black/20 px-1 py-0.2 rounded text-[9px] uppercase">Save 20%</span>
                  </button>
                </div>
              </div>

              {/* Plan Choice Tabs */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedPlan('pro')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedPlan === 'pro'
                      ? 'border-[#3525cd] bg-[#3525cd]/10 dark:text-white text-slate-900 font-bold ring-2 ring-[#3525cd]/30'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono font-bold">
                    <span>Freelancer Core</span>
                    {selectedPlan === 'pro' && <Check className="w-3.5 h-3.5 text-[#3525cd]" />}
                  </div>
                  <div className="text-sm font-extrabold text-[#10b981] mt-1">
                    ${annualPlanPrices.pro.toFixed(2)}
                    <span className="text-[10px] text-slate-400 font-normal"> /mo</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPlan('enterprise')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedPlan === 'enterprise'
                      ? 'border-[#3525cd] bg-[#3525cd]/10 dark:text-white text-slate-900 font-bold ring-2 ring-[#3525cd]/30'
                      : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono font-bold">
                    <span>Compliance Suite</span>
                    {selectedPlan === 'enterprise' && <Check className="w-3.5 h-3.5 text-[#3525cd]" />}
                  </div>
                  <div className="text-sm font-extrabold text-[#10b981] mt-1">
                    ${annualPlanPrices.enterprise.toFixed(2)}
                    <span className="text-[10px] text-slate-400 font-normal"> /mo</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Slider 1: Projects Per Month */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold dark:text-slate-200 text-slate-800">
                  Active Projects Delivered Per Month:
                </label>
                <span className="text-sm font-mono font-extrabold text-[#3525cd] dark:bg-[#080c14] bg-slate-100 px-3 py-1 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35">
                  {projectsPerMonth} {projectsPerMonth === 1 ? 'project' : 'projects'}/mo
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={projectsPerMonth}
                onChange={(e) => setProjectsPerMonth(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#3525cd]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>1 project</span>
                <span>15 projects</span>
                <span>30+ projects</span>
              </div>
            </div>

            {/* Slider 2: Average Project Value */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold dark:text-slate-200 text-slate-800">
                  Average Client Contract Value ($ USD):
                </label>
                <span className="text-sm font-mono font-extrabold text-[#10b981] dark:bg-[#080c14] bg-slate-100 px-3 py-1 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35">
                  ${averageProjectValue.toLocaleString('en-US')} USD
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="15000"
                step="250"
                value={averageProjectValue}
                onChange={(e) => setAverageProjectValue(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#10b981]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>$500</span>
                <span>$7,500</span>
                <span>$15,000+</span>
              </div>
            </div>

            {/* Slider 3: Unpaid Adjustment Hours */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold dark:text-slate-200 text-slate-800">
                  Unpaid Revision & Rework Hours Spent Per Month:
                </label>
                <span className="text-sm font-mono font-extrabold text-[#f59e0b] dark:bg-[#080c14] bg-slate-100 px-3 py-1 rounded-xl border dark:border-[#131126] border-[#c7c4d8]/35">
                  {unpaidAdjustmentHours}h rework
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="100"
                step="2"
                value={unpaidAdjustmentHours}
                onChange={(e) => setUnpaidAdjustmentHours(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#f59e0b]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>2h / mo</span>
                <span>50h / mo</span>
                <span>100h / mo</span>
              </div>
            </div>

            {/* Formula Detail Summary */}
            <div className="p-4 rounded-2xl dark:bg-[#080c14] bg-slate-50 border dark:border-[#131126] border-[#c7c4d8]/35 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Implied Hourly Rate:</span>
                <span className="font-extrabold dark:text-white text-slate-900 font-mono">
                  ${hourlyRate}/hr
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Current Annual Unpaid Rework Loss:</span>
                <span className="text-rose-500 font-black font-mono">
                  -${annualUnpaidLoss.toLocaleString('en-US')} USD / year
                </span>
              </div>
            </div>
          </div>

          {/* Right Results Display */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl dark:bg-[#080c14] bg-slate-900 border dark:border-[#131126] border-[#3525cd]/30 p-6 sm:p-8 space-y-6 shadow-xl text-white">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3">
                <span className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#818cf8] flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#10b981]" />
                  2. Net Financial ROI With Velloxis
                </span>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30 uppercase tracking-widest">
                  Real Realized ROI
                </span>
              </div>

              {/* Net Monthly Profit Headline */}
              <div className="space-y-1">
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <span>Net Monthly Financial Profit (After Software Cost):</span>
                </span>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-300 to-[#818cf8]">
                  +${netMonthlyProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD <span className="text-xs text-slate-400 font-normal">/mo</span>
                </div>
              </div>

              {/* Financial Breakdown Table */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2.5 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>Unpaid Rework Prevented:</span>
                  </span>
                  <span className="font-mono font-bold text-[#10b981]">
                    +${unpaidReworkLoss.toLocaleString('en-US')} USD
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Paid Add-on Scope Billed (~80%):</span>
                  </span>
                  <span className="font-mono font-bold text-amber-400">
                    +${paidAddonsRevenue.toLocaleString('en-US')} USD
                  </span>
                </div>

                <div className="flex items-center justify-between text-slate-300 border-t border-slate-700/50 pt-2">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span>Velloxis Plan ({selectedPlan === 'pro' ? 'Freelancer Core' : 'Compliance Suite'}):</span>
                  </span>
                  <span className="font-mono font-bold text-rose-400">
                    -${currentPlanCost.toFixed(2)} USD
                  </span>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-left">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Net Annual Financial Gain:</span>
                  <div className="text-base sm:text-lg font-black text-white mt-1 font-mono">
                    +${netAnnualProfit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USD
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-left">
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Reclaimed Free Hours:</span>
                  <div className="text-base sm:text-lg font-black text-[#818cf8] mt-1 flex items-center gap-1 font-mono">
                    <Clock className="w-4 h-4" />
                    <span>{unpaidAdjustmentHours}h free /mo</span>
                  </div>
                </div>
              </div>

              {/* ROI Badge */}
              <div className="p-4 rounded-2xl bg-[#3525cd]/20 border border-[#3525cd]/40 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-200">Return on Investment (ROI):</span>
                <span className="text-xs font-mono font-black text-[#f59e0b] bg-[#f59e0b]/15 px-3 py-1 rounded-xl border border-[#f59e0b]/30">
                  🚀 {roiMultiplier}x ROI on software cost
                </span>
              </div>
            </div>

            {/* Direct Conversion Action */}
            <div className="space-y-3 pt-4">
              <button
                type="button"
                onClick={() => onOpenTrial(selectedPlan)}
                className="cta-primary-btn cta-shimmer w-full py-4 text-sm sm:text-base font-extrabold shadow-2xl shadow-[#3525cd]/40 cursor-pointer"
              >
                <span>Protect My Projects With Velloxis</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
                <span>100% Free Starter Plan • Instant Access • No Credit Card</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

