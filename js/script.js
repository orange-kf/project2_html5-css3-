var firstImage = new Granim({
    element: '#canvasImageOne',
    direction: 'custom',
    customDirection: {
      x0: '0%',
      y0: '0%',
      x1: '50%',
      y1: '100%'
    },
    isPausedWhenNotInView: true,
    image : {
      source: 'img/aboutBg.jpg',
      blendingMode: 'color',
      stretchMode: ['stretch-if-smaller', 'stretch-if-smaller']
    },
    states : {
      "default-state": {
            gradients: [
                ['#ee7752', '#e73c7e'],
                ['#23a6d5', '#23d5ab']
            ],
            transitionSpeed: 7000
       }
    }
});
  var secondImage = new Granim({
      element: '#canvasImageTwo',
      direction: 'custom',
      customDirection: {
        x0: '0%',
        y0: '0%',
        x1: '50%',
        y1: '100%'
      },
      isPausedWhenNotInView: true,
      image : {
          source: 'img/slide2.jpg',
          blendingMode: 'color',
          stretchMode: ['stretch-if-smaller', 'stretch-if-smaller']
      },
      states : {
          "default-state": {
            gradients: [
                ['#ee7752', '#e73c7e'],
                ['#23a6d5', '#23d5ab']
            ],
            transitionSpeed: 7000
      }
    }
});
  var secondImage = new Granim({
      element: '#canvasImageThree',
      direction: 'custom',
      customDirection: {
        x0: '0%',
        y0: '0%',
        x1: '50%',
        y1: '100%'
      },
      isPausedWhenNotInView: true,
      image : {
          source: 'img/slide3.jpg',
          blendingMode: 'color',
          stretchMode: ['stretch-if-smaller', 'stretch-if-smaller']
      },
      states : {
          "default-state": {
            gradients: [
                ['#ee7752', '#e73c7e'],
                ['#23a6d5', '#23d5ab']
            ],
            transitionSpeed: 7000
      }
    }
});