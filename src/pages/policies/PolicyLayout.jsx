import { useEffect } from 'react'
import { COMPANY, POLICIES } from './index'

/**
 * Shared frame for every policy page: company particulars, then the policy body,
 * then links to the other policies. Keeping the particulars here means they can
 * never drift apart between documents again.
 */
export default function PolicyLayout({ title, slug, children }) {
  useEffect(() => {
    document.title = `${title} | LORIUS Perfume`
  }, [title])

  return (
    <article className="policy">
      <div className="wrap">
        <h1>{title}</h1>
        <p className="meta">Effective date: {COMPANY.effective} &nbsp;|&nbsp; Version: {COMPANY.version}</p>

        <div className="entity">
          <b>{COMPANY.name}</b>, trading as {COMPANY.brand}<br />
          CIN: {COMPANY.cin} &nbsp;|&nbsp; GSTIN:{' '}
          {COMPANY.gstin || <span className="fill">TO BE FILLED &mdash; GSTIN</span>}<br />
          Registered office: {COMPANY.address}<br />
          Website: {COMPANY.site}
        </div>

        {children}

        <nav className="policy-links" aria-label="Policies">
          {POLICIES.map((p) => (
            <a key={p.slug} href={`#/${p.slug}`} aria-current={p.slug === slug ? 'page' : undefined}>
              {p.title}
            </a>
          ))}
        </nav>
      </div>
    </article>
  )
}
