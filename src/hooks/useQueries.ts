import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Resume, UserProfile, UserPreferences, HomepageContent, StaticPagesContent, CareerGuide, ResumeExample } from '../backend';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      try {
        return await actor.getCallerUserProfile();
      } catch (error: any) {
        if (error.message?.includes('User profile not found')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useCreateUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) => {
      if (!actor) throw new Error('Actor not available');
      await actor.createUserProfile(name, email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useGetUserResumes() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Resume[]>({
    queryKey: ['userResumes'],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getUserResumes();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetResume(resumeId: string | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<Resume | null>({
    queryKey: ['resume', resumeId],
    queryFn: async () => {
      if (!actor || !resumeId || resumeId === 'new') return null;
      return await actor.getResume(resumeId);
    },
    enabled: !!actor && !actorFetching && !!resumeId && resumeId !== 'new',
  });
}

export function useCreateResume() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (resume: Resume) => {
      if (!actor) throw new Error('Actor not available');
      await actor.createResume(resume);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userResumes'] });
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useUpdateResume() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (resume: Resume) => {
      if (!actor) throw new Error('Actor not available');
      await actor.updateResume(resume);
    },
    onSuccess: (_, resume) => {
      queryClient.invalidateQueries({ queryKey: ['userResumes'] });
      queryClient.invalidateQueries({ queryKey: ['resume', resume.id] });
    },
  });
}

export function useDeleteResume() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (resumeId: string) => {
      if (!actor) throw new Error('Actor not available');
      await actor.deleteResume(resumeId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userResumes'] });
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useUpdateUserPreferences() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (preferences: UserPreferences) => {
      if (!actor) throw new Error('Actor not available');
      await actor.updateUserPreferences(preferences);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useGetAllHomepageContents() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<HomepageContent[]>({
    queryKey: ['homepageContents'],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getAllHomepageContents();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useCreateHomepageContent() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (content: HomepageContent) => {
      if (!actor) throw new Error('Actor not available');
      await actor.createHomepageContent(content);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['homepageContents'] });
    },
  });
}

export function useGetStaticPagesContent() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<StaticPagesContent | null>({
    queryKey: ['staticPagesContent'],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getStaticPagesContent();
      } catch (error: any) {
        if (error.message?.includes('not found')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetAboutUsContent() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<string | null>({
    queryKey: ['aboutUsContent'],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getAboutUsContent();
      } catch (error: any) {
        if (error.message?.includes('not found')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetPrivacyPolicyContent() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<string | null>({
    queryKey: ['privacyPolicyContent'],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getPrivacyPolicyContent();
      } catch (error: any) {
        if (error.message?.includes('not found')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetDisclaimerContent() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<string | null>({
    queryKey: ['disclaimerContent'],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getDisclaimerContent();
      } catch (error: any) {
        if (error.message?.includes('not found')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetTermsOfUseContent() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<string | null>({
    queryKey: ['termsOfUseContent'],
    queryFn: async () => {
      if (!actor) return null;
      try {
        return await actor.getTermsOfUseContent();
      } catch (error: any) {
        if (error.message?.includes('not found')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useSetStaticPagesContent() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (content: StaticPagesContent) => {
      if (!actor) throw new Error('Actor not available');
      await actor.setStaticPagesContent(content);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['staticPagesContent'] });
      queryClient.invalidateQueries({ queryKey: ['aboutUsContent'] });
      queryClient.invalidateQueries({ queryKey: ['privacyPolicyContent'] });
      queryClient.invalidateQueries({ queryKey: ['disclaimerContent'] });
      queryClient.invalidateQueries({ queryKey: ['termsOfUseContent'] });
    },
  });
}

// Career Guides Hooks

export function useGetAllCareerGuides() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<CareerGuide[]>({
    queryKey: ['careerGuides'],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getAllCareerGuides();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetCareerGuide(guideId: string | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<CareerGuide | null>({
    queryKey: ['careerGuide', guideId],
    queryFn: async () => {
      if (!actor || !guideId) return null;
      try {
        return await actor.getCareerGuide(guideId);
      } catch (error: any) {
        if (error.message?.includes('not found')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching && !!guideId,
  });
}

export function useGetCareerGuidesByDifficulty(difficulty: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<CareerGuide[]>({
    queryKey: ['careerGuides', 'difficulty', difficulty],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getCareerGuidesByDifficulty(difficulty);
    },
    enabled: !!actor && !actorFetching && !!difficulty,
  });
}

export function useGetCareerGuidesByTag(tag: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<CareerGuide[]>({
    queryKey: ['careerGuides', 'tag', tag],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getCareerGuidesByTag(tag);
    },
    enabled: !!actor && !actorFetching && !!tag,
  });
}

export function useGetCareerGuidesByKeyword(keyword: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<CareerGuide[]>({
    queryKey: ['careerGuides', 'keyword', keyword],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getCareerGuidesByKeyword(keyword);
    },
    enabled: !!actor && !actorFetching && !!keyword && keyword.length > 0,
  });
}

export function useCreateCareerGuide() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (guide: CareerGuide) => {
      if (!actor) throw new Error('Actor not available');
      await actor.createCareerGuide(guide);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['careerGuides'] });
    },
  });
}

export function useUpdateCareerGuide() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (guide: CareerGuide) => {
      if (!actor) throw new Error('Actor not available');
      await actor.updateCareerGuide(guide);
    },
    onSuccess: (_, guide) => {
      queryClient.invalidateQueries({ queryKey: ['careerGuides'] });
      queryClient.invalidateQueries({ queryKey: ['careerGuide', guide.id] });
    },
  });
}

export function useDeleteCareerGuide() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (guideId: string) => {
      if (!actor) throw new Error('Actor not available');
      await actor.deleteCareerGuide(guideId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['careerGuides'] });
    },
  });
}

// Resume Examples Hooks

export function useGetAllResumeExamples() {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ResumeExample[]>({
    queryKey: ['resumeExamples'],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getAllResumeExamples();
    },
    enabled: !!actor && !actorFetching,
  });
}

export function useGetResumeExample(exampleId: string | null) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ResumeExample | null>({
    queryKey: ['resumeExample', exampleId],
    queryFn: async () => {
      if (!actor || !exampleId) return null;
      try {
        return await actor.getResumeExample(exampleId);
      } catch (error: any) {
        if (error.message?.includes('not found')) {
          return null;
        }
        throw error;
      }
    },
    enabled: !!actor && !actorFetching && !!exampleId,
  });
}

export function useGetResumeExamplesByCategory(category: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ResumeExample[]>({
    queryKey: ['resumeExamples', 'category', category],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getResumeExamplesByCategory(category);
    },
    enabled: !!actor && !actorFetching && !!category,
  });
}

export function useGetResumeExamplesByExperienceLevel(level: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ResumeExample[]>({
    queryKey: ['resumeExamples', 'level', level],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getResumeExamplesByExperienceLevel(level);
    },
    enabled: !!actor && !actorFetching && !!level,
  });
}

export function useGetResumeExamplesByCategoryAndLevel(category: string, level: string) {
  const { actor, isFetching: actorFetching } = useActor();

  return useQuery<ResumeExample[]>({
    queryKey: ['resumeExamples', 'category', category, 'level', level],
    queryFn: async () => {
      if (!actor) return [];
      return await actor.getResumeExamplesByCategoryAndLevel(category, level);
    },
    enabled: !!actor && !actorFetching && !!category && !!level,
  });
}

export function useCreateResumeExample() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (example: ResumeExample) => {
      if (!actor) throw new Error('Actor not available');
      await actor.createResumeExample(example);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resumeExamples'] });
    },
  });
}

export function useUpdateResumeExample() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (example: ResumeExample) => {
      if (!actor) throw new Error('Actor not available');
      await actor.updateResumeExample(example);
    },
    onSuccess: (_, example) => {
      queryClient.invalidateQueries({ queryKey: ['resumeExamples'] });
      queryClient.invalidateQueries({ queryKey: ['resumeExample', example.id] });
    },
  });
}

export function useDeleteResumeExample() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (exampleId: string) => {
      if (!actor) throw new Error('Actor not available');
      await actor.deleteResumeExample(exampleId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['resumeExamples'] });
    },
  });
}
