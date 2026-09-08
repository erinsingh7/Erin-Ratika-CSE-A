import { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { bookingSteps, loadingMessages } from '@/data/booking';
import { packages } from '@/data/packages';

interface BookingFlowProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: string | null;
  preselectedDate?: string | null;
  preselectedEventType?: string | null;
}

interface FormData {
  [key: string]: string;
}

export default function BookingFlow({
  isOpen,
  onClose,
  preselectedPackage,
  preselectedDate,
  preselectedEventType,
}: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(loadingMessages[0]);

  useEffect(() => {
    if (isOpen) {
      if (preselectedPackage) {
        const pkg = packages.find((p) => p.id === preselectedPackage);
        if (pkg) setFormData((prev) => ({ ...prev, package: `${pkg.name} — ${pkg.price}` }));
      }
      if (preselectedDate) {
        setFormData((prev) => ({ ...prev, weddingDate: preselectedDate }));
      }
      if (preselectedEventType) {
        setFormData((prev) => ({ ...prev, eventType: preselectedEventType }));
      }
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, preselectedPackage, preselectedDate, preselectedEventType]);

  useEffect(() => {
    if (!submitting) return;
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % loadingMessages.length;
      setLoadingMessage(loadingMessages[i]);
    }, 1200);

    const timeout = setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [submitting]);

  const validateStep = useCallback(() => {
    const step = bookingSteps[currentStep];
    const newErrors: Record<string, string> = {};
    step.fields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = 'REQUIRED';
      }
      if (field.type === 'email' && formData[field.name] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[field.name])) {
        newErrors[field.name] = 'INVALID EMAIL';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [currentStep, formData]);

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < bookingSteps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setSubmitting(true);
      }
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1));
    setErrors({});
  };

  const handleClose = () => {
    setCurrentStep(0);
    setFormData({});
    setErrors({});
    setSubmitted(false);
    setSubmitting(false);
    onClose();
  };

  const handleReturnToEvidence = () => {
    handleClose();
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isOpen) return null;

  const step = bookingSteps[currentStep];
  const progress = ((currentStep + 1) / bookingSteps.length) * 100;

  return (
    <div className="fixed inset-0 z-[9998] bg-obsidian/98 backdrop-blur-sm overflow-y-auto">
      {/* Close */}
      <button
        onClick={handleClose}
        className="fixed top-6 right-6 text-ivory p-3 hover:text-bone transition-colors z-10"
        aria-label="Close booking"
      >
        <X size={24} strokeWidth={1.5} />
      </button>

      {/* Loading state */}
      {submitting && (
        <div className="fixed inset-0 bg-obsidian flex flex-col items-center justify-center z-20">
          <div className="text-center">
            <p className="font-serif text-xl md:text-2xl text-ivory tracking-[0.15em] font-light animate-flicker">
              {loadingMessage}
            </p>
            <div className="w-48 h-px bg-ash/30 mt-12 overflow-hidden mx-auto">
              <div className="h-full bg-ivory/40 animate-pulse" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      )}

      {/* Success state */}
      {submitted && !submitting && (
        <div className="fixed inset-0 bg-obsidian flex flex-col items-center justify-center px-6 animate-fade-in">
          <div className="text-center max-w-xl">
            <div className="w-16 h-16 border border-ivory/40 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check size={28} strokeWidth={1} className="text-ivory" />
            </div>
            <h2 className="editorial-heading text-4xl md:text-6xl mb-6">
              YOUR DATE HAS BEEN RECORDED.
            </h2>
            <p className="font-serif italic text-bone/60 text-lg md:text-xl mb-2">
              Wednesday will review your inquiry and respond within 48 hours.
            </p>
            <p className="font-serif italic text-bone/40 text-sm mb-12">
              Excellent. You're officially doomed to have beautiful photographs.
            </p>
            <button onClick={handleReturnToEvidence} className="btn-ghost group">
              RETURN TO THE EVIDENCE
              <ArrowRight
                size={14}
                className="transition-transform duration-500 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      )}

      {/* Booking form */}
      {!submitting && !submitted && (
        <div className="min-h-full flex flex-col items-center justify-center py-20 px-6">
          <div className="w-full max-w-2xl">
            {/* Progress */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <p className="label">
                  STEP {String(currentStep + 1).padStart(2, '0')} / {String(bookingSteps.length).padStart(2, '0')}
                </p>
                <p className="label">BOOKING INQUIRY</p>
              </div>
              <div className="w-full h-px bg-ash/30 overflow-hidden">
                <div
                  className="h-full bg-ivory/50 transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Step title */}
            <h2 className="editorial-heading text-3xl md:text-5xl mb-12 text-balance">
              {step.title}
            </h2>

            {/* Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {step.fields.map((field) => (
                <div key={field.name} className={field.full ? 'sm:col-span-2' : ''}>
                  <label className="label block mb-3">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.name] || ''}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))
                      }
                      placeholder={field.placeholder}
                      rows={5}
                      className={`w-full bg-transparent border-b px-0 py-3 font-serif text-lg text-ivory placeholder-fog/40 focus:outline-none transition-colors resize-none ${
                        errors[field.name]
                          ? 'border-burgundy-light'
                          : 'border-ash/40 focus:border-ivory'
                      }`}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      value={formData[field.name] || ''}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))
                      }
                      className={`w-full bg-transparent border-b px-0 py-3 font-serif text-lg text-ivory focus:outline-none transition-colors ${
                        errors[field.name]
                          ? 'border-burgundy-light'
                          : 'border-ash/40 focus:border-ivory'
                      }`}
                    >
                      <option value="" className="bg-obsidian text-fog">
                        SELECT...
                      </option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt} className="bg-obsidian text-ivory">
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={formData[field.name] || ''}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, [field.name]: e.target.value }))
                      }
                      placeholder={field.placeholder}
                      className={`w-full bg-transparent border-b px-0 py-3 font-serif text-lg text-ivory placeholder-fog/40 focus:outline-none transition-colors ${
                        errors[field.name]
                          ? 'border-burgundy-light'
                          : 'border-ash/40 focus:border-ivory'
                      }`}
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-burgundy-light text-[10px] uppercase tracking-widest mt-2">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex items-center gap-3 text-[11px] uppercase tracking-widest-xl text-fog hover:text-ivory disabled:opacity-30 transition-colors"
              >
                <ArrowLeft size={14} />
                BACK
              </button>

              <button
                onClick={handleNext}
                className="btn-solid group"
              >
                {currentStep === bookingSteps.length - 1 ? (
                  <>
                    REQUEST A BOOKING
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </>
                ) : (
                  <>
                    CONTINUE
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-500 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
