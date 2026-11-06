import { createSelector } from "@reduxjs/toolkit"

export const selectCaseStudiesItems=(state)=>{
    return state.caseStudies.items
}
export const selectCaseStudiesFilters=(state)=>{
    return state.caseStudies.filters
}
export const selectFilteredCaseStudies=createSelector(
    [selectCaseStudiesItems,selectCaseStudiesFilters],(items,filters)=>{
        const normalizeQuery=filters.query.trim().toLowerCase();
        return items.filter((study)=>{
            const matchingCategories=
            filters.category==="All"||
            study.category===filters.category
            const matchingQuery=study.title.toLowerCase().includes(normalizeQuery)||
            study.summary.toLowerCase().includes(normalizeQuery)
            return matchingCategories&&matchingQuery
        })

    }
)
export const selectVisibleCount= createSelector(
    [selectFilteredCaseStudies],(filteredStudy)=>{
        return filteredStudy.length
    }
)