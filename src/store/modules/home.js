// import { createSubmit } from '@/api'

export default {
    state: {
        categroyList: [],
    },

    mutations: {
        // receive_category_list(state, categroyList) {
        //     state.categroyList = categroyList
        // },

    },

    actions: {
        // async getCategroyList({ commit }) {
        //     const result = await createSubmit()
        //     if (result.code === 200) {
        //         const categroyList = result.data.filter((item, index) => index < 15)
        //         commit('receive_category_list', categroyList)
        //     }
        // },
    },

    getters: {
        skuImage(state) {
            const skuInfo = state.detailItem.skuInfo

            return skuInfo ? skuInfo.skuImageList : []
        }
    }
}