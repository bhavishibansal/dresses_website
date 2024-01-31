// Define your gallery items
var app = angular.module('galleryApp', []);

app.controller('GalleryController', function ($scope) {
  $scope.galleryItems = [
    {
      title: 'Suit',
      description: 'Women\'s South Slub Cotton Salwar Material (Brown, 2 Mtr)',
      image: 'images/image1.jpg'
    },
    {
      title: 'Navy Blue Saree',
      description: 'Women\'s Paper Silk Saree With Jacquard Blouse Piece (Navy Blue, 5-6mtrs)',
      image: 'images/image3.jpg'
    },
    {
        title: 'Saree',
        description: 'Women\'s Cotton Silk Jacquard Poly Silk Saree',
        image: 'images/image4.jpg'
      },
      {
        title: 'Saree',
        description: ' Women\'s Georgette Saree(W.Red,5-6 Mtrs)',
        image: 'images/image5.jpg'
      },
      {
        title: 'Navy Blue Saree',
        description: 'Women\'s Paper Silk Saree With Jacquard Blouse Piece (Navy Blue, 5-6mtrs)',
        image: 'images/image2.jpg'
      },
      {
          title: 'Saree',
          description: 'Women\'s Cotton Silk Jacquard Poly Silk Saree',
          image: 'images/image6.jpg'
        },
        {
          title: 'Saree',
          description: ' Women\'s Georgette Saree(W.Red,5-6 Mtrs)',
          image: 'images/image7.jpg'
        },
        {
          title: 'Navy Blue Saree',
          description: 'Women\'s Paper Silk Saree With Jacquard Blouse Piece (Navy Blue, 5-6mtrs)',
          image: 'images/image8.jpg'
        },
        {
            title: 'Saree',
            description: 'Women\'s Cotton Silk Jacquard Poly Silk Saree',
            image: 'images/image9.jpg'
          },
          {
            title: 'Saree',
            description: ' Women\'s Georgette Saree(W.Red,5-6 Mtrs)',
            image: 'images/image10.jpg'
          },
          {
              title: 'Saree',
              description: 'Women\'s Cotton Silk Jacquard Poly Silk Saree',
              image: 'images/image11.jpg'
            },
            {
              title: 'Saree',
              description: ' Women\'s Georgette Saree(W.Red,5-6 Mtrs)',
              image: 'images/image12.jpg'
            }
    
  ];
});
