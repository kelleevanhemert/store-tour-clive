var APP_DATA = {
  "scenes": [
    {
      "id": "0-furniture---up-high",
      "name": "Furniture - Up High",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.0549885107382693,
        "pitch": 0.47905937315763225,
        "fov": 1.4337299731675692
      },
      "linkHotspots": [
        {
          "yaw": -0.6120246046163089,
          "pitch": 0.18886097083726838,
          "rotation": 0,
          "target": "1-kitchenware---up-high"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.152457749049269,
          "pitch": 0.04272705061044668,
          "title": "Furniture",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-kitchenware---up-high",
      "name": "Kitchenware - Up High",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.0776614799586817,
        "pitch": 0.2563623036626428,
        "fov": 1.4337299731675692
      },
      "linkHotspots": [
        {
          "yaw": -2.0056993842318036,
          "pitch": 0.10884560105063557,
          "rotation": 0,
          "target": "0-furniture---up-high"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3341184439711569,
          "pitch": 0.563425793375206,
          "title": "Title",
          "text": "so many nice kitchen things"
        }
      ]
    }
  ],
  "name": "Store Test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
