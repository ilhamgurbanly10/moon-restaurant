
import type { AboutUsObj, DailySpecialsObj, VisitObj } from '@/../interfaces/Common';
import { getAboutUs, getDailySpecials, getVisit } from '@/utils/getDatas';

export default {
  state(): {aboutUs: AboutUsObj, dailySpecials: DailySpecialsObj, visit: VisitObj} {
    return {
      aboutUs: { data: null, error: false },
      dailySpecials: { data: null, error: false },
      visit: { data: null, error: false }
    }
  },
  mutations: {
    setAboutUs(state: {aboutUs: AboutUsObj}, payload: AboutUsObj) {
      state.aboutUs = payload;
    },
    setDailySpecials(state: {dailySpecials: DailySpecialsObj}, payload: DailySpecialsObj) {
      state.dailySpecials = payload;
    },
    setVisit(state: {visit: VisitObj}, payload: VisitObj) {
      state.visit = payload;
    }
  },
  getters: {
    aboutUs(state: {aboutUs: AboutUsObj}) {
      return state.aboutUs;
    },
    dailySpecials(state: {dailySpecials: DailySpecialsObj}) {
      return state.dailySpecials;
    },
    visit(state: {visit: VisitObj}) {
      return state.visit;
    }
  },
  actions: {
    async getAboutUs(context: { commit: Function }, payload: AboutUsObj) {
      let data: AboutUsObj = {data: null, error: false};
      data = await getAboutUs();
      context.commit('setAboutUs', data);
    },
    async getDailySpecials(context: { commit: Function }, payload: DailySpecialsObj) {
      let data: DailySpecialsObj = {data: null, error: false};
      data = await getDailySpecials();
      context.commit('setDailySpecials', data);
    },
    async getVisit(context: { commit: Function }, payload: VisitObj) {
      let data: VisitObj = {data: null, error: false};
      data = await getVisit();
      context.commit('setVisit', data);
    }
  }
}








