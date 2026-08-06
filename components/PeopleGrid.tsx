'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { EASE } from '@/components/motion/config';
import useCanHover from '@/components/motion/useCanHover';
import type { Person } from '@/lib/people';

const BIO = {
  rest: { y: '101%', opacity: 0 },
  hover: { y: '0%', opacity: 1 },
};

const PORTRAIT = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
};

/**
 * Portrait cards. Each frame holds a photo when one exists and a monogram
 * plate when it doesn't, so the section reads as finished either way — drop a
 * file in /public/people and set `photo` to swap it in.
 */
export default function PeopleGrid({ people }: { people: Person[] }) {
  const canHover = useCanHover();

  return (
    <Stagger className="people-grid" stagger={0.09}>
      {people.map((person) => (
        <StaggerItem key={person.name} as="article" className="person" variant="card">
          <motion.div className="person__frame" initial="rest" whileHover="hover" animate="rest">
            <motion.div
              style={{ position: 'absolute', inset: 0 }}
              variants={PORTRAIT}
              transition={{ duration: 0.6, ease: EASE }}
            >
              {person.photo ? (
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  sizes="(min-width:860px) 25vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <div
                  className="person__monogram"
                  style={{ background: person.tint, color: person.inkText ? 'var(--ink)' : '#fff' }}
                >
                  {person.initials}
                </div>
              )}
            </motion.div>

            {canHover && (
              <motion.p className="person__bio" variants={BIO} transition={{ duration: 0.45, ease: EASE }}>
                {person.bio}
              </motion.p>
            )}
          </motion.div>

          <div>
            <h3 className="person__name">{person.name}</h3>
            <p className="person__role">{person.role}</p>
            {!canHover && (
              <p className="text-muted" style={{ fontSize: 14, marginTop: 10, lineHeight: 1.5 }}>
                {person.bio}
              </p>
            )}
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
