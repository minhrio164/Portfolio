import { aSenseCaseStudy } from "@/content/case-studies/a-sense";
import type { CaseStudyContent } from "@/content/case-studies/types";

export const caseStudies: CaseStudyContent[] = [aSenseCaseStudy];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
