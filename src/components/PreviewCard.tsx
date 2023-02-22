import Image from "next/image";
import Link from "next/link";

export default function PreviewCard({
  handlePreviewCardClose,
  name,
  link,
  tags,
  socials,
}: {
  handlePreviewCardClose: () => void;
  name: string;
  link: string;
  tags: string[];
  socials: {
    twitter: string;
    github: string;
    linkedin: string;
    dribbble: string;
    behance: string;
  };
}) {
  return (
    <div className="preview-card">
      <div className="card">
        <button className="card-close" onClick={handlePreviewCardClose}>
          <svg
            width="46"
            height="46"
            fill="none"
            stroke="#576f7f"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
        <div className="card-banner">
          <Image
            width={384}
            height={274}
            src="/assets/images/card-portfolio.png"
            alt="banner"
          />
          <h1>
            {name.split(" ")[1] === undefined
              ? name.split(" ")[0][0] + name.split(" ")[0][1]
              : name.split(" ")[0][0] + name.split(" ")[1][0]}
          </h1>
        </div>
        <div className="card__body">
          <h2 className="card-name">{name}</h2>
          <div className="card-tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
          <div className="card-socials">
            {socials.twitter !== "" && socials.twitter !== undefined && (
              <Link
                href={"https://twitter.com/" + socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social__twitter"
              >
                <svg
                  width="46"
                  height="46"
                  fill="none"
                  stroke="#576f7f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3Z"></path>
                </svg>
              </Link>
            )}
            {socials.github !== "" && socials.github !== undefined && (
              <Link
                href={"https://github.com/" + socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social__github"
              >
                <svg
                  width="46"
                  height="46"
                  fill="none"
                  stroke="#576f7f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5"></path>
                  <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996"></path>
                </svg>
              </Link>
            )}
            {socials.linkedin !== "" && socials.linkedin !== undefined && (
              <Link
                href={"https://linkedin.com/in/" + socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social__linkedin"
              >
                <svg
                  width="46"
                  height="46"
                  fill="none"
                  stroke="#576f7f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <path d="M2 9h4v12H2z"></path>
                  <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
                </svg>
              </Link>
            )}
            {socials.dribbble !== "" && socials.dribbble !== undefined && (
              <Link
                href={"https://www.dribbble.com/" + socials.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="social__dribbble"
              >
                <svg
                  width="46"
                  height="46"
                  fill="#576f7f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                </svg>
              </Link>
            )}
            {socials.behance !== "" && socials.behance !== undefined && (
              <Link
                href={"https://www.behance.net/" + socials.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="social__behance"
              >
                <svg
                  width="46"
                  height="46"
                  fill="#576f7f"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </Link>
            )}
          </div>
          <Link className="card-portfolio" href={link} target="_blank">
            <span>Visit Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
