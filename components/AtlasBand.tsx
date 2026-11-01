import Image from 'next/image';
import Link from 'next/link';

import warpedAtlasLogo from '@/assets/warped-atlas-white.png';
import CountUp from '@/components/motion/CountUp';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { atlasCounts } from '@/lib/partners';

const atlasStats = [
  { n: atlasCounts.ghanaRecords, suffix: '', label: 'Ghana records mapped', color: 'var(--gold)', tintNumber: true },
  { n: atlasCounts.countries, suffix: '+', label: 'Countries covered', color: 'var(--gold)' },
  { n: atlasCounts.studios, suffix: '+', label: 'Studios continent-wide', color: 'var(--green)' },
  { n: atlasCounts.projects, suffix: '+', label: 'Projects documented', color: 'var(--gold)' },
];

/** Warped Atlas, highlighted as the company mapping the ecosystem. */
export default function AtlasBand() {
  return (
    <Reveal className="band band--ink">
      <div className="grid cols-2" style={{ alignItems: 'center', gap: 44 }}>
        <div>
          <Image
            src={warpedAtlasLogo}
            alt="Warped Atlas"
            className="wa-logo"
            sizes="150px"
            style={{ height: 34, width: 'auto', display: 'block', marginBottom: 20 }}
          />
          <p className="eyebrow eyebrow--gold">The company mapping the ecosystem</p>
          <h2 className="h2 balance" style={{ margin: '16px 0 18px' }}>
            Putting Ghana on the map.
          </h2>
          <p className="lead">
            Warped Atlas is the public record of Africa&apos;s game-development and interactive-media ecosystem:{' '}
            <strong>
              {atlasCounts.studios}+ studios across {atlasCounts.countries}+ countries
            </strong>
            , documented and searchable. GDAG works with Warped Atlas to keep Ghana&apos;s chapter accurate, complete and
            visible to the world.
          </p>
          <div style={{ marginTop: 26, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/about#warped" className="btn btn--primary">
              The collaboration
            </Link>
            <a
              href="https://warpedatlas.com/countries/ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              style={{ borderColor: 'color-mix(in oklab,currentColor 40%,transparent)', color: 'currentColor' }}
            >
              Ghana on Warped Atlas ↗
            </a>
          </div>
        </div>
        <Stagger
          className="grid cols-2"
          stagger={0.08}
          style={{
            gap: 1,
            background: 'color-mix(in oklab,currentColor 16%,transparent)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
          }}
        >
          {atlasStats.map((item) => (
            <StaggerItem
              key={item.label}
              style={{ padding: '26px 22px', background: 'color-mix(in oklab,currentColor 7%,transparent)' }}
            >
              <div className="stat">
                <div className="n" style={item.tintNumber ? { color: item.color } : undefined}>
                  <CountUp to={item.n} />
                  {item.suffix && <b style={{ color: item.color }}>{item.suffix}</b>}
                </div>
                <div className="l" style={{ color: 'color-mix(in oklab,currentColor 66%,transparent)' }}>
                  {item.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Reveal>
  );
}
