import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { Modal } from '../../components/Modal/Modal';

export const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} variant='success'>
        Close
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at
        tempora eligendi sunt tenetur dolores nulla consequatur, et officia
        adipisci.
      </p>
    </Modal>
  );

  return (
    <div>
      <Button variant='primary' onClick={handleClick}>
        Show Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        tempora. Veniam debitis nihil est fugiat esse dolorum impedit totam.
        Fugit odit provident voluptatem ad ipsa quo iure nobis nam labore
        recusandae quisquam, facilis corporis dignissimos beatae. Assumenda
        placeat iure accusantium voluptas, neque nulla quam eos cum id, ratione
        nobis laudantium fugit impedit aut voluptates odio veniam maxime
        nesciunt voluptatum. Tenetur!
      </p>
    </div>
  );
};
