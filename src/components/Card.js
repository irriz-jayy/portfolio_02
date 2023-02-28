const Card = () => {
  return (
    <div class="card">
      <img
        src="https://via.placeholder.com/150"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body bg-dark">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          View project
        </a>
      </div>
    </div>
  );
};

export default Card;
