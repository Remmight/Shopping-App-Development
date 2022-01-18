import React from 'react';
import { useParams } from 'react-router-dom';

export default function CategoryProducts() {
  const params = useParams();
  const categories = [
    {
      id: 1,
      name: 'Christian Dior',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642349692/women1-bag-transparent_1_jlsyfd.svg',
      slug: 'christian-dior',
    },
    {
      id: 2,
      name: 'Louis Vuitton',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642349488/women_bag_PNG6408_1_c9iteq.svg',
      slug: 'louis-vuitton',
    },
    {
      id: 3,
      name: 'Michael Kors',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642349486/MK_Bag_3-removebg-preview_3_1_bzsg2o.svg',
      slug: 'michael-kors',
    },
    {
      id: 4,
      name: 'Kate Spade',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642350062/7cc2a7d1a2fa53be1f248feba73c57b8_2_1_qwludn.svg',
      slug: 'kate-spade',
    },
    {
      id: 5,
      name: 'Kate Spade',
      imgUrl:
        'https://res.cloudinary.com/owujib/image/upload/v1642350077/women_bag_1_jnjons.svg',
      slug: 'kate-spade',
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        {categories.map(({ id, name, imgUrl, slug }) => {
          return (
            <div className="col-md-3 col-6 col-sm-4 col-lg-3" key={id}>
              <div
                className="card p-3 shadow mb-3"
                style={{
                  border: 'none',
                  minHeight: '200px',
                  maxHeight: '200px',
                }}
              >
                <div className="d-flex flex-row align-items-end justify-content-end">
                  <img src={imgUrl} alt="..URL" className="img-fluid" />
                </div>
                <div className="card-body">
                  <h5
                    className="text-left "
                    style={{ fontSize: '1.4rem', fontWeight: '300' }}
                  >
                    {name}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
