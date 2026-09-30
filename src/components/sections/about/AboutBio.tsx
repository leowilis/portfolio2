import AboutDownloadCV from './AboutDownloadCV';
import { ABOUT_BIO } from './about.data';

export default function AboutBio() {
  return (
    <article className='flex flex-col gap-7'>
      <div className='space-y-5'>
        {ABOUT_BIO.map((paragraph) => (
          <p
            key={paragraph.id}
            className='text-sm leading-7 text-foreground-secondary sm:text-base'
          >
            {'content' in paragraph ? (
              paragraph.content
            ) : (
              <>
                {paragraph.before}{' '}
                <span className='font-medium text-foreground'>
                  {paragraph.highlight}
                </span>{' '}
                {paragraph.after}
              </>
            )}
          </p>
        ))}
      </div>

      <AboutDownloadCV />
    </article>
  );
}
