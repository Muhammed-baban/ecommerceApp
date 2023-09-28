import "./index.css";

interface BreadCrumbProps {
  title: string;
  page: string;
  subPage?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  page,
  title,
  subPage,
}: BreadCrumbProps) => (
  <div className="styled-breadcrumb">
    <div className="styled-breadcrumb-title">
      <h2 className="styled-breadcrumb-title-header">{title}</h2>
      <ul>
        <li className="styled-breadcrumb-title-li"><a className="styled-breadcrumb-title-a" href="/">HOME</a></li>
        <li className="styled-breadcrumb-title-li">&nbsp;/ {page}</li>
        {subPage && <li className="styled-breadcrumb-title-li">&nbsp;/ {subPage}</li>}
      </ul>
    </div>
  </div>
);

export default BreadCrumb;
