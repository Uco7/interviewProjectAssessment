import { useSelector,useDispatch } from "react-redux";
import  {setCategory,setSearchQuery,getCaseStudies} from "./caseStudiesSlice"
import { selectFilteredCaseStudies,selectVisibleCount } from "./caseStudiesSelectors";
import { useEffect } from "react";
const categories=["All","Web","Mobile","AI","Blockchain"]
const BUTTON_PRIMARY =
  "bg-violet-700 text-white font-semibold hover:bg-violet-600";
const BUTTON_BASE =
  "rounded-full px-6 py-2 min-h-[44px] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400";
const BUTTON_INACTIVE =
  "border border-violet-500/40 bg-white/5 font-semibold text-gray-200 hover:bg-violet-700/40";

const  CaseStudies=()=>{
    const dispatch=useDispatch();
    const caseStudies=useSelector(selectFilteredCaseStudies);

    const status=useSelector(
        (state)=>state.caseStudies.status
    )
 
const selectedCategory=useSelector(
    (state)=>state.caseStudies.filters.category
)

const query=useSelector(
    (state)=>state.caseStudies.filters.query
)
    const error=useSelector(
        (state)=>state.caseStudies.error
    )
    useEffect(()=>{
        if(status==="idle"){
            dispatch(getCaseStudies())
        }
    },[dispatch,status])
    const visibleCount=useSelector(selectVisibleCount);
    if(status==="loading"){
        return(
             <section className="py-16">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="animate-pulse rounded-xl border p-5"
                        >
                            <div className="mb-4 h-4 w-1/3 rounded bg-gray-200"></div>
                            <div className="mb-3 h-6 w-3/4 rounded bg-gray-200"></div>
                            <div className="mb-2 h-4 w-full rounded bg-gray-200"></div>
                            <div className="h-4 w-2/3 rounded bg-gray-200"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        )
    }
    if (status === "failed") {
    return (
        <section className="py-16 text-center">
            <p className="mb-4 text-red-500">
                {error || "Something went wrong. Please try again."}
            </p>

            <button
                onClick={() => dispatch(getCaseStudies())}
                className="rounded-lg bg-black px-5 py-2 text-white"
            >
                Retry
            </button>
        </section>
    );
}
    return (
  
    <section className="bg-[#08001f] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Case Studies</h1>

        <div className="my-6 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={selectedCategory === category}
              onClick={() => dispatch(setCategory(category))}
              className={`${BUTTON_BASE} ${
                selectedCategory === category
                  ? `${BUTTON_PRIMARY} shadow-lg shadow-violet-900/50`
                  : BUTTON_INACTIVE
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <input
        aria-label="Search case studies"
          type="text"
          value={query}
          onChange={(event) => dispatch(setSearchQuery(event.target.value))}
          placeholder="Search case studies..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none focus:border-violet-500"
        />

        <p className="mt-4 text-sm text-gray-400">
          Showing {visibleCount} {visibleCount === 1 ? "case study" : "case studies"}
        </p>

        {caseStudies.length === 0 ? (
          <p className="py-10 text-center text-gray-400">
            No case studies found. Try another search or category.
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/40"
              >
                <span className="mb-3 inline-block rounded-full bg-violet-700 px-3 py-1 text-sm text-violet-200">
                  {study.category}
                </span>
                <h2 className="mb-3 text-xl font-semibold">{study.title}</h2>
                <p className="mb-4 text-gray-300">{study.summary}</p>
                <p className="text-sm text-gray-400">{study.year}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
export default CaseStudies