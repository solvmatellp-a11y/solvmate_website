"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function ContactPage() {
  const embedGlass =
    "relative rounded-2xl bg-blue backdrop-blur-2xl border border-white/30 shadow-2xl";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "consult" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="md:col-span-2 space-y-8 pb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900 text-center">
              Get In Touch
            </h1>
            <p className="text-lg text-3xl md:text-4xl text-center text-blue-900 leading-relaxed">
              {`Let's discuss how we can accelerate your growth`}
            </p>
          </div>
        </div>
        <div className={`${embedGlass} p-4 md:p-6 pb-10`}>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            Book a Free Consultation
          </h2>
          <p className="text-black-300 max-w-xl mx-auto text-center pb-6">
            Schedule a free 30-minute strategy session with our experts.
          </p>
          <Cal
            namespace="consult"
            calLink="solvmate/consult"
            style={{ width: "100%", height: "100%" }}
            config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </div>
      </div>
    </div>
  );
}
