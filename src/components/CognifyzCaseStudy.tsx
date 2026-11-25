import { useEffect, useState } from 'react'
import { ArrowLeft, BarChart3, Download, ExternalLink, FileText, X } from 'lucide-react'
import './CognifyzCaseStudy.css'

const technologies = ['Python', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Plotly', 'Folium', 'Scikit-learn', 'Jupyter Notebook']

const metrics = [
  ['Total restaurants', '9,551'], ['Dataset columns', '21'], ['Countries', '15'],
  ['Cities', '141'], ['Rated restaurants', '7,403'], ['Unrated restaurants', '2,148'],
]

const levels = [
  { name: 'Level 1', label: 'Basic analysis', tasks: [
    ['Top cuisines', 'North Indian leads with 3,960 restaurants (41.5%), followed by Chinese with 2,733 (28.6%) and Fast Food with 1,986 (20.8%).'],
    ['City analysis', 'New Delhi has the highest restaurant count at 5,473. London has the highest average rating among cities with at least 20 rated restaurants: 4.54.'],
    ['Price range distribution', 'Price ranges 1–4 account for 46.5%, 32.6%, 14.7%, and 6.1% of restaurants respectively.'],
    ['Online delivery', '25.7% of restaurants offer delivery. Average ratings were 3.38 with delivery and 3.47 without delivery.'],
  ] },
  { name: 'Level 2', label: 'Intermediate analysis', tasks: [
    ['Restaurant ratings', 'The 3.0–3.4 range is most common, with 2,490 restaurants. Average votes across all restaurants are approximately 157.'],
    ['Cuisine combinations', 'Identified 1,339 distinct combinations. Japanese and Sushi had the highest average rating among combinations with at least 20 rated restaurants: 4.06.'],
    ['Geographic analysis', 'Mapped 9,052 valid locations. Delhi NCR holds 83% of mapped restaurants; DBSCAN identified 56 hotspots covering 88% of NCR restaurants.'],
    ['Restaurant chains', 'Identified 742 chains with at least two outlets. Cafe Coffee Day has 83 outlets, Domino’s Pizza 79, and Barbeque Nation averages 4.35.'],
  ] },
  { name: 'Level 3', label: 'Advanced analysis', tasks: [
    ['Restaurant reviews', 'Blocked – Missing Data. The dataset contained no customer review text, so keyword and sentiment analysis could not be performed.', true],
    ['Votes analysis', 'Toit, Bangalore received 10,934 votes. Ratings and popularity show a positive Pearson correlation of 0.41 and Spearman correlation of 0.68.'],
    ['Price range vs services', 'Used chi-square tests, Cramer’s V, and Spearman correlation. Higher-priced restaurants are considerably more likely to offer table booking; delivery does not increase consistently with price.'],
  ] },
]

const gallery = [
  ['Top cuisines analysis', '/cognifyz/visualizations/level-1/L1_T1_top_cuisines.png'], ['City-wise restaurant distribution', '/cognifyz/visualizations/level-1/L1_T2_restaurants_by_city.png'],
  ['Price range distribution', '/cognifyz/visualizations/level-1/L1_T3_price_range_distribution.png'], ['Online delivery comparison', '/cognifyz/visualizations/level-1/L1_T4_online_delivery.png'],
  ['Rating distribution', '/cognifyz/visualizations/level-2/L2_T1_rating_distribution.png'], ['Cuisine combination analysis', '/cognifyz/visualizations/level-2/L2_T2_top_combinations.png'],
  ['Geographic density and hotspots', '/cognifyz/visualizations/level-2/L2_T3_ncr_density_hexbin.png'], ['Restaurant chain analysis', '/cognifyz/visualizations/level-2/L2_T4_top_chains_outlets.png'],
  ['Votes and ratings correlation', '/cognifyz/visualizations/level-3/L3_T2_votes_vs_rating_scatter.png'], ['Price range versus services', '/cognifyz/visualizations/level-3/L3_T3_service_by_price_range.png'],
]

export default function CognifyzCaseStudy() {
  const [openLevel, setOpenLevel] = useState(0)
  const [image, setImage] = useState<string | null>(null)

  useEffect(() => {
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content')
    document.title = 'Cognifyz Restaurant Data Analysis | Pratham Panchmukh'
    description?.setAttribute(
      'content',
      'Cognifyz Technologies restaurant data analysis case study: 9,551 records, statistical analysis, interactive maps, and business insights.',
    )
    return () => {
      document.title = 'Pratham Panchmukh | Full Stack Developer Portfolio'
      if (previousDescription) description?.setAttribute('content', previousDescription)
    }
  }, [])

  return <main className="case-study">
    <header className="case-topbar">
      <a href="/" className="case-back"><ArrowLeft size={17} /> Back to portfolio</a>
      <nav aria-label="Case study sections">
        <a href="#dataset">Dataset</a><a href="#analysis">Analysis</a><a href="#visuals">Visuals</a><a href="#resources">Resources</a>
      </nav>
    </header>

    <section className="case-hero">
      <div>
        <span className="eyebrow">Data analytics case study</span>
        <h1>Cognifyz Technologies<br /><em>Restaurant Data Analysis</em></h1>
        <p>Turning 9,551 restaurant records into a structured view of cuisine demand, pricing, service availability, geography, and popularity.</p>
        <div className="case-actions"><a href="#analysis">Explore analysis <BarChart3 size={17} /></a><a href="/cognifyz/resources/Final_Internship_Report.pdf" download>Download report <Download size={17} /></a></div>
      </div>
      <aside className="case-hero-card">
        <span>Internship project</span><strong>Cognifyz Technologies</strong>
        <dl><div><dt>Domain</dt><dd>Data Analytics</dd></div><div><dt>Dataset</dt><dd>Restaurant Dataset</dd></div><div><dt>Scope</dt><dd>Levels 1, 2 & 3</dd></div></dl>
      </aside>
    </section>

    <section className="case-section case-overview" id="overview">
      <div className="case-section__heading"><span className="eyebrow">Project overview</span><h2>From clean data to business-ready evidence.</h2></div>
      <p>Completed a comprehensive internship analysis across data cleaning, exploratory analysis, statistical testing, geographic analysis, and business intelligence reporting. The work answers practical questions about customer preferences, restaurant operations, and market concentration.</p>
      <div className="case-tags">{technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
    </section>

    <section className="case-section" id="dataset">
      <div className="case-section__heading"><span className="eyebrow">Dataset overview</span><h2>Restaurant data at a glance.</h2><p>Preprocessing included checking data types, missing values, duplicate records, rating availability, cuisine fields, and geographic-coordinate validity before analysis.</p></div>
      <div className="kpi-grid">{metrics.map(([label, value]) => <article key={label}><strong>{value}</strong><span>{label}</span></article>)}</div>
    </section>

    <section className="case-section" id="analysis">
      <div className="case-section__heading"><span className="eyebrow">Analysis levels</span><h2>A progressive analysis across ten completed tasks.</h2></div>
      <div className="analysis-levels">{levels.map((level, index) => <article className={`analysis-level ${openLevel === index ? 'analysis-level--open' : ''}`} key={level.name}>
        <button type="button" onClick={() => setOpenLevel(openLevel === index ? -1 : index)} aria-expanded={openLevel === index}><span><b>{level.name}</b><small>{level.label}</small></span><span className="completion">{level.tasks.length - Number(level.tasks.some((task) => task[2]))}/{level.tasks.length} complete</span><span aria-hidden="true">+</span></button>
        {openLevel === index && <div className="task-list">{level.tasks.map(([title, detail, blocked]) => <article key={String(title)} className={blocked ? 'task-card task-card--blocked' : 'task-card'}><span>{blocked ? 'Blocked' : 'Completed'}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>}
      </article>)}</div>
    </section>

    <section className="case-section" id="visuals">
      <div className="case-section__heading"><span className="eyebrow">Actual project visualizations</span><h2>Evidence from the completed analysis.</h2><p>Charts below are original outputs from the internship project. Select any visual to enlarge it.</p></div>
      <div className="visual-gallery">{gallery.map(([caption, src]) => <figure key={src}><button type="button" onClick={() => setImage(src)} aria-label={`Enlarge ${caption}`}><img src={src} alt={caption} loading="lazy" /></button><figcaption>{caption}</figcaption></figure>)}</div>
      <div className="map-card"><div><span className="eyebrow">Interactive geography</span><h3>Restaurant density across Delhi NCR</h3><p>Explore the original interactive map output in place, including the locations used for the geographic analysis.</p><a href="/cognifyz/maps/interactive-restaurant-map.html" target="_blank" rel="noreferrer">Open full map <ExternalLink size={16} /></a></div><iframe title="Interactive restaurant geography map" src="/cognifyz/maps/plotly-density-map.html" loading="lazy" /></div>
    </section>

    <section className="case-section" id="insights">
      <div className="case-section__heading"><span className="eyebrow">Key insights & findings</span><h2>What the data says.</h2></div>
      <div className="insight-grid">{['North Indian cuisine dominates the restaurant dataset.', 'New Delhi contributes approximately 57.3% of all restaurant records.', 'Budget-friendly restaurants in price ranges 1 and 2 represent approximately 79.1% of the dataset.', 'Restaurant ratings are concentrated between 3.0 and 3.9.', 'Restaurant popularity and ratings show a positive correlation.', 'Higher-priced restaurants are more likely to provide table booking.', 'Delhi NCR contains several significant geographic restaurant hotspots.'].map((insight, index) => <article key={insight}><b>0{index + 1}</b><p>{insight}</p></article>)}</div>
    </section>

    <section className="case-section case-limitations">
      <span className="eyebrow">Challenges & limitations</span><h2>Honest constraints in the source data.</h2><p>Restaurant review text was not included in the dataset, so review keywords and sentiment analysis were not performed. Geographic analysis only includes records with valid coordinates; 9,052 locations were mapped.</p>
    </section>

    <section className="case-section" id="resources">
      <div className="case-section__heading"><span className="eyebrow">Project resources</span><h2>Supporting deliverables.</h2></div>
      <div className="resource-grid"><a href="/cognifyz/resources/Final_Internship_Report.pdf" download><FileText /><span><b>Final Internship Report</b><small>PDF · Full analysis documentation</small></span><Download size={17} /></a><a href="/cognifyz/resources/Internship_Presentation.pptx" download><FileText /><span><b>Internship Presentation</b><small>PPTX · Project presentation</small></span><Download size={17} /></a><a href="/cognifyz/resources/Cognifyz_Data_Analysis_Internship.zip" download><Download /><span><b>Python Source Code / Project ZIP</b><small>ZIP · Notebooks, scripts, outputs, and reports</small></span><Download size={17} /></a></div>
    </section>
    {image && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Enlarged visualization" onClick={() => setImage(null)}><button type="button" aria-label="Close image"><X /></button><img src={image} alt="Enlarged data visualization" /></div>}
  </main>
}
