import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Category(props) {
  const categories = [
    {
      id: 1,
      name: 'Bags',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642326509/Group_wqkirm.png',
      slug: 'bag',
    },
    {
      id: 2,
      name: 'Sun Glassess',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642326509/Group_wqkirm.png',
      slug: 'sun-glassess',
    },
    {
      id: 3,
      name: 'Watches',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642326509/Group_wqkirm.png',
      slug: 'watches',
    },
    {
      id: 4,
      name: 'Shoes',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642326509/Group_wqkirm.png',
      slug: 'shoes',
    },
    {
      id: 5,
      name: 'Clothing',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642326509/Group_wqkirm.png',
      slug: 'clothing',
    },
    {
      id: 6,
      name: 'Jewelries',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642326509/Group_wqkirm.png',
      slug: 'jewelries',
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        {categories.map(({ id, name, imgUrl, slug }) => {
          return (
            <div className="col-md-3 col-6 col-sm-4 col-lg-3" key={id}>
              <div className="card p-3 shadow mb-3" style={{ border: 'none' }}>
                <Link
                  to={`/categories/${slug}`}
                  className="text-dark"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <div className="d-flex flex-row align-items-end justify-content-end">
                    <img src={imgUrl} alt="..URL" width={150} />
                  </div>
                  <div className="card-body">
                    <h5
                      className="text-left"
                      style={{ fontSize: '1.4rem', fontWeight: '300' }}
                    >
                      {name}
                    </h5>
                  </div>
                </Link>
              </div>
              <Outlet />
            </div>
          );
        })}
      </div>
    </div>
  );
}
