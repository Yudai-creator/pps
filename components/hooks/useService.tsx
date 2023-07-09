"use client";
import React, { useEffect, useState } from "react";
import { services } from "../data/defaults";

interface Service {
  slug: string;
  title: string;
  logo: string;
  link: string;
  headerSection: {
    title: string;
    image: string;
    content: string;
  };
  steps: { number: number; resume: string }[];
}

const useService = ({ slug }: { slug: string }) => {
  const [service, setService] = useState<Service>(services[0]);

  useEffect(() => {
    const page = services.find((service: Service) => service.slug === slug);

    if (page) {
      setService(page);
    }
  }, [slug]);

  return service;
};

export default useService;
