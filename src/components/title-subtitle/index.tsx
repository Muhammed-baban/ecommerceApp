import "./index.css";

interface TitleSubtitleProps {
  title: string;
  subTitle: string;
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  title,
  subTitle,
}: TitleSubtitleProps) => (
  <div className="styled-title-subtitle">
    <h2 className="styled-title-subtitle-title">{title}</h2>
    <p className="styled-title-subtitle-subtitle">{subTitle}</p>
  </div>
);

export default TitleSubtitle;
