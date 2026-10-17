/* Just Cuz reader: generated from the retained source files. */
;
/* manifest.js */
window.COMIC_BOOK = {
  "schemaVersion": 2,
  "title": "Just Cuz · 第一集：生日派对",
  "stage": "complete",
  "complete": true,
  "pageCount": 34,
  "primaryPanelCount": 38,
  "verifiedSourcePanelCount": 38,
  "verifiedDynamicPanelCount": 38,
  "candidatePanelCount": 0,
  "chapterScope": {
    "coordinateSpace": "source-PDF",
    "includedSourcePages": [
      2,
      35
    ],
    "excludedSourcePages": [
      1
    ],
    "globalCover": 1,
    "globalCoverInReadingSequence": false,
    "globalCoverUsage": "UI decoration elements only; not episode reading content",
    "episodeCover": 2,
    "storyPages": [
      3,
      35
    ],
    "readerPages": [
      1,
      34
    ],
    "readerEpisodeCoverPage": 1,
    "readerStoryPages": [
      2,
      34
    ],
    "sourcePageField": "pages[].sourcePage"
  },
  "chapters": [
    {
      "id": "birthday",
      "title": "生日派对",
      "start": 1,
      "end": 34
    }
  ],
  "mappingPolicy": "Each complete native panel bounds contains the entire video; no arbitrary actor cropping, duration or resolution gate. Original publication layer uses native source RGB.",
  "retainedAcceptedVisualPanelCount": 0,
  "source": {
    "sha256": "afca9c62bf03de86bac7d084256e14080941a1948d9cfc8dcf20a2329b481860",
    "bytes": 22001452,
    "pageCount": 85
  },
  "pages": [
    {
      "id": "page-002",
      "page": 1,
      "sourcePage": 2,
      "source": "pages/page-002.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724",
      "bytes": 151753,
      "panelSources": [
        {
          "id": "page-002-panel-01",
          "title": "第1页 · 第01格完整原画",
          "source": "source-panels/page-002-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724",
          "cropSha256": "45402290d76ebf82bdb247ed9fb2e90c1aad9f982d2bf2e9984e05eb5b0e8af6",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-002-panel-01",
          "title": "第1页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-002-panel-01-cbd9e5a1b0ba.mp4",
          "sourceCrop": "source-panels/page-002-panel-01.png",
          "sourceCropSha256": "45402290d76ebf82bdb247ed9fb2e90c1aad9f982d2bf2e9984e05eb5b0e8af6",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 180,
            "fps": 45.0,
            "fpsRational": "45/1",
            "duration": 4.0,
            "sha256": "cbd9e5a1b0ba1dec8d917b44f47870cf2c169632be345f2b57f9ec39e6071184",
            "sizeBytes": 3832180,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-002-panel-01-38767869640e.png",
            "width": 1600,
            "height": 2000,
            "sha256": "38767869640e48a413202f98aed29c62ba7bd56e64a3e25ef2622befb641c993",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724",
              "mediaSha256": "cbd9e5a1b0ba1dec8d917b44f47870cf2c169632be345f2b57f9ec39e6071184",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 180,
                "fps": 45.0,
                "fpsRational": "45/1",
                "duration": 4.0,
                "sha256": "cbd9e5a1b0ba1dec8d917b44f47870cf2c169632be345f2b57f9ec39e6071184",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 3832180
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-002-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724",
              "mediaSha256": "cbd9e5a1b0ba1dec8d917b44f47870cf2c169632be345f2b57f9ec39e6071184",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-002-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724",
              "mediaSha256": "cbd9e5a1b0ba1dec8d917b44f47870cf2c169632be345f2b57f9ec39e6071184",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  1999
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-002-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724",
              "mediaSha256": "cbd9e5a1b0ba1dec8d917b44f47870cf2c169632be345f2b57f9ec39e6071184",
              "allActualFramesReviewed": true,
              "frameCount": 180,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original title and author retain exact source RGB; no observed eye or mouth collision. Lettering approaches editorial sun/cloud.",
              "evidence": [
                "qa/public-acceptance/page-002-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724",
              "mediaSha256": "cbd9e5a1b0ba1dec8d917b44f47870cf2c169632be345f2b57f9ec39e6071184",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-002-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-003",
      "page": 2,
      "sourcePage": 3,
      "source": "pages/page-003.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235",
      "bytes": 173767,
      "panelSources": [
        {
          "id": "page-003-panel-01",
          "title": "第2页 · 第01格完整原画",
          "source": "source-panels/page-003-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235",
          "cropSha256": "4ef782dcac9460927f7978471aeb8e2a35a70f0eea0e813958b3cd9ec4c1dac1",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-003-panel-01",
          "title": "第2页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-003-panel-01-a2bfa5a5b3ec.mp4",
          "sourceCrop": "source-panels/page-003-panel-01.png",
          "sourceCropSha256": "4ef782dcac9460927f7978471aeb8e2a35a70f0eea0e813958b3cd9ec4c1dac1",
          "method": "chatgpt-four-directions-wan3-real-generated-final-quarter-combined-all180-four-seconds",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 180,
            "fps": 45.0,
            "fpsRational": "45/1",
            "duration": 4.0,
            "sha256": "a2bfa5a5b3ec8e8216b768b07dbcaf6629951e9b3883957822f92545437ebc7e",
            "sizeBytes": 4552588,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-003-panel-01-3b0d7e173293.png",
            "width": 1600,
            "height": 2000,
            "sha256": "3b0d7e173293e13def4f65b7314c725e64d1dab043dcd3a55bcabb5b20249df6",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235",
              "mediaSha256": "a2bfa5a5b3ec8e8216b768b07dbcaf6629951e9b3883957822f92545437ebc7e",
              "evidence": [
                "qa/public-acceptance/page-003-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235",
              "mediaSha256": "a2bfa5a5b3ec8e8216b768b07dbcaf6629951e9b3883957822f92545437ebc7e",
              "closedOrbit": true,
              "evidence": [
                "qa/public-acceptance/page-003-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235",
              "mediaSha256": "a2bfa5a5b3ec8e8216b768b07dbcaf6629951e9b3883957822f92545437ebc7e",
              "evidence": [
                "qa/public-acceptance/page-003-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235",
              "mediaSha256": "a2bfa5a5b3ec8e8216b768b07dbcaf6629951e9b3883957822f92545437ebc7e",
              "allActualFramesReviewed": true,
              "evidence": [
                "qa/public-acceptance/page-003-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235",
              "mediaSha256": "a2bfa5a5b3ec8e8216b768b07dbcaf6629951e9b3883957822f92545437ebc7e",
              "evidence": [
                "qa/public-acceptance/page-003-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-004",
      "page": 3,
      "sourcePage": 4,
      "source": "pages/page-004.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823",
      "bytes": 236789,
      "panelSources": [
        {
          "id": "page-004-panel-01",
          "title": "第3页 · 第01格完整原画",
          "source": "source-panels/page-004-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823",
          "cropSha256": "c6cccc54e0d336ea2859c7e3b32b474594c59a6af8d2223694b5cb13b0af7b93",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-004-panel-01",
          "title": "第3页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-004-panel-01-294182ddad19.mp4",
          "sourceCrop": "source-panels/page-004-panel-01.png",
          "sourceCropSha256": "c6cccc54e0d336ea2859c7e3b32b474594c59a6af8d2223694b5cb13b0af7b93",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 200,
            "fps": 50.0,
            "fpsRational": "50/1",
            "duration": 4.0,
            "sha256": "294182ddad19746236b7d584e94fd41586410428f0e78cd5f26776c5e967c8fe",
            "sizeBytes": 5610709,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-004-panel-01-7361a34d33c3.png",
            "width": 1600,
            "height": 2000,
            "sha256": "7361a34d33c3f17f714f187ebe7a83d041bcb41e839e231f61eee31a948f5cab",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 45,
              "y": 45,
              "width": 1510,
              "height": 1250
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "Fullvideo uniformlycontained at300,45 size1000x1250 above unchangedoriginalsixnarrativelines. Purewhite matte, nooriginalactorunderlay."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823",
              "mediaSha256": "294182ddad19746236b7d584e94fd41586410428f0e78cd5f26776c5e967c8fe",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 200,
                "fps": 50.0,
                "fpsRational": "50/1",
                "duration": 4.0,
                "sha256": "294182ddad19746236b7d584e94fd41586410428f0e78cd5f26776c5e967c8fe",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 5610709
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-004-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823",
              "mediaSha256": "294182ddad19746236b7d584e94fd41586410428f0e78cd5f26776c5e967c8fe",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-004-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823",
              "mediaSha256": "294182ddad19746236b7d584e94fd41586410428f0e78cd5f26776c5e967c8fe",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1000,
                  1250
                ],
                "nativeFitPosition": [
                  300,
                  45
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-004-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823",
              "mediaSha256": "294182ddad19746236b7d584e94fd41586410428f0e78cd5f26776c5e967c8fe",
              "allActualFramesReviewed": true,
              "frameCount": 200,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Sixnarrativelines+frameoriginalRGBA fixed atsourcepositions RGB0mismatch. Fullvideo insetabove allnarration. Physicalbanner/WELCOMEmat/pictures rotate with scene, generatedletter/shapedrift disclosed.",
              "evidence": [
                "qa/public-acceptance/page-004-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823",
              "mediaSha256": "294182ddad19746236b7d584e94fd41586410428f0e78cd5f26776c5e967c8fe",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-004-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-005",
      "page": 4,
      "sourcePage": 5,
      "source": "pages/page-005.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
      "bytes": 163137,
      "panelSources": [
        {
          "id": "page-005-panel-01",
          "title": "第4页 · 第01格完整原画",
          "source": "source-panels/page-005-panel-01.png",
          "width": 1600,
          "height": 760,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 760
          },
          "quality": "source-verified",
          "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
          "cropSha256": "3a3f81c0711d8f012ba1401706f0b6c06fb4a4589bfe51b9dc06aadd05298d55",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        },
        {
          "id": "page-005-panel-02",
          "title": "第4页 · 第02格完整原画",
          "source": "source-panels/page-005-panel-02.png",
          "width": 1600,
          "height": 1240,
          "bounds": {
            "x": 0,
            "y": 760,
            "width": 1600,
            "height": 1240
          },
          "quality": "source-verified",
          "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
          "cropSha256": "aa18a78912537eee00038b60f203a4b3661d31800141c8daf20fbe046a4de1d7",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-005-panel-01",
          "title": "第4页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 760
          },
          "video": "videos/page-005-panel-01-47eb640ab859.mp4",
          "sourceCrop": "source-panels/page-005-panel-01.png",
          "sourceCropSha256": "3a3f81c0711d8f012ba1401706f0b6c06fb4a4589bfe51b9dc06aadd05298d55",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 1392,
            "height": 660,
            "frameCount": 240,
            "fps": 60.0,
            "fpsRational": "60/1",
            "duration": 4.0,
            "sha256": "47eb640ab859e7eb02a621ca23dfc12d50d15a88e74ee49d9300e0df16f88e59",
            "sizeBytes": 2598774,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-005-panel-01-0d90c80fd6fa.png",
            "width": 1600,
            "height": 760,
            "sha256": "0d90c80fd6fa3e312f7347ac97a8fac2666efa08af190853563abcedb23d44ff",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 1392,
              "height": 660
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "47eb640ab859e7eb02a621ca23dfc12d50d15a88e74ee49d9300e0df16f88e59",
              "actualMedia": {
                "width": 1392,
                "height": 660,
                "frameCount": 240,
                "fps": 60.0,
                "fpsRational": "60/1",
                "duration": 4.0,
                "sha256": "47eb640ab859e7eb02a621ca23dfc12d50d15a88e74ee49d9300e0df16f88e59",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 2598774
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-005-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "47eb640ab859e7eb02a621ca23dfc12d50d15a88e74ee49d9300e0df16f88e59",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-005-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "47eb640ab859e7eb02a621ca23dfc12d50d15a88e74ee49d9300e0df16f88e59",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 760
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  759
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-005-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "47eb640ab859e7eb02a621ca23dfc12d50d15a88e74ee49d9300e0df16f88e59",
              "allActualFramesReviewed": true,
              "frameCount": 240,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original DING/DONG lettering and original frame/exterior retain exact RGB. Sound-effect ink overlays inferred blue hand or jamb at some angles; words remain legible. This editorial overlay is disclosed and not claimed absent.",
              "evidence": [
                "qa/public-acceptance/page-005-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "47eb640ab859e7eb02a621ca23dfc12d50d15a88e74ee49d9300e0df16f88e59",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-005-panel-01-runtime.json"
              ]
            }
          }
        },
        {
          "id": "page-005-panel-02",
          "title": "第4页 · 第02格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 760,
            "width": 1600,
            "height": 1240
          },
          "video": "videos/page-005-panel-02-74866a546608.mp4",
          "sourceCrop": "source-panels/page-005-panel-02.png",
          "sourceCropSha256": "aa18a78912537eee00038b60f203a4b3661d31800141c8daf20fbe046a4de1d7",
          "method": "chatgpt-four-directions-wan3",
          "actualMedia": {
            "width": 1090,
            "height": 844,
            "frameCount": 180,
            "fps": 45.0,
            "fpsRational": "45/1",
            "duration": 4.0,
            "sha256": "74866a546608ef7714fe30c0ece81ff4e35b6cf1bd3ec064bdab8016d14e28aa",
            "sizeBytes": 3789560,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-005-panel-02-9c11c1694475.png",
            "width": 1600,
            "height": 1240,
            "sha256": "9c11c169447590ee398670f648018c4ed591afbea5db7ae47f0a8bcc90c638b5",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 1090,
              "height": 844
            },
            "artworkRect": {
              "x": 45,
              "y": 356,
              "width": 1489,
              "height": 818
            },
            "backgroundColor": [
              194,
              238,
              249
            ],
            "layoutMeaning": "Whole native video is reduced to66.03% of previous contain display inside the original unchanged lower-panel bounds. Pale-cyan source-wall matte leaves the original caption band clear. Slight rectangular generated-blue tone difference remains visible."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "74866a546608ef7714fe30c0ece81ff4e35b6cf1bd3ec064bdab8016d14e28aa",
              "actualMedia": {
                "width": 1090,
                "height": 844,
                "frameCount": 180,
                "fps": 45.0,
                "fpsRational": "45/1",
                "duration": 4.0,
                "sha256": "74866a546608ef7714fe30c0ece81ff4e35b6cf1bd3ec064bdab8016d14e28aa",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 3789560
              },
              "orderedRawFrameCorrespondence": true,
              "lossyReencoding": true,
              "evidence": [
                "qa/public-acceptance/page-005-panel-02-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "74866a546608ef7714fe30c0ece81ff4e35b6cf1bd3ec064bdab8016d14e28aa",
              "closedOrbit": true,
              "actualSequence": "front-side-rear-opposite-front",
              "nativeJoinActuallyReviewed": true,
              "pixelIdenticalLoopClaim": false,
              "calibrated3DClaim": false,
              "evidence": [
                "qa/public-acceptance/page-005-panel-02-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "74866a546608ef7714fe30c0ece81ff4e35b6cf1bd3ec064bdab8016d14e28aa",
              "originalBounds": {
                "x": 0,
                "y": 760,
                "width": 1600,
                "height": 1240
              },
              "artworkRect": {
                "x": 45,
                "y": 356,
                "width": 1489,
                "height": 818
              },
              "entireVideoContained": true,
              "noSourceCrop": true,
              "evidence": [
                "qa/public-acceptance/page-005-panel-02-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "74866a546608ef7714fe30c0ece81ff4e35b6cf1bd3ec064bdab8016d14e28aa",
              "allActualFramesReviewed": true,
              "frameCount": 180,
              "overlaySha256": "9c11c169447590ee398670f648018c4ed591afbea5db7ae47f0a8bcc90c638b5",
              "nativeProtectedRGBMismatch": 0,
              "captionActorCollisionObserved": false,
              "originalActorUnderlayUsed": false,
              "evidence": [
                "qa/public-acceptance/page-005-panel-02-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f",
              "mediaSha256": "74866a546608ef7714fe30c0ece81ff4e35b6cf1bd3ec064bdab8016d14e28aa",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetKeyboardSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "originalCompare": true,
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "captureLimitation": "Both native and SDK screenshot calls returned Unable to capture screenshot in this calling view; no new browser raster proof is claimed. Actual DOM media/controller actions, readyState4, source/overlay loading and native all180 offline publication review are recorded separately.",
              "evidence": [
                "qa/public-acceptance/page-005-panel-02-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-006",
      "page": 5,
      "sourcePage": 6,
      "source": "pages/page-006.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696",
      "bytes": 177793,
      "panelSources": [
        {
          "id": "page-006-panel-01",
          "title": "第5页 · 第01格完整原画",
          "source": "source-panels/page-006-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696",
          "cropSha256": "0cbfecf95a7c6763556bb3a8ebbbb6f66cd11fa3f8fd6ea3d791d3f75a84e529",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-006-panel-01",
          "title": "第5页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-006-panel-01-e28232b2f666.mp4",
          "sourceCrop": "source-panels/page-006-panel-01.png",
          "sourceCropSha256": "0cbfecf95a7c6763556bb3a8ebbbb6f66cd11fa3f8fd6ea3d791d3f75a84e529",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 228,
            "fps": 57.0,
            "fpsRational": "57/1",
            "duration": 4.0,
            "sha256": "e28232b2f6664c0ffa6f3c7f20e2e0ba60f7a661bff34974ba61d745004d1a4c",
            "sizeBytes": 5135391,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-006-panel-01-fac4916e842c.png",
            "width": 1600,
            "height": 2000,
            "sha256": "fac4916e842c7b5710c88173e74d0673a2da22a58f49acc7d601c19719c2b2cc",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 50,
              "y": 40,
              "width": 1500,
              "height": 1460
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "Whole actual228frame video uniformly contained1169x1460 at215,40 above all originalfour captionlines, plainwhite matte without originalactor underlay."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696",
              "mediaSha256": "e28232b2f6664c0ffa6f3c7f20e2e0ba60f7a661bff34974ba61d745004d1a4c",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 228,
                "fps": 57.0,
                "fpsRational": "57/1",
                "duration": 4.0,
                "sha256": "e28232b2f6664c0ffa6f3c7f20e2e0ba60f7a661bff34974ba61d745004d1a4c",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 5135391
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-006-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696",
              "mediaSha256": "e28232b2f6664c0ffa6f3c7f20e2e0ba60f7a661bff34974ba61d745004d1a4c",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-006-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696",
              "mediaSha256": "e28232b2f6664c0ffa6f3c7f20e2e0ba60f7a661bff34974ba61d745004d1a4c",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1169,
                  1460
                ],
                "nativeFitPosition": [
                  215,
                  40
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-006-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696",
              "mediaSha256": "e28232b2f6664c0ffa6f3c7f20e2e0ba60f7a661bff34974ba61d745004d1a4c",
              "allActualFramesReviewed": true,
              "frameCount": 228,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Originalfour narrationlines and originalframe remain exactsourceRGB, alltext belowactualvideo. Fixed thin originalframeguard coversonlytopsky edge in video; no face/captioncollision.",
              "evidence": [
                "qa/public-acceptance/page-006-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696",
              "mediaSha256": "e28232b2f6664c0ffa6f3c7f20e2e0ba60f7a661bff34974ba61d745004d1a4c",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-006-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-007",
      "page": 6,
      "sourcePage": 7,
      "source": "pages/page-007.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41",
      "bytes": 181371,
      "panelSources": [
        {
          "id": "page-007-panel-01",
          "title": "第6页 · 第01格完整原画",
          "source": "source-panels/page-007-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41",
          "cropSha256": "800c0c6a75675fa7ef14964c66dce0931148c9d3e9335579f2a5c9dc092a3c1c",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-007-panel-01",
          "title": "第6页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-007-panel-01-ce9fb467b2b2.mp4",
          "sourceCrop": "source-panels/page-007-panel-01.png",
          "sourceCropSha256": "800c0c6a75675fa7ef14964c66dce0931148c9d3e9335579f2a5c9dc092a3c1c",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 164,
            "fps": 41.0,
            "fpsRational": "41/1",
            "duration": 4.0,
            "sha256": "ce9fb467b2b2df41c915edd466f8daefcb2b22d0fe755ea69061773f6f7c1cc6",
            "sizeBytes": 4032374,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-007-panel-01-c7a1196a2a62.png",
            "width": 1600,
            "height": 2000,
            "sha256": "c7a1196a2a626f12037ca165c22b035ea12956a42110ec634d9fb20d8f56991a",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 50,
              "y": 40,
              "width": 1500,
              "height": 1580
            },
            "backgroundColor": [
              164,
              216,
              232
            ],
            "layoutMeaning": "Whole actual164frame video contained1265x1580 at167,40 above fixed original captions. Solidblue matte has no original actor underlay."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41",
              "mediaSha256": "ce9fb467b2b2df41c915edd466f8daefcb2b22d0fe755ea69061773f6f7c1cc6",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 164,
                "fps": 41.0,
                "fpsRational": "41/1",
                "duration": 4.0,
                "sha256": "ce9fb467b2b2df41c915edd466f8daefcb2b22d0fe755ea69061773f6f7c1cc6",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 4032374
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-007-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41",
              "mediaSha256": "ce9fb467b2b2df41c915edd466f8daefcb2b22d0fe755ea69061773f6f7c1cc6",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-007-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41",
              "mediaSha256": "ce9fb467b2b2df41c915edd466f8daefcb2b22d0fe755ea69061773f6f7c1cc6",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1265,
                  1580
                ],
                "nativeFitPosition": [
                  167,
                  40
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-007-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41",
              "mediaSha256": "ce9fb467b2b2df41c915edd466f8daefcb2b22d0fe755ea69061773f6f7c1cc6",
              "allActualFramesReviewed": true,
              "frameCount": 164,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original dialogue and frame remain exact sourceRGB outside reduced video; no observed actor-caption intersection in contained layout.",
              "evidence": [
                "qa/public-acceptance/page-007-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41",
              "mediaSha256": "ce9fb467b2b2df41c915edd466f8daefcb2b22d0fe755ea69061773f6f7c1cc6",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-007-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-008",
      "page": 7,
      "sourcePage": 8,
      "source": "pages/page-008.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
      "bytes": 128969,
      "panelSources": [
        {
          "id": "page-008-panel-01",
          "title": "第7页 · 第01格完整原画",
          "source": "source-panels/page-008-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
          "cropSha256": "b78f3bd42da66d56545e11b30cc1b9dd1fd793bdad646f8a244482b5378fc169",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-008-panel-01",
          "title": "第7页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-008-panel-01-dcbadfc23d5e.mp4",
          "sourceCrop": "source-panels/page-008-panel-01.png",
          "sourceCropSha256": "b78f3bd42da66d56545e11b30cc1b9dd1fd793bdad646f8a244482b5378fc169",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 240,
            "fps": 60.0,
            "fpsRational": "60/1",
            "duration": 4.0,
            "sha256": "dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b",
            "sizeBytes": 912722,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-008-panel-01-1192fd9e3735.png",
            "width": 1600,
            "height": 2000,
            "sha256": "1192fd9e3735fc0561aba71034d2cb2aab91debd95a84d82dd25d595c43a4048",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
              "mediaSha256": "dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 240,
                "fps": 60.0,
                "fpsRational": "60/1",
                "duration": 4.0,
                "sha256": "dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 912722
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-008-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
              "mediaSha256": "dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-008-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
              "mediaSha256": "dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  1999
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-008-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
              "mediaSha256": "dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b",
              "allActualFramesReviewed": true,
              "frameCount": 240,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original four English caption blocks and outer frame remain exact original source RGB, separate from encoded video. No observed eye/mouth/limb collision on all240 source-publication frames.",
              "evidence": [
                "qa/public-acceptance/page-008-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
              "mediaSha256": "dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-008-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-009",
      "page": 8,
      "sourcePage": 9,
      "source": "pages/page-009.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
      "bytes": 125456,
      "panelSources": [
        {
          "id": "page-009-panel-01",
          "title": "第8页 · 第01格完整原画",
          "source": "source-panels/page-009-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
          "cropSha256": "9f77af60c5da6608de9e4893287a5eb6876d6631779d78d798597b912bf92df1",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-009-panel-01",
          "title": "第8页 · 完整画格环绕",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-009-panel-01-7b0a43fd624e.mp4",
          "method": "lora",
          "actualMedia": {
            "width": 768,
            "height": 960,
            "frameCount": 124,
            "fps": 31.0,
            "fpsRational": "31/1",
            "duration": 4.0,
            "sha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
            "sizeBytes": 1172290,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-009-panel-01-3e1bf37d7c20.png",
            "width": 1600,
            "height": 2000,
            "sha256": "3e1bf37d7c20fb0618db360ff3bb31821e5fda93a87d7fb7159cef220965c9f0",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1"
          },
          "disclosedQualityLimitations": [
            "Light native-pixel jagged/dark fragments remain at some body outlines, readable and independently accepted as minor cosmetic quality.",
            "Final H264420 colour is a visual approximation and not pixel-identical actor RGB.",
            "Flat-source body orbit does not establish environmental parallax."
          ],
          "sourceCrop": "source-panels/page-009-panel-01.png",
          "sourceCropSha256": "9f77af60c5da6608de9e4893287a5eb6876d6631779d78d798597b912bf92df1",
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 768,
              "height": 960
            }
          },
          "weight": {
            "sha256": "e9275b2f456f6bd004c9cb3cf5c636cad87217c5bc96e6a5b5533e917de121da"
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "scope": "Actual4s124@31h264 with SHA-bound original packet and decodedRGB frame order identity",
              "actualMedia": {
                "width": 768,
                "height": 960,
                "frameCount": 124,
                "fps": 31.0,
                "fpsRational": "31/1",
                "duration": 4.0,
                "sha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
                "sizeBytes": 1172290,
                "codec": "h264",
                "audio": false
              },
              "evidence": [
                "qa/public-acceptance/page-009-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "closedOrbit": true,
              "scope": "Transferred explicit original actual all124 body/pose/wardrobe/props review with observed front-side-back-opposite-front closure",
              "observedClosure": "纠色后实际全部124帧仍有唯一Cuz正面→右侧→后背→左侧→回正；双空手耸肩、黄白菠萝衣/棕短裤/裸足保持。没有丢掉末帧、角色复制、背包、错色绿身或四肢道具改动；可见面部未见新增眨眼。",
              "physicallyCalibratedYawClaim": false,
              "environmentParallax": "not applicable source flat colour/rain illustration",
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-009-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "bounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "noSourceCropOrPadding": true,
              "entireVideoContained": true,
              "scope": "Complete native1600x2000 source plus full768x960 video mapping; source and overlay unchanged",
              "evidence": [
                "qa/public-acceptance/page-009-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "overlaySha256": "3e1bf37d7c20fb0618db360ff3bb31821e5fda93a87d7fb7159cef220965c9f0",
              "allActualFramesReviewed": true,
              "all124ActualFramesReviewed": true,
              "reviewMode": "Transferred original actual all124 own-page publication review through exact decodedRGB/packet order identity",
              "nativeProtectedSourceRGBMismatch": 0,
              "originalTextFixedAtSourcePositions": true,
              "dynamicPublicationGhostObserved": false,
              "textCollisionWithFaceHandsClothingObserved": false,
              "geometricDiagnosticIsSemanticActorMask": false,
              "evidence": [
                "qa/public-acceptance/page-009-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "scope": "Root actual current4s playback, paused reset, settled slider2s50%, desktop and390width contain/nooverflow; unlogged additional actions explicitly excluded",
              "duration": 4,
              "readyState": 4,
              "actualBrowserDecoded": true,
              "playObserved": true,
              "pausedResetObserved": true,
              "settledSliderTime": 2,
              "settledProgress": 50,
              "narrowViewport": {
                "width": 390,
                "height": 844,
                "horizontalOverflow": false
              },
              "standalonePauseButtonLogged": false,
              "fourSecondPointerDragLogged": false,
              "fourSecondNaturalEndLogged": false,
              "fourSecondSourceCompareLogged": false,
              "oldRuntimeInherited": false,
              "page31InitialAsyncPendingPreserved": false,
              "evidence": [
                "qa/public-acceptance/page-009-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-010",
      "page": 9,
      "sourcePage": 10,
      "source": "pages/page-010.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070",
      "bytes": 176156,
      "panelSources": [
        {
          "id": "page-010-panel-01",
          "title": "第9页 · 第01格完整原画",
          "source": "source-panels/page-010-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070",
          "cropSha256": "a7e710aec4e62f296f59a81afa26ccd2c0ecfdbf27187c05a7f411ba1f734ac0",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-010-panel-01",
          "title": "第9页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-010-panel-01-2be85e3ab05e.mp4",
          "sourceCrop": "source-panels/page-010-panel-01.png",
          "sourceCropSha256": "a7e710aec4e62f296f59a81afa26ccd2c0ecfdbf27187c05a7f411ba1f734ac0",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 180,
            "fps": 45.0,
            "fpsRational": "45/1",
            "duration": 4.0,
            "sha256": "2be85e3ab05e763828610e9c57932de58b8f97bc44a82af5ea893bf9cd08750c",
            "sizeBytes": 4840436,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-010-panel-01-844dfd95975b.png",
            "width": 1600,
            "height": 2000,
            "sha256": "844dfd95975b88d6ecc7322f68f4eca78df60ceaa317f5aa79e57f3ae69f5a1b",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070",
              "mediaSha256": "2be85e3ab05e763828610e9c57932de58b8f97bc44a82af5ea893bf9cd08750c",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 180,
                "fps": 45.0,
                "fpsRational": "45/1",
                "duration": 4.0,
                "sha256": "2be85e3ab05e763828610e9c57932de58b8f97bc44a82af5ea893bf9cd08750c",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 4840436
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-010-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070",
              "mediaSha256": "2be85e3ab05e763828610e9c57932de58b8f97bc44a82af5ea893bf9cd08750c",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-010-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070",
              "mediaSha256": "2be85e3ab05e763828610e9c57932de58b8f97bc44a82af5ea893bf9cd08750c",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-no-crop-with-original-caption-background-plates",
                "nativeFitSize": [
                  1600,
                  1999
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-010-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070",
              "mediaSha256": "2be85e3ab05e763828610e9c57932de58b8f97bc44a82af5ea893bf9cd08750c",
              "allActualFramesReviewed": true,
              "frameCount": 180,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original caption and question pixels including their plain sky/road backdrops remain fixed and readable. No source actor or vehicle is pasted. These small opaque caption plates deliberately occlude underlying rear-head top/vehicle/environment in some orbit views; no zero-occlusion claim.",
              "evidence": [
                "qa/public-acceptance/page-010-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070",
              "mediaSha256": "2be85e3ab05e763828610e9c57932de58b8f97bc44a82af5ea893bf9cd08750c",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-010-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-011",
      "page": 10,
      "sourcePage": 11,
      "source": "pages/page-011.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4",
      "bytes": 222602,
      "panelSources": [
        {
          "id": "page-011-panel-01",
          "title": "第10页 · 第01格完整原画",
          "source": "source-panels/page-011-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4",
          "cropSha256": "b5cfb68c8e18806e435d9c81c50aa72636ae92ec5439fea8b9e51b78e0fdb0bd",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-011-panel-01",
          "title": "第10页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-011-panel-01-3a7132420ee7.mp4",
          "sourceCrop": "source-panels/page-011-panel-01.png",
          "sourceCropSha256": "b5cfb68c8e18806e435d9c81c50aa72636ae92ec5439fea8b9e51b78e0fdb0bd",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 240,
            "fps": 60.0,
            "fpsRational": "60/1",
            "duration": 4.0,
            "sha256": "3a7132420ee72df5c9fcd7a4696d9392416be29005675ba5884656b4eecd5b5d",
            "sizeBytes": 2703693,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-011-panel-01-1a72d5b80481.png",
            "width": 1600,
            "height": 2000,
            "sha256": "1a72d5b80481b202e12edbdb172c832d73da0626a504fa9de49786abd9d689a7",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 0,
              "y": 0,
              "width": 1600,
              "height": 2000
            },
            "backgroundColor": [
              105,
              207,
              98
            ],
            "layoutMeaning": "Three independent source delivery encounters occupy upper-right/middle-left/lower-right page bands. Every window contains its full generated actors, house, road, trees and shrubs with changing perspective. The flat source-grass-colored area and black window boundaries are editorial layout only. No static actor/house/tree village underlay is used; shared original S-road outside windows is omitted rather than made into a static village claim."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4",
              "mediaSha256": "3a7132420ee72df5c9fcd7a4696d9392416be29005675ba5884656b4eecd5b5d",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 240,
                "fps": 60.0,
                "fpsRational": "60/1",
                "duration": 4.0,
                "sha256": "3a7132420ee72df5c9fcd7a4696d9392416be29005675ba5884656b4eecd5b5d",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 2703693
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-011-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4",
              "mediaSha256": "3a7132420ee72df5c9fcd7a4696d9392416be29005675ba5884656b4eecd5b5d",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-011-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4",
              "mediaSha256": "3a7132420ee72df5c9fcd7a4696d9392416be29005675ba5884656b4eecd5b5d",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "sourcePageSha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4",
                "subsceneRectangles": [
                  {
                    "id": "upper",
                    "artworkRect": {
                      "x": 855,
                      "y": 70,
                      "width": 670,
                      "height": 504
                    }
                  },
                  {
                    "id": "middle",
                    "artworkRect": {
                      "x": 65,
                      "y": 610,
                      "width": 950,
                      "height": 714
                    }
                  },
                  {
                    "id": "lower",
                    "artworkRect": {
                      "x": 735,
                      "y": 1340,
                      "width": 790,
                      "height": 594
                    }
                  }
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-011-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4",
              "mediaSha256": "3a7132420ee72df5c9fcd7a4696d9392416be29005675ba5884656b4eecd5b5d",
              "allActualFramesReviewed": true,
              "frameCount": 240,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "ExactoriginalnarrationRGB/backdrop/frame. Fullphysicalvideo windows do not intersectprotected sourceoverlay; noactor/housebackgroundkeying. Grassmatteandwindowbordereditorial.",
              "evidence": [
                "qa/public-acceptance/page-011-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4",
              "mediaSha256": "3a7132420ee72df5c9fcd7a4696d9392416be29005675ba5884656b4eecd5b5d",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-011-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-012",
      "page": 11,
      "sourcePage": 12,
      "source": "pages/page-012.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa",
      "bytes": 215009,
      "panelSources": [
        {
          "id": "page-012-panel-01",
          "title": "第11页 · 第01格完整原画",
          "source": "source-panels/page-012-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa",
          "cropSha256": "5b5ebab9ac13d62b835bec1d9df07335a75287f60bfea972b3a7c170d8cce031",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-012-panel-01",
          "title": "第11页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-012-panel-01-c315e2598a44.mp4",
          "sourceCrop": "source-panels/page-012-panel-01.png",
          "sourceCropSha256": "5b5ebab9ac13d62b835bec1d9df07335a75287f60bfea972b3a7c170d8cce031",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 240,
            "fps": 60.0,
            "fpsRational": "60/1",
            "duration": 4.0,
            "sha256": "c315e2598a440f75e8d515f267584a5d4ecf89150b6a07f77330716cd1ff4d2a",
            "sizeBytes": 4988923,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-012-panel-01-a899f8641848.png",
            "width": 1600,
            "height": 2000,
            "sha256": "a899f864184896608c4a63482ff0ac764506ac6f5812c5d9bed7c8642e332f1c",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 50,
              "y": 400,
              "width": 1500,
              "height": 1350
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "Wholeactual1081x1350video at259,400 between originalnarrationblocks; whitebackground, nooriginalactorunderlay. Exactoriginalcaption/framepositions."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa",
              "mediaSha256": "c315e2598a440f75e8d515f267584a5d4ecf89150b6a07f77330716cd1ff4d2a",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 240,
                "fps": 60.0,
                "fpsRational": "60/1",
                "duration": 4.0,
                "sha256": "c315e2598a440f75e8d515f267584a5d4ecf89150b6a07f77330716cd1ff4d2a",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 4988923
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-012-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa",
              "mediaSha256": "c315e2598a440f75e8d515f267584a5d4ecf89150b6a07f77330716cd1ff4d2a",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-012-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa",
              "mediaSha256": "c315e2598a440f75e8d515f267584a5d4ecf89150b6a07f77330716cd1ff4d2a",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1081,
                  1350
                ],
                "nativeFitPosition": [
                  259,
                  400
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-012-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa",
              "mediaSha256": "c315e2598a440f75e8d515f267584a5d4ecf89150b6a07f77330716cd1ff4d2a",
              "allActualFramesReviewed": true,
              "frameCount": 240,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Wholevideo contained1350high between unchangedsource top/bottomcaptionblocks; originaltypography/frame RGBexact nofacemasking.",
              "evidence": [
                "qa/public-acceptance/page-012-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa",
              "mediaSha256": "c315e2598a440f75e8d515f267584a5d4ecf89150b6a07f77330716cd1ff4d2a",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-012-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-013",
      "page": 12,
      "sourcePage": 13,
      "source": "pages/page-013.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb",
      "bytes": 148221,
      "panelSources": [
        {
          "id": "page-013-panel-01",
          "title": "第12页 · 第01格完整原画",
          "source": "source-panels/page-013-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb",
          "cropSha256": "843067a6079b5728f38a1ff2d8678b26c278c6981c27a69cf2c7b2240711f761",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-013-panel-01",
          "title": "第12页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-013-panel-01-eb1af69b0b39.mp4",
          "sourceCrop": "source-panels/page-013-panel-01.png",
          "sourceCropSha256": "843067a6079b5728f38a1ff2d8678b26c278c6981c27a69cf2c7b2240711f761",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 180,
            "fps": 45.0,
            "fpsRational": "45/1",
            "duration": 4.0,
            "sha256": "eb1af69b0b39bedf79db1e9adf201546f61f84d631a7047c26624022cfb279c2",
            "sizeBytes": 3979477,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-013-panel-01-5efc09325642.png",
            "width": 1600,
            "height": 2000,
            "sha256": "5efc093256420ec399859ff80ce7efaf0ca8074c9d6d8f08897d5decd5cc3bf2",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb",
              "mediaSha256": "eb1af69b0b39bedf79db1e9adf201546f61f84d631a7047c26624022cfb279c2",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 180,
                "fps": 45,
                "duration": 4,
                "sha256": "eb1af69b0b39bedf79db1e9adf201546f61f84d631a7047c26624022cfb279c2",
                "audio": false,
                "sizeBytes": 3979477
              },
              "orderedRawFrameCorrespondence": true,
              "lossyReencoding": true,
              "evidence": [
                "qa/public-acceptance/page-013-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb",
              "mediaSha256": "eb1af69b0b39bedf79db1e9adf201546f61f84d631a7047c26624022cfb279c2",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "minorNativeEdgeCropDisclosed": true,
              "evidence": [
                "qa/public-acceptance/page-013-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb",
              "mediaSha256": "eb1af69b0b39bedf79db1e9adf201546f61f84d631a7047c26624022cfb279c2",
              "entireVideoContained": true,
              "originalBounds": [
                0,
                0,
                1600,
                2000
              ],
              "noLayoutCrop": true,
              "nativeGenerationEdgeCropDisclosed": true,
              "evidence": [
                "qa/public-acceptance/page-013-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb",
              "mediaSha256": "eb1af69b0b39bedf79db1e9adf201546f61f84d631a7047c26624022cfb279c2",
              "allActualFramesReviewed": true,
              "frameCount": 180,
              "opaqueRGBMismatch": 0,
              "diegeticIcingNeverPastedAtFixedXY": true,
              "evidence": [
                "qa/public-acceptance/page-013-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb",
              "mediaSha256": "eb1af69b0b39bedf79db1e9adf201546f61f84d631a7047c26624022cfb279c2",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-013-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-014",
      "page": 13,
      "sourcePage": 14,
      "source": "pages/page-014.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030",
      "bytes": 178308,
      "panelSources": [
        {
          "id": "page-014-panel-01",
          "title": "第13页 · 第01格完整原画",
          "source": "source-panels/page-014-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030",
          "cropSha256": "65ec67c2878306ea02df6b4e2f443c70c7a1aa823df00507f3b1b5bc92059d78",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-014-panel-01",
          "title": "第13页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-014-panel-01-sharedpairs-ff8c4fba139f.mp4",
          "sourceCrop": "source-panels/page-014-panel-01.png",
          "sourceCropSha256": "65ec67c2878306ea02df6b4e2f443c70c7a1aa823df00507f3b1b5bc92059d78",
          "method": "chatgpt-four-directions-wan3-three-shared-camera-pairs-edited-return-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 121,
            "fps": 30.25,
            "fpsRational": "121/4",
            "duration": 4.0,
            "sha256": "ff8c4fba139f77aa0562041d9e5b02ff7c6e08561bade192a07e1f584987e562",
            "sizeBytes": 1591737,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-014-panel-01-sharedpairs-e08800b3bfaa.png",
            "width": 1600,
            "height": 2000,
            "sha256": "e08800b3bfaa57d628b003f89d49b688c53bb22c0baf3d7c3dcd17e6e1ab1f0b",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030"
          },
          "disclosedQualityLimitations": [
            "Shared cream rooms/floors and the3-window first-interaction layout are constrained inferred staging; original source014 has editorial white/yellow reaction illustrations. Initial and reset display the complete original source page.",
            "Four directions are approximate shared-camera views with changing mutual occlusion/depth, not calibrated orthogonal3D reconstruction or constant-speed orbit.",
            "Gasp/stomp retain every native000..119. Cry fused/transparent native083 is excluded; its timeline slot uses one explicit real clean082 hold. The359 different selected native frame indices are retained, not359 distinct angles. Each task sole endpoint native000 is composited as frame120;121 frames at121/4fps produce exact4s.119→120 is an explicit hard angle return, not a generated closing arc or uninterrupted360.",
            "Minor outline/expression/teardrop variation and stomp native040 brief soft pink occlusion edge remain; no persistent duplicate actor/box or changed action is observed in the selected sequence.",
            "Wan3 was requested at720P; service actual source videos are1108×832. Default officialCLI download reported watermark404; these files support local QA, compliant processed export remains unverified."
          ],
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 0,
              "y": 0,
              "width": 1600,
              "height": 2000
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "Three complete independent paired moments, each genuinely generated with two actors and a single shared camera/room. Full uncut videos occupy upper-left/middle-right/lower-left editorial windows. Original typography/frame stays in source coordinates. Generated cream floor/room and this first-interaction layout are inferred editorial staging; original source uses isolated white/yellow emphasis. No old actor/static physical room underlay."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030",
              "mediaSha256": "ff8c4fba139f77aa0562041d9e5b02ff7c6e08561bade192a07e1f584987e562",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 121,
                "fps": 30.25,
                "fpsRational": "121/4",
                "duration": 4.0,
                "sha256": "ff8c4fba139f77aa0562041d9e5b02ff7c6e08561bade192a07e1f584987e562",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 1591737
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-014-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030",
              "mediaSha256": "ff8c4fba139f77aa0562041d9e5b02ff7c6e08561bade192a07e1f584987e562",
              "closedOrbit": false,
              "spatialPresentation": "edited-four-direction-return",
              "approximateFourDirectionCoverageVerified": true,
              "actualNative000ReturnVerified": true,
              "continuousPhysical360Claim": false,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "cryExcludedNativeIndices": [
                83
              ],
              "cryTechnicalHold": {
                "outputFrame": 83,
                "originalNativeIndex": 82,
                "count": 1
              },
              "selectedDifferentNativeInputIndices": 359,
              "distinctAngleCountClaim": false,
              "evidence": [
                "qa/public-acceptance/page-014-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030",
              "mediaSha256": "ff8c4fba139f77aa0562041d9e5b02ff7c6e08561bade192a07e1f584987e562",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "sourcePageSha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030",
                "subsceneRectangles": [
                  {
                    "id": "gasp",
                    "artworkRect": {
                      "x": 55,
                      "y": 215,
                      "width": 680,
                      "height": 510
                    }
                  },
                  {
                    "id": "stomp",
                    "artworkRect": {
                      "x": 800,
                      "y": 655,
                      "width": 735,
                      "height": 552
                    }
                  },
                  {
                    "id": "cry",
                    "artworkRect": {
                      "x": 55,
                      "y": 1200,
                      "width": 735,
                      "height": 552
                    }
                  }
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-014-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030",
              "mediaSha256": "ff8c4fba139f77aa0562041d9e5b02ff7c6e08561bade192a07e1f584987e562",
              "allActualFramesReviewed": true,
              "frameCount": 121,
              "opaqueRGBMismatch": 0,
              "sourceProtectedPixelCount": 459203,
              "sourceTypographyPolicy": "Original glyph/frame/caption459203 opaque source RGB pixels retain their original coordinates. Whole3 paired environment windows overlap0 protected pixels; no original static actors in active composite.",
              "evidence": [
                "qa/public-acceptance/page-014-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030",
              "mediaSha256": "ff8c4fba139f77aa0562041d9e5b02ff7c6e08561bade192a07e1f584987e562",
              "actualBrowserDecoded": true,
              "actualNativePointerDrag": true,
              "actualFrameCacheDecoded": true,
              "duration": 4,
              "independentPairedRegions": [
                "gasp",
                "stomp",
                "cry"
              ],
              "releaseCoastingToIdle": true,
              "homeOriginalReset": true,
              "diagnosticLatencyMeanExcluded": true,
              "newTimingPerformanceClaim": false,
              "testedQAPlayerSHA256": "ef13d7ad12bdf860c540a37319f42c39bf0ca8a6e978dcb536932fb6d72bfaa6",
              "evidence": [
                "qa/public-acceptance/page-014-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-015",
      "page": 14,
      "sourcePage": 15,
      "source": "pages/page-015.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
      "bytes": 125456,
      "panelSources": [
        {
          "id": "page-015-panel-01",
          "title": "第14页 · 第01格完整原画",
          "source": "source-panels/page-015-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
          "cropSha256": "9f77af60c5da6608de9e4893287a5eb6876d6631779d78d798597b912bf92df1",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-015-panel-01",
          "title": "第14页 · 完整画格环绕",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-015-panel-01-7b0a43fd624e.mp4",
          "method": "lora",
          "actualMedia": {
            "width": 768,
            "height": 960,
            "frameCount": 124,
            "fps": 31.0,
            "fpsRational": "31/1",
            "duration": 4.0,
            "sha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
            "sizeBytes": 1172290,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-015-panel-01-3e1bf37d7c20.png",
            "width": 1600,
            "height": 2000,
            "sha256": "3e1bf37d7c20fb0618db360ff3bb31821e5fda93a87d7fb7159cef220965c9f0",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1"
          },
          "disclosedQualityLimitations": [
            "Light native-pixel jagged/dark fragments remain at some body outlines, readable and independently accepted as minor cosmetic quality.",
            "Final H264420 colour is a visual approximation and not pixel-identical actor RGB.",
            "Flat-source body orbit does not establish environmental parallax."
          ],
          "sourceCrop": "source-panels/page-015-panel-01.png",
          "sourceCropSha256": "9f77af60c5da6608de9e4893287a5eb6876d6631779d78d798597b912bf92df1",
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 768,
              "height": 960
            }
          },
          "weight": {
            "sha256": "e9275b2f456f6bd004c9cb3cf5c636cad87217c5bc96e6a5b5533e917de121da"
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "scope": "Actual4s124@31h264 with SHA-bound original packet and decodedRGB frame order identity",
              "actualMedia": {
                "width": 768,
                "height": 960,
                "frameCount": 124,
                "fps": 31.0,
                "fpsRational": "31/1",
                "duration": 4.0,
                "sha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
                "sizeBytes": 1172290,
                "codec": "h264",
                "audio": false
              },
              "evidence": [
                "qa/public-acceptance/page-015-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "closedOrbit": true,
              "scope": "Transferred explicit original actual all124 body/pose/wardrobe/props review with observed front-side-back-opposite-front closure",
              "observedClosure": "Front, side, back, opposite side and return remain coherent; natural occlusion is preserved without new props or duplicated front/back body.",
              "physicallyCalibratedYawClaim": false,
              "environmentParallax": "not applicable source flat colour/rain illustration",
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-015-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "bounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "noSourceCropOrPadding": true,
              "entireVideoContained": true,
              "scope": "Complete native1600x2000 source plus full768x960 video mapping; source and overlay unchanged",
              "evidence": [
                "qa/public-acceptance/page-015-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "overlaySha256": "3e1bf37d7c20fb0618db360ff3bb31821e5fda93a87d7fb7159cef220965c9f0",
              "allActualFramesReviewed": true,
              "all124ActualFramesReviewed": true,
              "reviewMode": "Transferred original actual all124 own-page publication review through exact decodedRGB/packet order identity",
              "nativeProtectedSourceRGBMismatch": 0,
              "originalTextFixedAtSourcePositions": true,
              "dynamicPublicationGhostObserved": false,
              "textCollisionWithFaceHandsClothingObserved": false,
              "geometricDiagnosticIsSemanticActorMask": false,
              "evidence": [
                "qa/public-acceptance/page-015-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1",
              "mediaSha256": "7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7",
              "scope": "Root actual current4s playback, paused reset, settled slider2s50%, desktop and390width contain/nooverflow; unlogged additional actions explicitly excluded",
              "duration": 4,
              "readyState": 4,
              "actualBrowserDecoded": true,
              "playObserved": true,
              "pausedResetObserved": true,
              "settledSliderTime": 2,
              "settledProgress": 50,
              "narrowViewport": {
                "width": 390,
                "height": 844,
                "horizontalOverflow": false
              },
              "standalonePauseButtonLogged": false,
              "fourSecondPointerDragLogged": false,
              "fourSecondNaturalEndLogged": false,
              "fourSecondSourceCompareLogged": false,
              "oldRuntimeInherited": false,
              "page31InitialAsyncPendingPreserved": false,
              "evidence": [
                "qa/public-acceptance/page-015-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-016",
      "page": 15,
      "sourcePage": 16,
      "source": "pages/page-016.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3",
      "bytes": 160045,
      "panelSources": [
        {
          "id": "page-016-panel-01",
          "title": "第15页 · 第01格完整原画",
          "source": "source-panels/page-016-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3",
          "cropSha256": "275780dd09530bc7265e434fdc67396c7818094fd90e5d475db89e100c767199",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-016-panel-01",
          "title": "第15页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-016-panel-01-3da7e7290682.mp4",
          "sourceCrop": "source-panels/page-016-panel-01.png",
          "sourceCropSha256": "275780dd09530bc7265e434fdc67396c7818094fd90e5d475db89e100c767199",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 120,
            "fps": 30.0,
            "fpsRational": "30/1",
            "duration": 4.0,
            "sha256": "3da7e729068283603954b3b236c0d20970c465090666d2d899d82a72ccb7206f",
            "sizeBytes": 3975974,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-016-panel-01-4cf4442b563b.png",
            "width": 1600,
            "height": 2000,
            "sha256": "4cf4442b563b141f5d5c4985bd3cb4cd5fe901fc8b02b33b62c4eba9d1c3e0e8",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 50,
              "y": 250,
              "width": 1500,
              "height": 1700
            },
            "backgroundColor": [
              108,
              206,
              245
            ],
            "layoutMeaning": "Complete actual scene contained as1361x1700 at(119, 250), below exact original quote. Pure matte contains no original actors; physical bucket lettering moves with video."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3",
              "mediaSha256": "3da7e729068283603954b3b236c0d20970c465090666d2d899d82a72ccb7206f",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 120,
                "fps": 30.0,
                "fpsRational": "30/1",
                "duration": 4.0,
                "sha256": "3da7e729068283603954b3b236c0d20970c465090666d2d899d82a72ccb7206f",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 3975974
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-016-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3",
              "mediaSha256": "3da7e729068283603954b3b236c0d20970c465090666d2d899d82a72ccb7206f",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-016-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3",
              "mediaSha256": "3da7e729068283603954b3b236c0d20970c465090666d2d899d82a72ccb7206f",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1361,
                  1700
                ],
                "nativeFitPosition": [
                  119,
                  250
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-016-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3",
              "mediaSha256": "3da7e729068283603954b3b236c0d20970c465090666d2d899d82a72ccb7206f",
              "allActualFramesReviewed": true,
              "frameCount": 120,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Originaltopquote andpageframe exactRGB0mismatch; fullactualscene1361x1700 underquote withpurebluematting andnooriginalactorunderlay. Physicalbucketlabelorientationerror disclosed.",
              "evidence": [
                "qa/public-acceptance/page-016-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3",
              "mediaSha256": "3da7e729068283603954b3b236c0d20970c465090666d2d899d82a72ccb7206f",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-016-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-017",
      "page": 16,
      "sourcePage": 17,
      "source": "pages/page-017.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11",
      "bytes": 174169,
      "panelSources": [
        {
          "id": "page-017-panel-01",
          "title": "第16页 · 第01格完整原画",
          "source": "source-panels/page-017-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11",
          "cropSha256": "4bbab627c23999f9d2529100ba8e5010dfd3201bd57f8c621dd841d9aa9b1a56",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-017-panel-01",
          "title": "第16页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-017-panel-01-d9349324d028.mp4",
          "sourceCrop": "source-panels/page-017-panel-01.png",
          "sourceCropSha256": "4bbab627c23999f9d2529100ba8e5010dfd3201bd57f8c621dd841d9aa9b1a56",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 96,
            "fps": 24.0,
            "fpsRational": "24/1",
            "duration": 4.0,
            "sha256": "d9349324d028c9c1f87523fa1f0d749286eed83c0b9f4f1c2482e82a1125e502",
            "sizeBytes": 3960505,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-017-panel-01-da7578702735.png",
            "width": 1600,
            "height": 2000,
            "sha256": "da757870273592033e5c4fdfbbfa1f4a138e0a17e9f7d2f46fd44a83640aada3",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 50,
              "y": 550,
              "width": 1500,
              "height": 1400
            },
            "backgroundColor": [
              108,
              206,
              245
            ],
            "layoutMeaning": "Complete actual scene contained as1121x1400 at(239, 550), below original TADA. Pure blue matte contains no original actor underlay."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11",
              "mediaSha256": "d9349324d028c9c1f87523fa1f0d749286eed83c0b9f4f1c2482e82a1125e502",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 96,
                "fps": 24.0,
                "fpsRational": "24/1",
                "duration": 4.0,
                "sha256": "d9349324d028c9c1f87523fa1f0d749286eed83c0b9f4f1c2482e82a1125e502",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 3960505
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-017-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11",
              "mediaSha256": "d9349324d028c9c1f87523fa1f0d749286eed83c0b9f4f1c2482e82a1125e502",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-017-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11",
              "mediaSha256": "d9349324d028c9c1f87523fa1f0d749286eed83c0b9f4f1c2482e82a1125e502",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1121,
                  1400
                ],
                "nativeFitPosition": [
                  239,
                  550
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-017-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11",
              "mediaSha256": "d9349324d028c9c1f87523fa1f0d749286eed83c0b9f4f1c2482e82a1125e502",
              "allActualFramesReviewed": true,
              "frameCount": 96,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "OriginalTADA andpageframe exactRGB0mismatch throughout. Fullvideo inset below originalTADA, no staticoriginalactorunderlay. Physicalcakeicing generatedapproximation disclosed.",
              "evidence": [
                "qa/public-acceptance/page-017-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11",
              "mediaSha256": "d9349324d028c9c1f87523fa1f0d749286eed83c0b9f4f1c2482e82a1125e502",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-017-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-018",
      "page": 17,
      "sourcePage": 18,
      "source": "pages/page-018.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87",
      "bytes": 222929,
      "panelSources": [
        {
          "id": "page-018-panel-01",
          "title": "第17页 · 第01格完整原画",
          "source": "source-panels/page-018-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87",
          "cropSha256": "1cf4a90aa80d241bd8c97a6cac21b0b17f48fb1839189a0b4cabe1a1801278c9",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-018-panel-01",
          "title": "第17页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-018-panel-01-ce27d022cf15.mp4",
          "sourceCrop": "source-panels/page-018-panel-01.png",
          "sourceCropSha256": "1cf4a90aa80d241bd8c97a6cac21b0b17f48fb1839189a0b4cabe1a1801278c9",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 180,
            "fps": 45.0,
            "fpsRational": "45/1",
            "duration": 4.0,
            "sha256": "ce27d022cf1538f37314449a5db87fec92d6db43079e9b6d047784f836369010",
            "sizeBytes": 5580336,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-018-panel-01-a1a199f82128.png",
            "width": 1600,
            "height": 2000,
            "sha256": "a1a199f821288079214025a234025437e7911f52ecfb4bbc5c1b35e21fabf819",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 50,
              "y": 330,
              "width": 1500,
              "height": 1600
            },
            "backgroundColor": [
              194,
              237,
              248
            ],
            "layoutMeaning": "Whole actual video is reduced to1281x1600 at159,330 inside original1600x2000 source panel. Top narration remains fully above video. Six exact source caption-backdrop tiles keep words legible; lower quote cards can cover non-character grass/tree/background details, never observed actors. Pure pale-cyan matte has no static actors."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87",
              "mediaSha256": "ce27d022cf1538f37314449a5db87fec92d6db43079e9b6d047784f836369010",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 180,
                "fps": 45.0,
                "fpsRational": "45/1",
                "duration": 4.0,
                "sha256": "ce27d022cf1538f37314449a5db87fec92d6db43079e9b6d047784f836369010",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 5580336
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-018-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87",
              "mediaSha256": "ce27d022cf1538f37314449a5db87fec92d6db43079e9b6d047784f836369010",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-018-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87",
              "mediaSha256": "ce27d022cf1538f37314449a5db87fec92d6db43079e9b6d047784f836369010",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "nativeFitPosition": [
                  159,
                  330
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-018-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87",
              "mediaSha256": "ce27d022cf1538f37314449a5db87fec92d6db43079e9b6d047784f836369010",
              "allActualFramesReviewed": true,
              "frameCount": 180,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original captions retained with exact source backdrop tiles above the contained whole video and at lower left; no observed actor-caption collision.",
              "evidence": [
                "qa/public-acceptance/page-018-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87",
              "mediaSha256": "ce27d022cf1538f37314449a5db87fec92d6db43079e9b6d047784f836369010",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-018-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-019",
      "page": 18,
      "sourcePage": 19,
      "source": "pages/page-019.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
      "bytes": 211305,
      "panelSources": [
        {
          "id": "page-019-panel-01",
          "title": "第18页 · 第01格完整原画",
          "source": "source-panels/page-019-panel-01.png",
          "width": 1600,
          "height": 760,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 760
          },
          "quality": "source-verified",
          "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
          "cropSha256": "fd765ed17bd8d4a8e5d6779b563aafb80d815fb4e9598695aafd1c8d566176ac",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        },
        {
          "id": "page-019-panel-02",
          "title": "第18页 · 第02格完整原画",
          "source": "source-panels/page-019-panel-02.png",
          "width": 1600,
          "height": 1240,
          "bounds": {
            "x": 0,
            "y": 760,
            "width": 1600,
            "height": 1240
          },
          "quality": "source-verified",
          "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
          "cropSha256": "b97fe89a09c08b1538a116fe60873686a0d814b7942db409106b4951fe18b201",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-019-panel-01",
          "title": "第18页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 760
          },
          "video": "videos/page-019-panel-01-72e21397b801.mp4",
          "sourceCrop": "source-panels/page-019-panel-01.png",
          "sourceCropSha256": "fd765ed17bd8d4a8e5d6779b563aafb80d815fb4e9598695aafd1c8d566176ac",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 1440,
            "height": 684,
            "frameCount": 150,
            "fps": 37.5,
            "fpsRational": "75/2",
            "duration": 4.0,
            "sha256": "72e21397b801032961f52a11b02ae6a72fc9b57916bb09525e26c6227a6d3675",
            "sizeBytes": 1467312,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-019-panel-01-8c26d92fe234.png",
            "width": 1600,
            "height": 760,
            "sha256": "8c26d92fe23455d332e0e076ec207bcae4216d396883dfbc2e8c0ac89813db7e",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 1440,
              "height": 684
            },
            "artworkRect": {
              "x": 0,
              "y": 0,
              "width": 1600,
              "height": 760
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "Six complete independently inferred rounded cloud volumes rotate in original approximate editorial positions and overlap hierarchy. Natural cloud contours, original heading and RUMBLE source pixels; pure white page field, no static original cloud underlay or fixed black cloud mask. Not a rigid physical storm scene."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "72e21397b801032961f52a11b02ae6a72fc9b57916bb09525e26c6227a6d3675",
              "actualMedia": {
                "width": 1440,
                "height": 684,
                "frameCount": 150,
                "fps": 37.5,
                "fpsRational": "75/2",
                "duration": 4.0,
                "sha256": "72e21397b801032961f52a11b02ae6a72fc9b57916bb09525e26c6227a6d3675",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 1467312
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-019-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "72e21397b801032961f52a11b02ae6a72fc9b57916bb09525e26c6227a6d3675",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-019-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "72e21397b801032961f52a11b02ae6a72fc9b57916bb09525e26c6227a6d3675",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 760
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  760
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-019-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "72e21397b801032961f52a11b02ae6a72fc9b57916bb09525e26c6227a6d3675",
              "allActualFramesReviewed": true,
              "frameCount": 150,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Exact original heading, both RUMBLE and source exterior/frame at source positions, sourceRGB0 mismatch across all150. No source-cloud fixed contour mask or original-cloud underlay.",
              "evidence": [
                "qa/public-acceptance/page-019-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "72e21397b801032961f52a11b02ae6a72fc9b57916bb09525e26c6227a6d3675",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-019-panel-01-runtime.json"
              ]
            }
          }
        },
        {
          "id": "page-019-panel-02",
          "title": "第18页 · 第02格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 760,
            "width": 1600,
            "height": 1240
          },
          "video": "videos/page-019-panel-02-a6af52d0ef6a.mp4",
          "sourceCrop": "source-panels/page-019-panel-02.png",
          "sourceCropSha256": "b97fe89a09c08b1538a116fe60873686a0d814b7942db409106b4951fe18b201",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 1090,
            "height": 844,
            "frameCount": 145,
            "fps": 36.25,
            "fpsRational": "145/4",
            "duration": 4.0,
            "sha256": "a6af52d0ef6ac3744e80ec8b014065863239da5a7190dedf1da9fff1f5f00cf7",
            "sizeBytes": 4589823,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-019-panel-02-0e576d5cdec9.png",
            "width": 1600,
            "height": 1240,
            "sha256": "0e576d5cdec94b33e5eafc3ed1bb89ae36f6f519e910dc8382e0fdc2a486e440",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 1090,
              "height": 844
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "a6af52d0ef6ac3744e80ec8b014065863239da5a7190dedf1da9fff1f5f00cf7",
              "actualMedia": {
                "width": 1090,
                "height": 844,
                "frameCount": 145,
                "fps": 36.25,
                "fpsRational": "145/4",
                "duration": 4.0,
                "sha256": "a6af52d0ef6ac3744e80ec8b014065863239da5a7190dedf1da9fff1f5f00cf7",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 4589823
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-019-panel-02-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "a6af52d0ef6ac3744e80ec8b014065863239da5a7190dedf1da9fff1f5f00cf7",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-019-panel-02-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "a6af52d0ef6ac3744e80ec8b014065863239da5a7190dedf1da9fff1f5f00cf7",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 760,
                "width": 1600,
                "height": 1240
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  1239
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-019-panel-02-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "a6af52d0ef6ac3744e80ec8b014065863239da5a7190dedf1da9fff1f5f00cf7",
              "allActualFramesReviewed": true,
              "frameCount": 145,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original caption/frame sourceRGBA remains unchanged at original panel coordinates, all145 sourceRGB mismatch0. Original damaged black prop glyphs perspective projected and naturally hidden when cloth turns away or cake out of frame. No new typesetting.",
              "evidence": [
                "qa/public-acceptance/page-019-panel-02-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63",
              "mediaSha256": "a6af52d0ef6ac3744e80ec8b014065863239da5a7190dedf1da9fff1f5f00cf7",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-019-panel-02-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-020",
      "page": 19,
      "sourcePage": 20,
      "source": "pages/page-020.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
      "bytes": 168046,
      "panelSources": [
        {
          "id": "page-020-panel-01",
          "title": "第19页 · 第01格完整原画",
          "source": "source-panels/page-020-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
          "cropSha256": "cecf5fddda96489b28abaebece0701a1ca949e78818496022d4217ab68486cb3",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-020-panel-01",
          "title": "第19页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-020-panel-01-db3168ad111e.mp4",
          "sourceCrop": "source-panels/page-020-panel-01.png",
          "sourceCropSha256": "cecf5fddda96489b28abaebece0701a1ca949e78818496022d4217ab68486cb3",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 240,
            "fps": 60.0,
            "fpsRational": "60/1",
            "duration": 4.0,
            "sha256": "db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192",
            "sizeBytes": 1631337,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-020-panel-01-a0352084bbca.png",
            "width": 1600,
            "height": 2000,
            "sha256": "a0352084bbca52ffefee522eb3c3d8ef7d1bb6ec2e82f4e44195a64940d4beda",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
              "mediaSha256": "db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 240,
                "fps": 60.0,
                "fpsRational": "60/1",
                "duration": 4.0,
                "sha256": "db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 1631337
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-020-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
              "mediaSha256": "db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-020-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
              "mediaSha256": "db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  1999
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-020-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
              "mediaSha256": "db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192",
              "allActualFramesReviewed": true,
              "frameCount": 240,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Exactunchangedoriginalcaption/frameRGBA RGB0mismatch across240actualframes. Statictealrainpatch/emphasismarks areeditorialbackground; physicalactorwhiteeyes/mouth/blue tears/blackcontours retained.",
              "evidence": [
                "qa/public-acceptance/page-020-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
              "mediaSha256": "db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-020-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-021",
      "page": 20,
      "sourcePage": 21,
      "source": "pages/page-021.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7",
      "bytes": 163220,
      "panelSources": [
        {
          "id": "page-021-panel-01",
          "title": "第20页 · 第01格完整原画",
          "source": "source-panels/page-021-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7",
          "cropSha256": "943cf8b5b1ba36d087847005c6009c3b7517a2d2b67c54309e67306e8dfef4b6",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-021-panel-01",
          "title": "第20页 · 完整灰底雨纹画格环绕",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-021-panel-01-6aadb1ca8171.mp4",
          "method": "lora",
          "actualMedia": {
            "width": 768,
            "height": 960,
            "frameCount": 124,
            "fps": 31.0,
            "fpsRational": "31/1",
            "duration": 4.0,
            "sha256": "6aadb1ca8171915c2eb80c177b6d5dc43e759093955c82fe472969ee6c7a1e5d",
            "sizeBytes": 4714858,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-021-panel-01-cc6415f0a583.png",
            "width": 1600,
            "height": 2000,
            "sha256": "cc6415f0a583925dbda2612262b41384f05d85e7675c04ce4a13efa98f77368b",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7"
          },
          "disclosedQualityLimitations": [
            "雨纹在各视角的灰度和密度有变化，第71–79帧背景尤其淡；跨人物雨纹保留，严格逐根雨线冻结仅partial。",
            "耳、手臂、衣裤与脚边有少量1至数像素毛刺/黑色碎边；第80–86帧侧眼揭露存在细小绿色边缘，未宣称完美。",
            "背面花衣图案及后裤袋是模型对正面原画的推断，无法作为原作者已绘背面的证据。",
            "最终H264420是有损编码，视频人物RGB不称逐像素exact；原字框外白406143个保护像素在native出版合成中逐帧exact。",
            "显示模型推断的环绕视角进度，未做物理角度校准；本页灰色雨纹环境无可测方位地标。"
          ],
          "sourceCrop": "source-panels/page-021-panel-01.png",
          "sourceCropSha256": "943cf8b5b1ba36d087847005c6009c3b7517a2d2b67c54309e67306e8dfef4b6",
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 768,
              "height": 960
            }
          },
          "weight": {
            "sha256": "e9275b2f456f6bd004c9cb3cf5c636cad87217c5bc96e6a5b5533e917de121da"
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7",
              "mediaSha256": "6aadb1ca8171915c2eb80c177b6d5dc43e759093955c82fe472969ee6c7a1e5d",
              "scope": "Actual4s124@31h264 with SHA-bound original packet and decodedRGB frame order identity",
              "actualMedia": {
                "width": 768,
                "height": 960,
                "frameCount": 124,
                "fps": 31.0,
                "fpsRational": "31/1",
                "duration": 4.0,
                "sha256": "6aadb1ca8171915c2eb80c177b6d5dc43e759093955c82fe472969ee6c7a1e5d",
                "sizeBytes": 4714858,
                "codec": "h264",
                "audio": false
              },
              "evidence": [
                "qa/public-acceptance/page-021-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7",
              "mediaSha256": "6aadb1ca8171915c2eb80c177b6d5dc43e759093955c82fe472969ee6c7a1e5d",
              "closedOrbit": true,
              "scope": "Transferred explicit original actual all124 body/pose/wardrobe/props review with observed front-side-back-opposite-front closure",
              "observedClosure": "Final sequence visibly passes front, side, back, opposite side and front. Side/rear eye and hand occlusion are natural; no body disappears.",
              "physicallyCalibratedYawClaim": false,
              "environmentParallax": "not applicable source flat colour/rain illustration",
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-021-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7",
              "mediaSha256": "6aadb1ca8171915c2eb80c177b6d5dc43e759093955c82fe472969ee6c7a1e5d",
              "bounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "noSourceCropOrPadding": true,
              "entireVideoContained": true,
              "scope": "Complete native1600x2000 source plus full768x960 video mapping; source and overlay unchanged",
              "evidence": [
                "qa/public-acceptance/page-021-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7",
              "mediaSha256": "6aadb1ca8171915c2eb80c177b6d5dc43e759093955c82fe472969ee6c7a1e5d",
              "overlaySha256": "cc6415f0a583925dbda2612262b41384f05d85e7675c04ce4a13efa98f77368b",
              "allActualFramesReviewed": true,
              "all124ActualFramesReviewed": true,
              "reviewMode": "Transferred original actual all124 own-page publication review through exact decodedRGB/packet order identity",
              "nativeProtectedSourceRGBMismatch": 0,
              "originalTextFixedAtSourcePositions": true,
              "dynamicPublicationGhostObserved": false,
              "textCollisionWithFaceHandsClothingObserved": false,
              "geometricDiagnosticIsSemanticActorMask": false,
              "evidence": [
                "qa/public-acceptance/page-021-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7",
              "mediaSha256": "6aadb1ca8171915c2eb80c177b6d5dc43e759093955c82fe472969ee6c7a1e5d",
              "scope": "Root actual current4s playback, paused reset, settled slider2s50%, desktop and390width contain/nooverflow; unlogged additional actions explicitly excluded",
              "duration": 4,
              "readyState": 4,
              "actualBrowserDecoded": true,
              "playObserved": true,
              "pausedResetObserved": true,
              "settledSliderTime": 2,
              "settledProgress": 50,
              "narrowViewport": {
                "width": 390,
                "height": 844,
                "horizontalOverflow": false
              },
              "standalonePauseButtonLogged": false,
              "fourSecondPointerDragLogged": false,
              "fourSecondNaturalEndLogged": false,
              "fourSecondSourceCompareLogged": false,
              "oldRuntimeInherited": false,
              "page31InitialAsyncPendingPreserved": false,
              "evidence": [
                "qa/public-acceptance/page-021-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-022",
      "page": 21,
      "sourcePage": 22,
      "source": "pages/page-022.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64",
      "bytes": 161977,
      "panelSources": [
        {
          "id": "page-022-panel-01",
          "title": "第21页 · 第01格完整原画",
          "source": "source-panels/page-022-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64",
          "cropSha256": "20a63fb0150689bb1cd1b113439e1ade0b97968c5d998f6840184fa1ee6d4308",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-022-panel-01",
          "title": "第21页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-022-panel-01-602b0cc5195c.mp4",
          "sourceCrop": "source-panels/page-022-panel-01.png",
          "sourceCropSha256": "20a63fb0150689bb1cd1b113439e1ade0b97968c5d998f6840184fa1ee6d4308",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 180,
            "fps": 45.0,
            "fpsRational": "45/1",
            "duration": 4.0,
            "sha256": "602b0cc5195cf9f3f100167190da398cd30e9431dcd94a6d41042f0162d7da12",
            "sizeBytes": 3659891,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-022-panel-01-0f522a28cd9b.png",
            "width": 1600,
            "height": 2000,
            "sha256": "0f522a28cd9b3c31b77611ac27b2be889c77d7d45ace3802e243fef2e6f038be",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64",
              "mediaSha256": "602b0cc5195cf9f3f100167190da398cd30e9431dcd94a6d41042f0162d7da12",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 180,
                "fps": 45.0,
                "fpsRational": "45/1",
                "duration": 4.0,
                "sha256": "602b0cc5195cf9f3f100167190da398cd30e9431dcd94a6d41042f0162d7da12",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 3659891
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-022-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64",
              "mediaSha256": "602b0cc5195cf9f3f100167190da398cd30e9431dcd94a6d41042f0162d7da12",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-022-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64",
              "mediaSha256": "602b0cc5195cf9f3f100167190da398cd30e9431dcd94a6d41042f0162d7da12",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  1999
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-022-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64",
              "mediaSha256": "602b0cc5195cf9f3f100167190da398cd30e9431dcd94a6d41042f0162d7da12",
              "allActualFramesReviewed": true,
              "frameCount": 180,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original caption and frame remain fixed, readable and exact source RGB; no observed actor intersection.",
              "evidence": [
                "qa/public-acceptance/page-022-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64",
              "mediaSha256": "602b0cc5195cf9f3f100167190da398cd30e9431dcd94a6d41042f0162d7da12",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-022-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-023",
      "page": 22,
      "sourcePage": 23,
      "source": "pages/page-023.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
      "bytes": 204273,
      "panelSources": [
        {
          "id": "page-023-panel-01",
          "title": "第22页 · 第01格完整原画",
          "source": "source-panels/page-023-panel-01.png",
          "width": 1564,
          "height": 1131,
          "bounds": {
            "x": 20,
            "y": 8,
            "width": 1564,
            "height": 1131
          },
          "quality": "source-verified",
          "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
          "cropSha256": "f8208861ff7d2f903a53d34d20f71444b6f208c05b29d6bf2ad738b71a9e0d2d",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        },
        {
          "id": "page-023-panel-02",
          "title": "第22页 · 第02格完整原画",
          "source": "source-panels/page-023-panel-02.png",
          "width": 1600,
          "height": 859,
          "bounds": {
            "x": 0,
            "y": 1141,
            "width": 1600,
            "height": 859
          },
          "quality": "source-verified",
          "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
          "cropSha256": "21ce0d2c0cf0f17ffa93a29fce172d77b7b460087ba9e85481f022d218595b0d",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-023-panel-01",
          "title": "第22页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 20,
            "y": 8,
            "width": 1564,
            "height": 1131
          },
          "video": "videos/page-023-panel-01-6d107e3d373a.mp4",
          "sourceCrop": "source-panels/page-023-panel-01.png",
          "sourceCropSha256": "f8208861ff7d2f903a53d34d20f71444b6f208c05b29d6bf2ad738b71a9e0d2d",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 1128,
            "height": 816,
            "frameCount": 217,
            "fps": 54.25,
            "fpsRational": "217/4",
            "duration": 4.0,
            "sha256": "6d107e3d373acd5acfab857f62c7854ec90c69ce930abe38f68234d196b2652a",
            "sizeBytes": 4604141,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-023-panel-01-19aaf2ad402a.png",
            "width": 1564,
            "height": 1131,
            "sha256": "19aaf2ad402ac013068174d6cf0303b7438824ff66ffc73775cff4c2c189a435",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 1128,
              "height": 816
            },
            "artworkRect": {
              "x": 294,
              "y": 378,
              "width": 975,
              "height": 705
            },
            "backgroundColor": [
              60,
              142,
              180
            ],
            "layoutMeaning": "Whole217-frame video uniformly contained below complete unchanged-size original caption pixel/background block shifted upward by the explicitly recorded integer delta; maximal centered fit below its safe header band with zero overlap against ALL source overlay pixels including frame. No video crop or original actor/furniture underlay."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "6d107e3d373acd5acfab857f62c7854ec90c69ce930abe38f68234d196b2652a",
              "actualMedia": {
                "width": 1128,
                "height": 816,
                "frameCount": 217,
                "fps": 54.25,
                "fpsRational": "217/4",
                "duration": 4.0,
                "sha256": "6d107e3d373acd5acfab857f62c7854ec90c69ce930abe38f68234d196b2652a",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 4604141
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-023-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "6d107e3d373acd5acfab857f62c7854ec90c69ce930abe38f68234d196b2652a",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-023-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "6d107e3d373acd5acfab857f62c7854ec90c69ce930abe38f68234d196b2652a",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 20,
                "y": 8,
                "width": 1564,
                "height": 1131
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  975,
                  705
                ],
                "nativeFitPosition": [
                  294,
                  378
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-023-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "6d107e3d373acd5acfab857f62c7854ec90c69ce930abe38f68234d196b2652a",
              "allActualFramesReviewed": true,
              "frameCount": 217,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original five-line caption and its complete native blue-wall rectangle175540pixels translated upward57, font/RGB unchanged, independent mapping verifier0mismatch. Fixed original frame/exterior retained including small source color fragments. Video rectangle cannot intersect any source overlay pixels, so no extra caption/frame occlusion of characters/lamp.",
              "sourceRGBCoordinateSpace": "disclosed-source-pixel-translation",
              "fixedCoordinateRGBIdentityClaim": false,
              "typographyTranslations": [
                {
                  "sourceRect": {
                    "x": 40,
                    "y": 88,
                    "width": 524,
                    "height": 335
                  },
                  "dx": 0,
                  "dy": -57,
                  "selectedPixelCount": 175540,
                  "meaning": "Entire original five-line black caption and its complete original plain blue-wall background block, source RGB/font unchanged, translated upward only."
                }
              ],
              "evidence": [
                "qa/public-acceptance/page-023-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "6d107e3d373acd5acfab857f62c7854ec90c69ce930abe38f68234d196b2652a",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-023-panel-01-runtime.json"
              ]
            }
          }
        },
        {
          "id": "page-023-panel-02",
          "title": "第22页 · 第02格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 1141,
            "width": 1600,
            "height": 859
          },
          "video": "videos/page-023-panel-02-9ed86aae5d5e.mp4",
          "sourceCrop": "source-panels/page-023-panel-02.png",
          "sourceCropSha256": "21ce0d2c0cf0f17ffa93a29fce172d77b7b460087ba9e85481f022d218595b0d",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 1310,
            "height": 702,
            "frameCount": 180,
            "fps": 45.0,
            "fpsRational": "45/1",
            "duration": 4.0,
            "sha256": "9ed86aae5d5ef7dc07fa0a1618b6a04210c07e0007d99853eedfa572c6c9b729",
            "sizeBytes": 2469105,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-023-panel-02-b2652ce656f6.png",
            "width": 1600,
            "height": 859,
            "sha256": "b2652ce656f63f8880349598a65cacae78224acae9930a1fab9c0018fbebddd5",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 1310,
              "height": 702
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "9ed86aae5d5ef7dc07fa0a1618b6a04210c07e0007d99853eedfa572c6c9b729",
              "actualMedia": {
                "width": 1310,
                "height": 702,
                "frameCount": 180,
                "fps": 45.0,
                "fpsRational": "45/1",
                "duration": 4.0,
                "sha256": "9ed86aae5d5ef7dc07fa0a1618b6a04210c07e0007d99853eedfa572c6c9b729",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 2469105
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-023-panel-02-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "9ed86aae5d5ef7dc07fa0a1618b6a04210c07e0007d99853eedfa572c6c9b729",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-023-panel-02-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "9ed86aae5d5ef7dc07fa0a1618b6a04210c07e0007d99853eedfa572c6c9b729",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 1141,
                "width": 1600,
                "height": 859
              },
              "layout": {
                "mode": "entire-video-contained-no-crop-with-original-caption-background-plates",
                "nativeFitSize": [
                  1600,
                  857
                ],
                "nativeFitPosition": [
                  0,
                  1
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-023-panel-02-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "9ed86aae5d5ef7dc07fa0a1618b6a04210c07e0007d99853eedfa572c6c9b729",
              "allActualFramesReviewed": true,
              "frameCount": 180,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Eight original caption lines and small background plates remain exact source pixels. Plates may cover ear, hair and far outer face edge late in the orbit; eyes, brows, nose and mouth remain visible.",
              "evidence": [
                "qa/public-acceptance/page-023-panel-02-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334",
              "mediaSha256": "9ed86aae5d5ef7dc07fa0a1618b6a04210c07e0007d99853eedfa572c6c9b729",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-023-panel-02-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-024",
      "page": 23,
      "sourcePage": 24,
      "source": "pages/page-024.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00",
      "bytes": 176093,
      "panelSources": [
        {
          "id": "page-024-panel-01",
          "title": "第23页 · 第01格完整原画",
          "source": "source-panels/page-024-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00",
          "cropSha256": "8a166f02da87d9478f2d4e4958c37212471f239b7171ca6c090db0f50b302933",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-024-panel-01",
          "title": "第23页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-024-panel-01-cb514202c847.mp4",
          "sourceCrop": "source-panels/page-024-panel-01.png",
          "sourceCropSha256": "8a166f02da87d9478f2d4e4958c37212471f239b7171ca6c090db0f50b302933",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 164,
            "fps": 41.0,
            "fpsRational": "41/1",
            "duration": 4.0,
            "sha256": "cb514202c8470a45fa8cd369a39a0c7b12d9d12b345e08ede4f9268ee9ef8bd9",
            "sizeBytes": 4112990,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-024-panel-01-315486ed25ef.png",
            "width": 1600,
            "height": 2000,
            "sha256": "315486ed25efa040434c975b8ab9ca01aeda29c90e6256a735db59846d5cb2f0",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00",
              "mediaSha256": "cb514202c8470a45fa8cd369a39a0c7b12d9d12b345e08ede4f9268ee9ef8bd9",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 164,
                "fps": 41.0,
                "fpsRational": "41/1",
                "duration": 4.0,
                "sha256": "cb514202c8470a45fa8cd369a39a0c7b12d9d12b345e08ede4f9268ee9ef8bd9",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 4112990
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-024-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00",
              "mediaSha256": "cb514202c8470a45fa8cd369a39a0c7b12d9d12b345e08ede4f9268ee9ef8bd9",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-024-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00",
              "mediaSha256": "cb514202c8470a45fa8cd369a39a0c7b12d9d12b345e08ede4f9268ee9ef8bd9",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  1999
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-024-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00",
              "mediaSha256": "cb514202c8470a45fa8cd369a39a0c7b12d9d12b345e08ede4f9268ee9ef8bd9",
              "allActualFramesReviewed": true,
              "frameCount": 164,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original caption/frame exact source RGB; caption overlaps rear hair/ear edge around68-84, without covering eyes.",
              "evidence": [
                "qa/public-acceptance/page-024-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00",
              "mediaSha256": "cb514202c8470a45fa8cd369a39a0c7b12d9d12b345e08ede4f9268ee9ef8bd9",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-024-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-025",
      "page": 24,
      "sourcePage": 25,
      "source": "pages/page-025.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152",
      "bytes": 231436,
      "panelSources": [
        {
          "id": "page-025-panel-01",
          "title": "第24页 · 第01格完整原画",
          "source": "source-panels/page-025-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152",
          "cropSha256": "9241003cd3bc7cbc0536a1c9fd1150cfcee7811dbfcf20c968b30fb7eb6c6553",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-025-panel-01",
          "title": "第24页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-025-panel-01-5ecaab4752bf.mp4",
          "sourceCrop": "source-panels/page-025-panel-01.png",
          "sourceCropSha256": "9241003cd3bc7cbc0536a1c9fd1150cfcee7811dbfcf20c968b30fb7eb6c6553",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 196,
            "fps": 49.0,
            "fpsRational": "49/1",
            "duration": 4.0,
            "sha256": "5ecaab4752bfa2ba1147dab68bc68f93d6de3431ca6eb0765826726ecce74c13",
            "sizeBytes": 6720204,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-025-panel-01-753fbb873866.png",
            "width": 1600,
            "height": 2000,
            "sha256": "753fbb87386691f0c62583eb7eed85b3602422d60c022b539e1da892b39d67bd",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 45,
              "y": 430,
              "width": 1510,
              "height": 1520
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "Wholeactual1217x1520scene at191,430. OriginalSamdialogue45070pixels translated250,-755 to upperright alongside unchangedupperleftnarration; originalpanelbounds/frame/readorder retained, no actorunderlay."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152",
              "mediaSha256": "5ecaab4752bfa2ba1147dab68bc68f93d6de3431ca6eb0765826726ecce74c13",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 196,
                "fps": 49.0,
                "fpsRational": "49/1",
                "duration": 4.0,
                "sha256": "5ecaab4752bfa2ba1147dab68bc68f93d6de3431ca6eb0765826726ecce74c13",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 6720204
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-025-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152",
              "mediaSha256": "5ecaab4752bfa2ba1147dab68bc68f93d6de3431ca6eb0765826726ecce74c13",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-025-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152",
              "mediaSha256": "5ecaab4752bfa2ba1147dab68bc68f93d6de3431ca6eb0765826726ecce74c13",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1217,
                  1520
                ],
                "nativeFitPosition": [
                  191,
                  430
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-025-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152",
              "mediaSha256": "5ecaab4752bfa2ba1147dab68bc68f93d6de3431ca6eb0765826726ecce74c13",
              "allActualFramesReviewed": true,
              "frameCount": 196,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "All originalglyphs/frame preserved in sourceRGB. OnlySamfourline dialogue45070pixels translated250,-755 to upperright, unchangedfont/norescale/noredraw, source-to-destinationalpha/RGB and remainingprotectedpixels independentlyverified.",
              "sourceRGBCoordinateSpace": "disclosed-source-pixel-translation",
              "fixedCoordinateRGBIdentityClaim": false,
              "typographyTranslations": [
                {
                  "sourceRect": {
                    "x": 609,
                    "y": 840,
                    "width": 510,
                    "height": 283
                  },
                  "dx": 250,
                  "dy": -755,
                  "selectedPixelCount": 45070,
                  "meaning": "Sam dialogue originalfont sourcepixels translated intact, no redraw/rescale."
                }
              ],
              "evidence": [
                "qa/public-acceptance/page-025-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152",
              "mediaSha256": "5ecaab4752bfa2ba1147dab68bc68f93d6de3431ca6eb0765826726ecce74c13",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-025-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-026",
      "page": 25,
      "sourcePage": 26,
      "source": "pages/page-026.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c",
      "bytes": 230075,
      "panelSources": [
        {
          "id": "page-026-panel-01",
          "title": "第25页 · 第01格完整原画",
          "source": "source-panels/page-026-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c",
          "cropSha256": "a13969ec7fd410668850fa086287191d01c082478bf88e20ab32aea43e9c9c15",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-026-panel-01",
          "title": "第25页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-026-panel-01-cdb8accd9330.mp4",
          "sourceCrop": "source-panels/page-026-panel-01.png",
          "sourceCropSha256": "a13969ec7fd410668850fa086287191d01c082478bf88e20ab32aea43e9c9c15",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 240,
            "fps": 60.0,
            "fpsRational": "60/1",
            "duration": 4.0,
            "sha256": "cdb8accd93304beda858a5fa6157fc66efee14ce0f8f2982fc88c14219f2d689",
            "sizeBytes": 3240513,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-026-panel-01-c13dc1284042.png",
            "width": 1600,
            "height": 2000,
            "sha256": "c13dc1284042efd48f59126c4458fdaf44bb64afbdc7915dfaee8eddae7a1709",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 0,
              "y": 0,
              "width": 1600,
              "height": 2000
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "Four independent original events retain upper-left bicycle memory, upper-right cake memory, central thoughtful Mandy and lower rain/tent memory. Each complete video is contained without actor/environment crop or alpha removal. Three flat colored cloud silhouettes are ornamental page layout, not physical static environments; all physical house/tree/road/room/table/tent/rain worlds remain inside changing complete video windows. Original top/bottom narration, TADA and frame retain source pixel positions."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c",
              "mediaSha256": "cdb8accd93304beda858a5fa6157fc66efee14ce0f8f2982fc88c14219f2d689",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 240,
                "fps": 60.0,
                "fpsRational": "60/1",
                "duration": 4.0,
                "sha256": "cdb8accd93304beda858a5fa6157fc66efee14ce0f8f2982fc88c14219f2d689",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 3240513
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-026-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c",
              "mediaSha256": "cdb8accd93304beda858a5fa6157fc66efee14ce0f8f2982fc88c14219f2d689",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-026-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c",
              "mediaSha256": "cdb8accd93304beda858a5fa6157fc66efee14ce0f8f2982fc88c14219f2d689",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "sourcePageSha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c",
                "subsceneRectangles": [
                  {
                    "id": "bicycle-memory",
                    "artworkRect": {
                      "x": 68,
                      "y": 330,
                      "width": 570,
                      "height": 712
                    }
                  },
                  {
                    "id": "cake-memory",
                    "artworkRect": {
                      "x": 1038,
                      "y": 535,
                      "width": 490,
                      "height": 575
                    }
                  },
                  {
                    "id": "rain-memory",
                    "artworkRect": {
                      "x": 270,
                      "y": 1135,
                      "width": 1060,
                      "height": 590
                    }
                  },
                  {
                    "id": "thoughtful-mandy",
                    "artworkRect": {
                      "x": 644,
                      "y": 530,
                      "width": 390,
                      "height": 585
                    }
                  }
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-026-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c",
              "mediaSha256": "cdb8accd93304beda858a5fa6157fc66efee14ce0f8f2982fc88c14219f2d689",
              "allActualFramesReviewed": true,
              "frameCount": 240,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "All original reviewed typography search bounds and outer source frame retain complete original alpha/source RGB. The requested glyph/frame region restriction removes zero existing protected pixels: resulting overlay SHA is identical to the original prepared overlay. No source glyph translation and no cloud-shaped mask over any video window.",
              "evidence": [
                "qa/public-acceptance/page-026-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c",
              "mediaSha256": "cdb8accd93304beda858a5fa6157fc66efee14ce0f8f2982fc88c14219f2d689",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-026-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-027",
      "page": 26,
      "sourcePage": 27,
      "source": "pages/page-027.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9",
      "bytes": 231581,
      "panelSources": [
        {
          "id": "page-027-panel-01",
          "title": "第26页 · 第01格完整原画",
          "source": "source-panels/page-027-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9",
          "cropSha256": "4ab467f520577325e7c99dc9ce63b7beecda43b91d313f091974e013c97f6483",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-027-panel-01",
          "title": "第26页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-027-panel-01-7672c3be4b07.mp4",
          "sourceCrop": "source-panels/page-027-panel-01.png",
          "sourceCropSha256": "4ab467f520577325e7c99dc9ce63b7beecda43b91d313f091974e013c97f6483",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 105,
            "fps": 26.25,
            "fpsRational": "105/4",
            "duration": 4.0,
            "sha256": "7672c3be4b07db5c0d6cb3dff294f474d2c124fa077052dfd2e9a39f719f6031",
            "sizeBytes": 4545831,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-027-panel-01-59cb8968ff8f.png",
            "width": 1600,
            "height": 2000,
            "sha256": "59cb8968ff8f52b276206ad0396fa5079b545a38655b121bc184918aa8975bb3",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 45,
              "y": 45,
              "width": 1510,
              "height": 1640
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "Wholevideo uniformlycontained in originalpage captionsafe artworkregion45,45,1510,1640, white matte, nooriginalactorunderlay."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9",
              "mediaSha256": "7672c3be4b07db5c0d6cb3dff294f474d2c124fa077052dfd2e9a39f719f6031",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 105,
                "fps": 26.25,
                "fpsRational": "105/4",
                "duration": 4.0,
                "sha256": "7672c3be4b07db5c0d6cb3dff294f474d2c124fa077052dfd2e9a39f719f6031",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 4545831
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-027-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9",
              "mediaSha256": "7672c3be4b07db5c0d6cb3dff294f474d2c124fa077052dfd2e9a39f719f6031",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-027-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9",
              "mediaSha256": "7672c3be4b07db5c0d6cb3dff294f474d2c124fa077052dfd2e9a39f719f6031",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1313,
                  1640
                ],
                "nativeFitPosition": [
                  143,
                  45
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-027-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9",
              "mediaSha256": "7672c3be4b07db5c0d6cb3dff294f474d2c124fa077052dfd2e9a39f719f6031",
              "allActualFramesReviewed": true,
              "frameCount": 105,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Exactoriginalcaptionandframeatnativecoordinates, entirevideo containedabovebottomcaption; noface/eyetextcollision.",
              "evidence": [
                "qa/public-acceptance/page-027-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9",
              "mediaSha256": "7672c3be4b07db5c0d6cb3dff294f474d2c124fa077052dfd2e9a39f719f6031",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-027-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-028",
      "page": 27,
      "sourcePage": 28,
      "source": "pages/page-028.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8",
      "bytes": 182767,
      "panelSources": [
        {
          "id": "page-028-panel-01",
          "title": "第27页 · 第01格完整原画",
          "source": "source-panels/page-028-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8",
          "cropSha256": "fe529589fdac61f052f62bab989b0e99fdabe3a5943cf3758ee3206bb78c0568",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-028-panel-01",
          "title": "第27页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-028-panel-01-2c20c097f4c7.mp4",
          "sourceCrop": "source-panels/page-028-panel-01.png",
          "sourceCropSha256": "fe529589fdac61f052f62bab989b0e99fdabe3a5943cf3758ee3206bb78c0568",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 121,
            "fps": 30.25,
            "fpsRational": "121/4",
            "duration": 4.0,
            "sha256": "2c20c097f4c70ea7237d5316b485bbaf3f0bead0d596d84635350df2529d82e2",
            "sizeBytes": 5282233,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-028-panel-01-c7288336b873.png",
            "width": 1600,
            "height": 2000,
            "sha256": "c7288336b873bf948e762b779e13718137293f76f5231903c045f86b665b2d37",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            },
            "artworkRect": {
              "x": 45,
              "y": 450,
              "width": 1510,
              "height": 1500
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "Wholeactual1201x1500video at199,450. Friendschorus34658 originalglyphpixels movedintact to upperleft; upperrightCuzsongandframeunchanged, noactorunderlay."
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8",
              "mediaSha256": "2c20c097f4c70ea7237d5316b485bbaf3f0bead0d596d84635350df2529d82e2",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 121,
                "fps": 30.25,
                "fpsRational": "121/4",
                "duration": 4.0,
                "sha256": "2c20c097f4c70ea7237d5316b485bbaf3f0bead0d596d84635350df2529d82e2",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 5282233
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-028-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8",
              "mediaSha256": "2c20c097f4c70ea7237d5316b485bbaf3f0bead0d596d84635350df2529d82e2",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-028-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8",
              "mediaSha256": "2c20c097f4c70ea7237d5316b485bbaf3f0bead0d596d84635350df2529d82e2",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1201,
                  1500
                ],
                "nativeFitPosition": [
                  199,
                  450
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-028-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8",
              "mediaSha256": "2c20c097f4c70ea7237d5316b485bbaf3f0bead0d596d84635350df2529d82e2",
              "allActualFramesReviewed": true,
              "frameCount": 121,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Exactoriginal34658FriendschorusglyphRGB translated-390,-1060 to upperleftsamefontsamepixel, originalCuzsongupperright/framefixed. MappedRGB0; noface/eyelettercollision withentirevideoartRect45,450,1510,1500.",
              "sourceRGBCoordinateSpace": "disclosed-source-pixel-translation",
              "fixedCoordinateRGBIdentityClaim": false,
              "typographyTranslations": [
                {
                  "sourceRect": {
                    "x": 545,
                    "y": 1115,
                    "width": 360,
                    "height": 342
                  },
                  "dx": -390,
                  "dy": -1060,
                  "selectedPixelCount": 34658,
                  "meaning": "Friendsfive-linechorus sourcefontpixels translatedintact withoutredraw/rescale; allotherprotectedpixelsfixed."
                }
              ],
              "evidence": [
                "qa/public-acceptance/page-028-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8",
              "mediaSha256": "2c20c097f4c70ea7237d5316b485bbaf3f0bead0d596d84635350df2529d82e2",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-028-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-029",
      "page": 28,
      "sourcePage": 29,
      "source": "pages/page-029.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
      "bytes": 190974,
      "panelSources": [
        {
          "id": "page-029-panel-01",
          "title": "第28页 · 第01格完整原画",
          "source": "source-panels/page-029-panel-01.png",
          "width": 1600,
          "height": 708,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 708
          },
          "quality": "source-verified",
          "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
          "cropSha256": "e53a0bb5fa4a6f8bad7955acb706eab9b60737c1e3d7eba22b8e9c21e10f4302",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        },
        {
          "id": "page-029-panel-02",
          "title": "第28页 · 第02格完整原画",
          "source": "source-panels/page-029-panel-02.png",
          "width": 1600,
          "height": 1292,
          "bounds": {
            "x": 0,
            "y": 708,
            "width": 1600,
            "height": 1292
          },
          "quality": "source-verified",
          "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
          "cropSha256": "31d323af43f95be3fae85820d53c837def63177c0945327c8c0441bb80a65ae3",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-029-panel-01",
          "title": "第28页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 708
          },
          "video": "videos/page-029-panel-01-f00bd9a1a00f.mp4",
          "sourceCrop": "source-panels/page-029-panel-01.png",
          "sourceCropSha256": "e53a0bb5fa4a6f8bad7955acb706eab9b60737c1e3d7eba22b8e9c21e10f4302",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 1442,
            "height": 638,
            "frameCount": 120,
            "fps": 30.0,
            "fpsRational": "30/1",
            "duration": 4.0,
            "sha256": "f00bd9a1a00fe24edf93e94943354bf795c0c7af9250291477d7092a3340c80d",
            "sizeBytes": 4584536,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-029-panel-01-7a59cabde82b.png",
            "width": 1600,
            "height": 708,
            "sha256": "7a59cabde82b74d6d7fd632b1cc8cddd33499728a49337e556ac7b7e0eb493cf",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 1442,
              "height": 638
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "f00bd9a1a00fe24edf93e94943354bf795c0c7af9250291477d7092a3340c80d",
              "actualMedia": {
                "width": 1442,
                "height": 638,
                "frameCount": 120,
                "fps": 30.0,
                "fpsRational": "30/1",
                "duration": 4.0,
                "sha256": "f00bd9a1a00fe24edf93e94943354bf795c0c7af9250291477d7092a3340c80d",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 4584536
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-029-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "f00bd9a1a00fe24edf93e94943354bf795c0c7af9250291477d7092a3340c80d",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-029-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "f00bd9a1a00fe24edf93e94943354bf795c0c7af9250291477d7092a3340c80d",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 708
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  708
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-029-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "f00bd9a1a00fe24edf93e94943354bf795c0c7af9250291477d7092a3340c80d",
              "allActualFramesReviewed": true,
              "frameCount": 120,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original SLIP letters, black accent and white bubble are exact source pixels fixed as editorial typography; no observed foot intersection.",
              "evidence": [
                "qa/public-acceptance/page-029-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "f00bd9a1a00fe24edf93e94943354bf795c0c7af9250291477d7092a3340c80d",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-029-panel-01-runtime.json"
              ]
            }
          }
        },
        {
          "id": "page-029-panel-02",
          "title": "第28页 · 第02格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 708,
            "width": 1600,
            "height": 1292
          },
          "video": "videos/page-029-panel-02-441a6ecfb90f.mp4",
          "sourceCrop": "source-panels/page-029-panel-02.png",
          "sourceCropSha256": "31d323af43f95be3fae85820d53c837def63177c0945327c8c0441bb80a65ae3",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 1072,
            "height": 860,
            "frameCount": 162,
            "fps": 40.5,
            "fpsRational": "81/2",
            "duration": 4.0,
            "sha256": "441a6ecfb90f0bacbba3e603b8027a321c268f7981058f8d40fddeb3d6a10239",
            "sizeBytes": 6413657,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-029-panel-02-d9ffedde5a62.png",
            "width": 1600,
            "height": 1292,
            "sha256": "d9ffedde5a62c77d3e35e6bfa9494f51d330676e7ca0d7cad1c6979d58caf74e",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 1072,
              "height": 860
            },
            "artworkRect": {
              "x": 550,
              "y": 400,
              "width": 1005,
              "height": 850
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "full video uniformly contained in source-bound caption-safe artwork region"
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "441a6ecfb90f0bacbba3e603b8027a321c268f7981058f8d40fddeb3d6a10239",
              "actualMedia": {
                "width": 1072,
                "height": 860,
                "frameCount": 162,
                "fps": 40.5,
                "fpsRational": "81/2",
                "duration": 4.0,
                "sha256": "441a6ecfb90f0bacbba3e603b8027a321c268f7981058f8d40fddeb3d6a10239",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 6413657
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-029-panel-02-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "441a6ecfb90f0bacbba3e603b8027a321c268f7981058f8d40fddeb3d6a10239",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-029-panel-02-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "441a6ecfb90f0bacbba3e603b8027a321c268f7981058f8d40fddeb3d6a10239",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 708,
                "width": 1600,
                "height": 1292
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
                "nativeFitSize": [
                  1005,
                  806
                ],
                "nativeFitPosition": [
                  550,
                  422
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-029-panel-02-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "441a6ecfb90f0bacbba3e603b8027a321c268f7981058f8d40fddeb3d6a10239",
              "allActualFramesReviewed": true,
              "frameCount": 162,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Exactoriginal SPLATglyph+halo46897sourceRGB pixels moved intact left/up; original frame/exterior unchanged. Glyphs do not cover actors. Full video contained with editorial white matte and no old actor underlay.",
              "sourceRGBCoordinateSpace": "disclosed-source-pixel-translation",
              "fixedCoordinateRGBIdentityClaim": false,
              "typographyTranslations": [
                {
                  "sourceRect": {
                    "x": 510,
                    "y": 120,
                    "width": 495,
                    "height": 495
                  },
                  "dx": -470,
                  "dy": -100,
                  "selectedPixelCount": 46897,
                  "meaning": "Whole original SPLAT ink and exact source halo translated left/up; no font redraw, rescale, or lost pixel."
                }
              ],
              "evidence": [
                "qa/public-acceptance/page-029-panel-02-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2",
              "mediaSha256": "441a6ecfb90f0bacbba3e603b8027a321c268f7981058f8d40fddeb3d6a10239",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-029-panel-02-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-030",
      "page": 29,
      "sourcePage": 30,
      "source": "pages/page-030.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc",
      "bytes": 153603,
      "panelSources": [
        {
          "id": "page-030-panel-01",
          "title": "第29页 · 第01格完整原画",
          "source": "source-panels/page-030-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc",
          "cropSha256": "9c9ad2ddccc802e8591b39c684a04b5d08c0d0bb91a5cd6faf38de1f9b469fb6",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-030-panel-01",
          "title": "第29页 · 完整灰底雨纹画格环绕",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-030-panel-01-17d69e7937d0.mp4",
          "method": "lora",
          "actualMedia": {
            "width": 768,
            "height": 960,
            "frameCount": 124,
            "fps": 31.0,
            "fpsRational": "31/1",
            "duration": 4.0,
            "sha256": "17d69e7937d0d42befd985840759a79f7a33b815429a16b5322a6f08346aa5fe",
            "sizeBytes": 2666066,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-030-panel-01-e4fb3630bb7f.png",
            "width": 1600,
            "height": 2000,
            "sha256": "e4fb3630bb7ff5b93e127b715afdb081e20f1d761fe3c5c47cc66ed87e5e3a3d",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc"
          },
          "disclosedQualityLimitations": [
            "雨纹密度/灰度在f1–4、80–86、102/110附近有中度起伏；真实LoRA重建并保留，严格每根雨线物理冻结仅partial。",
            "衣边、耳/手臂与脚边有1至数像素短碎边/毛刺；未见重大身体断失，实际普通阅读影响待本页UI判断。",
            "最终H264420有损，人物RGB不称逐像素exact；编码前暖色、黑芯及非mask像素锁定。",
            "源为灰底雨纹反应画格，没有新增深度环境；字层只含原字/框/外白，雨纹不静态固定或覆盖身体。"
          ],
          "sourceCrop": "source-panels/page-030-panel-01.png",
          "sourceCropSha256": "9c9ad2ddccc802e8591b39c684a04b5d08c0d0bb91a5cd6faf38de1f9b469fb6",
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 768,
              "height": 960
            }
          },
          "weight": {
            "sha256": "e9275b2f456f6bd004c9cb3cf5c636cad87217c5bc96e6a5b5533e917de121da"
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc",
              "mediaSha256": "17d69e7937d0d42befd985840759a79f7a33b815429a16b5322a6f08346aa5fe",
              "scope": "Actual4s124@31h264 with SHA-bound original packet and decodedRGB frame order identity",
              "actualMedia": {
                "width": 768,
                "height": 960,
                "frameCount": 124,
                "fps": 31.0,
                "fpsRational": "31/1",
                "duration": 4.0,
                "sha256": "17d69e7937d0d42befd985840759a79f7a33b815429a16b5322a6f08346aa5fe",
                "sizeBytes": 2666066,
                "codec": "h264",
                "audio": false
              },
              "evidence": [
                "qa/public-acceptance/page-030-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc",
              "mediaSha256": "17d69e7937d0d42befd985840759a79f7a33b815429a16b5322a6f08346aa5fe",
              "closedOrbit": true,
              "scope": "Transferred explicit original actual all124 body/pose/wardrobe/props review with observed front-side-back-opposite-front closure",
              "observedClosure": "f0 front, f24–34 first side, f48–72 rear, f84–98 other side, f120–123 returns front. One coherent opaque Cuz; no card plane, duplicated body or added environment.",
              "physicallyCalibratedYawClaim": false,
              "environmentParallax": "not applicable source flat colour/rain illustration",
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-030-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc",
              "mediaSha256": "17d69e7937d0d42befd985840759a79f7a33b815429a16b5322a6f08346aa5fe",
              "bounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "noSourceCropOrPadding": true,
              "entireVideoContained": true,
              "scope": "Complete native1600x2000 source plus full768x960 video mapping; source and overlay unchanged",
              "evidence": [
                "qa/public-acceptance/page-030-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc",
              "mediaSha256": "17d69e7937d0d42befd985840759a79f7a33b815429a16b5322a6f08346aa5fe",
              "overlaySha256": "e4fb3630bb7ff5b93e127b715afdb081e20f1d761fe3c5c47cc66ed87e5e3a3d",
              "allActualFramesReviewed": true,
              "all124ActualFramesReviewed": true,
              "reviewMode": "Transferred original actual all124 own-page publication review through exact decodedRGB/packet order identity",
              "nativeProtectedSourceRGBMismatch": 0,
              "originalTextFixedAtSourcePositions": true,
              "dynamicPublicationGhostObserved": false,
              "textCollisionWithFaceHandsClothingObserved": false,
              "geometricDiagnosticIsSemanticActorMask": false,
              "evidence": [
                "qa/public-acceptance/page-030-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc",
              "mediaSha256": "17d69e7937d0d42befd985840759a79f7a33b815429a16b5322a6f08346aa5fe",
              "scope": "Root actual current4s playback, paused reset, settled slider2s50%, desktop and390width contain/nooverflow; unlogged additional actions explicitly excluded",
              "duration": 4,
              "readyState": 4,
              "actualBrowserDecoded": true,
              "playObserved": true,
              "pausedResetObserved": true,
              "settledSliderTime": 2,
              "settledProgress": 50,
              "narrowViewport": {
                "width": 390,
                "height": 844,
                "horizontalOverflow": false
              },
              "standalonePauseButtonLogged": false,
              "fourSecondPointerDragLogged": false,
              "fourSecondNaturalEndLogged": false,
              "fourSecondSourceCompareLogged": false,
              "oldRuntimeInherited": false,
              "page31InitialAsyncPendingPreserved": false,
              "evidence": [
                "qa/public-acceptance/page-030-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-031",
      "page": 30,
      "sourcePage": 31,
      "source": "pages/page-031.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b",
      "bytes": 111082,
      "panelSources": [
        {
          "id": "page-031-panel-01",
          "title": "第30页 · 第01格完整原画",
          "source": "source-panels/page-031-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b",
          "cropSha256": "9e8f9cd8ce6bb3d47b19f61bd4cb6976cf19074a112e76e37138c0b8f4ac1425",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-031-panel-01",
          "title": "第30页 · 完整画格环绕",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-031-panel-01-8c9a7454fb65.mp4",
          "method": "lora",
          "actualMedia": {
            "width": 768,
            "height": 960,
            "frameCount": 124,
            "fps": 31.0,
            "fpsRational": "31/1",
            "duration": 4.0,
            "sha256": "8c9a7454fb65ae4756cc685c5703b843d49d96c8b4e0196637d9bc8717fffd3b",
            "sizeBytes": 884654,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-031-panel-01-1f1adc307e98.png",
            "width": 1600,
            "height": 2000,
            "sha256": "1f1adc307e983f33c3e0a41a35f6072505ed12673ea0591c5f5e05fbd0fccde6",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b"
          },
          "disclosedQualityLimitations": [
            "Minor 1-to-few native-pixel dark outline fragments at ears/hair/hands; independently accepted as readable cosmetic quality.",
            "Final420 is lossy; character RGB is not pixel exact.",
            "Flat source allows body orbit; environmental landmark parallax not applicable."
          ],
          "sourceCrop": "source-panels/page-031-panel-01.png",
          "sourceCropSha256": "9e8f9cd8ce6bb3d47b19f61bd4cb6976cf19074a112e76e37138c0b8f4ac1425",
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 768,
              "height": 960
            }
          },
          "weight": {
            "sha256": "e9275b2f456f6bd004c9cb3cf5c636cad87217c5bc96e6a5b5533e917de121da"
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b",
              "mediaSha256": "8c9a7454fb65ae4756cc685c5703b843d49d96c8b4e0196637d9bc8717fffd3b",
              "scope": "Actual4s124@31h264 with SHA-bound original packet and decodedRGB frame order identity",
              "actualMedia": {
                "width": 768,
                "height": 960,
                "frameCount": 124,
                "fps": 31.0,
                "fpsRational": "31/1",
                "duration": 4.0,
                "sha256": "8c9a7454fb65ae4756cc685c5703b843d49d96c8b4e0196637d9bc8717fffd3b",
                "sizeBytes": 884654,
                "codec": "h264",
                "audio": false
              },
              "evidence": [
                "qa/public-acceptance/page-031-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b",
              "mediaSha256": "8c9a7454fb65ae4756cc685c5703b843d49d96c8b4e0196637d9bc8717fffd3b",
              "closedOrbit": true,
              "scope": "Transferred explicit original actual all124 body/pose/wardrobe/props review with observed front-side-back-opposite-front closure",
              "observedClosure": "实际全部124帧唯一Mandy从正面、右侧、后背、另一侧回正；双空手耸肩/弯肘抬前臂/腕下垂、红身金发、粉色无袖波浪裙及裸足保持，无新增包/帽/道具或第二角色。正面只有一朵紫花，背面素色粉裙未复制胸花；可见面部未见新增眨眼、说话或姿势重演。",
              "physicallyCalibratedYawClaim": false,
              "environmentParallax": "not applicable source flat colour/rain illustration",
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-031-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b",
              "mediaSha256": "8c9a7454fb65ae4756cc685c5703b843d49d96c8b4e0196637d9bc8717fffd3b",
              "bounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "noSourceCropOrPadding": true,
              "entireVideoContained": true,
              "scope": "Complete native1600x2000 source plus full768x960 video mapping; source and overlay unchanged",
              "evidence": [
                "qa/public-acceptance/page-031-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b",
              "mediaSha256": "8c9a7454fb65ae4756cc685c5703b843d49d96c8b4e0196637d9bc8717fffd3b",
              "overlaySha256": "1f1adc307e983f33c3e0a41a35f6072505ed12673ea0591c5f5e05fbd0fccde6",
              "allActualFramesReviewed": true,
              "all124ActualFramesReviewed": true,
              "reviewMode": "Transferred original actual all124 own-page publication review through exact decodedRGB/packet order identity",
              "nativeProtectedSourceRGBMismatch": 0,
              "originalTextFixedAtSourcePositions": true,
              "dynamicPublicationGhostObserved": false,
              "textCollisionWithFaceHandsClothingObserved": false,
              "geometricDiagnosticIsSemanticActorMask": false,
              "evidence": [
                "qa/public-acceptance/page-031-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b",
              "mediaSha256": "8c9a7454fb65ae4756cc685c5703b843d49d96c8b4e0196637d9bc8717fffd3b",
              "scope": "Root actual current4s playback, paused reset, settled slider2s50%, desktop and390width contain/nooverflow; unlogged additional actions explicitly excluded",
              "duration": 4,
              "readyState": 4,
              "actualBrowserDecoded": true,
              "playObserved": true,
              "pausedResetObserved": true,
              "settledSliderTime": 2,
              "settledProgress": 50,
              "narrowViewport": {
                "width": 390,
                "height": 844,
                "horizontalOverflow": false
              },
              "standalonePauseButtonLogged": false,
              "fourSecondPointerDragLogged": false,
              "fourSecondNaturalEndLogged": false,
              "fourSecondSourceCompareLogged": false,
              "oldRuntimeInherited": false,
              "page31InitialAsyncPendingPreserved": true,
              "evidence": [
                "qa/public-acceptance/page-031-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-032",
      "page": 31,
      "sourcePage": 32,
      "source": "pages/page-032.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365",
      "bytes": 170845,
      "panelSources": [
        {
          "id": "page-032-panel-01",
          "title": "第31页 · 第01格完整原画",
          "source": "source-panels/page-032-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365",
          "cropSha256": "b4fd256f3a4d3d14032d312d8c3714cc3039df9e017e245c149096eb00cb1c8e",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-032-panel-01",
          "title": "第31页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-032-panel-01-9d0f1f9b2952.mp4",
          "sourceCrop": "source-panels/page-032-panel-01.png",
          "sourceCropSha256": "b4fd256f3a4d3d14032d312d8c3714cc3039df9e017e245c149096eb00cb1c8e",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 96,
            "fps": 24.0,
            "fpsRational": "24/1",
            "duration": 4.0,
            "sha256": "9d0f1f9b2952ed4173bc6e900f07220ca5a7ca7edc7dc4470c66f38277f5bd54",
            "sizeBytes": 3358888,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-032-panel-01-76b12f5dd9a4.png",
            "width": 1600,
            "height": 2000,
            "sha256": "76b12f5dd9a49aec346c6741a42f810f38abcf4c5e012559ec87cffff69384a1",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365",
              "mediaSha256": "9d0f1f9b2952ed4173bc6e900f07220ca5a7ca7edc7dc4470c66f38277f5bd54",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 96,
                "fps": 24.0,
                "fpsRational": "24/1",
                "duration": 4.0,
                "sha256": "9d0f1f9b2952ed4173bc6e900f07220ca5a7ca7edc7dc4470c66f38277f5bd54",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 3358888
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-032-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365",
              "mediaSha256": "9d0f1f9b2952ed4173bc6e900f07220ca5a7ca7edc7dc4470c66f38277f5bd54",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-032-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365",
              "mediaSha256": "9d0f1f9b2952ed4173bc6e900f07220ca5a7ca7edc7dc4470c66f38277f5bd54",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  1999
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-032-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365",
              "mediaSha256": "9d0f1f9b2952ed4173bc6e900f07220ca5a7ca7edc7dc4470c66f38277f5bd54",
              "allActualFramesReviewed": true,
              "frameCount": 96,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Exact original sourcecaption/frame overlay, no observed face-caption intersection. PhysicalFROSTINGlabel moves withbucket and is naturally hidden on back.",
              "evidence": [
                "qa/public-acceptance/page-032-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365",
              "mediaSha256": "9d0f1f9b2952ed4173bc6e900f07220ca5a7ca7edc7dc4470c66f38277f5bd54",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-032-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-033",
      "page": 32,
      "sourcePage": 33,
      "source": "pages/page-033.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff",
      "bytes": 267511,
      "panelSources": [
        {
          "id": "page-033-panel-01",
          "title": "第32页 · 第01格完整原画",
          "source": "source-panels/page-033-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff",
          "cropSha256": "ca2fee6aa8179f6cc16da4611341a550ca7799723d03c43ec6cbb1b7f1e295e5",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-033-panel-01",
          "title": "第32页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-033-panel-01-8524b48dca5d.mp4",
          "sourceCrop": "source-panels/page-033-panel-01.png",
          "sourceCropSha256": "ca2fee6aa8179f6cc16da4611341a550ca7799723d03c43ec6cbb1b7f1e295e5",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 1280,
            "height": 720,
            "frameCount": 163,
            "fps": 40.75,
            "fpsRational": "163/4",
            "duration": 4.0,
            "sha256": "8524b48dca5dd28f1cef1152dc7290842df578bc918b45be53352ffc8d5c58ca",
            "sizeBytes": 9724082,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-033-panel-01-2394702cf1aa.png",
            "width": 1600,
            "height": 2000,
            "sha256": "2394702cf1aa91315d020d9ba39e9f01211d4a2dbfad7a61cf9387c6833cf962",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 1280,
              "height": 720
            },
            "artworkRect": {
              "x": 45,
              "y": 400,
              "width": 1510,
              "height": 1300
            },
            "backgroundColor": [
              255,
              255,
              255
            ],
            "layoutMeaning": "full video uniformly contained in source-bound caption-safe artwork region"
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff",
              "mediaSha256": "8524b48dca5dd28f1cef1152dc7290842df578bc918b45be53352ffc8d5c58ca",
              "actualMedia": {
                "width": 1280,
                "height": 720,
                "frameCount": 163,
                "fps": 40.75,
                "fpsRational": "163/4",
                "duration": 4.0,
                "sha256": "8524b48dca5dd28f1cef1152dc7290842df578bc918b45be53352ffc8d5c58ca",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 9724082
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-033-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff",
              "mediaSha256": "8524b48dca5dd28f1cef1152dc7290842df578bc918b45be53352ffc8d5c58ca",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-033-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff",
              "mediaSha256": "8524b48dca5dd28f1cef1152dc7290842df578bc918b45be53352ffc8d5c58ca",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-in-caption-safe-artwork-rectangle",
                "nativeFitSize": [
                  1510,
                  849
                ],
                "nativeFitPosition": [
                  45,
                  625
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-033-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff",
              "mediaSha256": "8524b48dca5dd28f1cef1152dc7290842df578bc918b45be53352ffc8d5c58ca",
              "allActualFramesReviewed": true,
              "frameCount": 163,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Exact source caption/frame RGB at original coordinates, whole video fits below narration and above footer. Substantial white matte; no actor underlay or crop.",
              "evidence": [
                "qa/public-acceptance/page-033-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff",
              "mediaSha256": "8524b48dca5dd28f1cef1152dc7290842df578bc918b45be53352ffc8d5c58ca",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-033-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-034",
      "page": 33,
      "sourcePage": 34,
      "source": "pages/page-034.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c",
      "bytes": 189774,
      "panelSources": [
        {
          "id": "page-034-panel-01",
          "title": "第33页 · 第01格完整原画",
          "source": "source-panels/page-034-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c",
          "cropSha256": "a31528f72ed365c6751ea02ce9730c4c61d46359be04cc8baa25a803e9648baa",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-034-panel-01",
          "title": "第33页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-034-panel-01-56da6f23983b.mp4",
          "sourceCrop": "source-panels/page-034-panel-01.png",
          "sourceCropSha256": "a31528f72ed365c6751ea02ce9730c4c61d46359be04cc8baa25a803e9648baa",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 189,
            "fps": 47.25,
            "fpsRational": "189/4",
            "duration": 4.0,
            "sha256": "56da6f23983bf42ad594983ed58d53e44c0f6a635dc4d3070a0136cdaacb2094",
            "sizeBytes": 3870805,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-034-panel-01-03fdff8ae9cd.png",
            "width": 1600,
            "height": 2000,
            "sha256": "03fdff8ae9cdb1f545338561805eb61ad9a15e0f4b67a94ac8d7841217df9f8a",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c",
              "mediaSha256": "56da6f23983bf42ad594983ed58d53e44c0f6a635dc4d3070a0136cdaacb2094",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 189,
                "fps": 47.25,
                "fpsRational": "189/4",
                "duration": 4.0,
                "sha256": "56da6f23983bf42ad594983ed58d53e44c0f6a635dc4d3070a0136cdaacb2094",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 3870805
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-034-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c",
              "mediaSha256": "56da6f23983bf42ad594983ed58d53e44c0f6a635dc4d3070a0136cdaacb2094",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-034-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c",
              "mediaSha256": "56da6f23983bf42ad594983ed58d53e44c0f6a635dc4d3070a0136cdaacb2094",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  1999
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-034-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c",
              "mediaSha256": "56da6f23983bf42ad594983ed58d53e44c0f6a635dc4d3070a0136cdaacb2094",
              "allActualFramesReviewed": true,
              "frameCount": 189,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Original narration and original green editorial questionmark remain exact source RGB. Questionmark is fixed editorial overlay, not a physical prop.",
              "evidence": [
                "qa/public-acceptance/page-034-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c",
              "mediaSha256": "56da6f23983bf42ad594983ed58d53e44c0f6a635dc4d3070a0136cdaacb2094",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-034-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    },
    {
      "id": "page-035",
      "page": 34,
      "sourcePage": 35,
      "source": "pages/page-035.jpg",
      "width": 1600,
      "height": 2000,
      "sha256": "d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5",
      "bytes": 183794,
      "panelSources": [
        {
          "id": "page-035-panel-01",
          "title": "第34页 · 第01格完整原画",
          "source": "source-panels/page-035-panel-01.png",
          "width": 1600,
          "height": 2000,
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "quality": "source-verified",
          "sourcePageSha256": "d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5",
          "cropSha256": "2636c986d372e1b76af6e3867d977acfda8579f5cf74e6b7d057d183825e2ad4",
          "pixelEquality": "passed-exact-decoded-source-page-crop-RGB"
        }
      ],
      "panels": [
        {
          "id": "page-035-panel-01",
          "title": "第34页 · 第01格",
          "quality": "passed",
          "bounds": {
            "x": 0,
            "y": 0,
            "width": 1600,
            "height": 2000
          },
          "video": "videos/page-035-panel-01-42d6ed2ca479.mp4",
          "sourceCrop": "source-panels/page-035-panel-01.png",
          "sourceCropSha256": "2636c986d372e1b76af6e3867d977acfda8579f5cf74e6b7d057d183825e2ad4",
          "method": "chatgpt-four-directions-wan3-full-closed-4s",
          "actualMedia": {
            "width": 858,
            "height": 1072,
            "frameCount": 180,
            "fps": 45.0,
            "fpsRational": "45/1",
            "duration": 4.0,
            "sha256": "42d6ed2ca479e20975d84f7c4ffdb6e9fff5add0f5cf4fca8c831830af52fb9b",
            "sizeBytes": 4102112,
            "codec": "h264",
            "audio": false
          },
          "protectionOverlay": {
            "source": "publication/page-035-panel-01-33c88362ee6e.png",
            "width": 1600,
            "height": 2000,
            "sha256": "33c88362ee6e4319b03587f895cfe7c09b310cf3db85847f7bd3e653f31ac303",
            "coordinateSpace": "source-panel",
            "sourcePageSha256": "d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5"
          },
          "contentMapping": {
            "mode": "entire-video-contained-no-crop",
            "sourcePageSha256": "d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5",
            "videoRect": {
              "x": 0,
              "y": 0,
              "width": 858,
              "height": 1072
            }
          },
          "verification": {
            "media": {
              "status": "passed",
              "sourcePageSha256": "d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5",
              "mediaSha256": "42d6ed2ca479e20975d84f7c4ffdb6e9fff5add0f5cf4fca8c831830af52fb9b",
              "actualMedia": {
                "width": 858,
                "height": 1072,
                "frameCount": 180,
                "fps": 45.0,
                "fpsRational": "45/1",
                "duration": 4.0,
                "sha256": "42d6ed2ca479e20975d84f7c4ffdb6e9fff5add0f5cf4fca8c831830af52fb9b",
                "codec": "h264",
                "audio": false,
                "sizeBytes": 4102112
              },
              "lossyReencodeDisclosure": true,
              "evidence": [
                "qa/public-acceptance/page-035-panel-01-media.json"
              ]
            },
            "spatial": {
              "status": "passed",
              "sourcePageSha256": "d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5",
              "mediaSha256": "42d6ed2ca479e20975d84f7c4ffdb6e9fff5add0f5cf4fca8c831830af52fb9b",
              "closedOrbit": true,
              "calibrated3DClaim": false,
              "pixelIdenticalLoopClaim": false,
              "evidence": [
                "qa/public-acceptance/page-035-panel-01-spatial.json"
              ]
            },
            "bounds": {
              "status": "passed",
              "sourcePageSha256": "d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5",
              "mediaSha256": "42d6ed2ca479e20975d84f7c4ffdb6e9fff5add0f5cf4fca8c831830af52fb9b",
              "entireVideoContained": true,
              "originalBounds": {
                "x": 0,
                "y": 0,
                "width": 1600,
                "height": 2000
              },
              "layout": {
                "mode": "entire-video-contained-no-crop",
                "nativeFitSize": [
                  1600,
                  1999
                ],
                "nativeFitPosition": [
                  0,
                  0
                ]
              },
              "noLayoutCrop": true,
              "evidence": [
                "qa/public-acceptance/page-035-panel-01-bounds.json"
              ]
            },
            "textProtection": {
              "status": "passed",
              "sourcePageSha256": "d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5",
              "mediaSha256": "42d6ed2ca479e20975d84f7c4ffdb6e9fff5add0f5cf4fca8c831830af52fb9b",
              "allActualFramesReviewed": true,
              "frameCount": 180,
              "opaqueRGBMismatch": 0,
              "sourceTypographyPolicy": "Only this page's original JUST CUZ title/frame retained; no collection subtitle or author imported. Title approaches frosting/head top on some views, no observed eye/mouth obstruction.",
              "evidence": [
                "qa/public-acceptance/page-035-panel-01-textProtection.json"
              ]
            },
            "runtime": {
              "status": "passed",
              "sourcePageSha256": "d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5",
              "mediaSha256": "42d6ed2ca479e20975d84f7c4ffdb6e9fff5add0f5cf4fca8c831830af52fb9b",
              "actualBrowserDecoded": true,
              "duration": 4,
              "desktopPlayPauseResetSliderEndpoint": true,
              "narrowViewport": [
                390,
                844
              ],
              "newPointerDragClaim": false,
              "newBrowserRasterScreenshotClaim": false,
              "evidence": [
                "qa/public-acceptance/page-035-panel-01-runtime.json"
              ]
            }
          }
        }
      ]
    }
  ]
};

;
/* orbit-seek.js */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.OrbitSeek = api;
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';
  function validRanges(ranges) {
    return Array.isArray(ranges) ? ranges.filter(r => Array.isArray(r) && Number.isFinite(r[0]) && Number.isFinite(r[1]) && r[0] >= 0 && r[1] > r[0]) : [];
  }
  function hasFullSeekRange(ranges, duration) {
    if (!Number.isFinite(duration) || duration <= 0) return false;
    const tolerance = Math.min(.04, duration * .01);
    return validRanges(ranges).some(([start, end]) => start <= tolerance && end >= duration - tolerance);
  }
  function canSeekTo(ranges, duration, target) {
    if (!Number.isFinite(duration) || duration <= 0 || !Number.isFinite(target) || target < 0 || target >= duration) return false;
    const tolerance = Math.min(.02, duration * .005);
    return validRanges(ranges).some(([start, end]) => start <= target + tolerance && end >= target - tolerance);
  }
  return Object.freeze({hasFullSeekRange, canSeekTo});
});

;
/* orbit-inertia.js */
(() => {
  'use strict';
  const wrap = percent => ((percent % 100) + 100) % 100;
  function create({onChange, onState = () => {}}) {
    const decayMs = 310, speedLimit = .09, stopSpeed = .0015;
    let frame = null, phase = 'idle', value = 0, velocity = 0;
    let originX = 0, originValue = 0, sampleAt = 0, lastInputAt = 0;
    const setPhase = next => { if (phase !== next) { phase = next; onState(next); } };
    function cancel() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null; velocity = 0; setPhase('idle');
    }
    function begin(percent, x, now = performance.now()) {
      cancel(); value = percent; originValue = percent; originX = x;
      sampleAt = now; lastInputAt = now; setPhase('dragging');
    }
    function move(x, width, now = performance.now()) {
      if (phase !== 'dragging') return;
      const next = originValue + (x - originX) / Math.max(1, width) * 100;
      const elapsed = Math.max(1, now - sampleAt);
      const instantaneous = Math.max(-speedLimit, Math.min(speedLimit, (next - value) / elapsed));
      velocity = .55 * velocity + .45 * instantaneous;
      value = next; sampleAt = now; lastInputAt = now;
      onChange(wrap(value));
    }
    function end(now = performance.now()) {
      if (phase !== 'dragging') return;
      const reducedMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reducedMotion || now - lastInputAt > 100 || Math.abs(velocity) < stopSpeed) { cancel(); return; }
      setPhase('coasting');
      let previous = now;
      function tick(at) {
        if (phase !== 'coasting') return;
        const elapsed = Math.max(0, Math.min(64, at - previous));
        previous = at;
        const decay = Math.exp(-elapsed / decayMs);
        value += velocity * decayMs * (1 - decay);
        velocity *= decay;
        onChange(wrap(value));
        if (Math.abs(velocity) < stopSpeed) { frame = null; velocity = 0; setPhase('idle'); return; }
        frame = requestAnimationFrame(tick);
      }
      frame = requestAnimationFrame(tick);
    }
    return Object.freeze({begin, move, end, cancel, destroy:cancel});
  }
  window.OrbitInertia = Object.freeze({create});
})();

;
/* frame-sequences.js */
window.COMIC_FRAME_INDEX = Object.freeze({"schemaVersion":1,"pages":[{"sourcePageSha256":"b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724","source":"frame-config/page-002.json","sha256":"70894630b9914b80aa382e15b6bca951affa55d6fcd9183da1a7d6d0eb6fc2c4"},{"sourcePageSha256":"d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235","source":"frame-config/page-003.json","sha256":"0eefea88e67f915e56803cb630f4c081fd00d8d9e606223b622650f494d4d9ef"},{"sourcePageSha256":"3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823","source":"frame-config/page-004.json","sha256":"76e9798d125d31479a821e6292127b17a98845fdbcf0300802c8128081767283"},{"sourcePageSha256":"1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f","source":"frame-config/page-005.json","sha256":"34c09cee9226714fce6d4e89b8dd745d8e9e806b1931316118f14e5a4e5e052a"},{"sourcePageSha256":"e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696","source":"frame-config/page-006.json","sha256":"584bb20ac622f4ee364d36e5155ac1eedbd196bf78184fa95718cc19924369ee"},{"sourcePageSha256":"b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41","source":"frame-config/page-007.json","sha256":"c52bb5168cea953af45c5620e177c56ba3d4d7b4fd126e073f6296c3674413a9"},{"sourcePageSha256":"cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d","source":"frame-config/page-008.json","sha256":"8a179ea1d80e5810afa1096dc77884227e7dc0cd9ef80f64a92003b84e444062"},{"sourcePageSha256":"5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1","source":"frame-config/page-009.json","sha256":"8becc715f3ae98864f402c01af098ff60b47fad6e33f965d5cdb95007bde9dfa"},{"sourcePageSha256":"9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070","source":"frame-config/page-010.json","sha256":"c85a10eccefe5a99fc5e95a08858faa1692ca84ec60a65208cc53d65b97970d3"},{"sourcePageSha256":"d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4","source":"frame-config/page-011.json","sha256":"ae44520dcfde77f87bcb6270d1c944a7aa1aca453214558f53fa4d32ae199f0a"},{"sourcePageSha256":"399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa","source":"frame-config/page-012.json","sha256":"4b5b544c5e5310207ed426a679bd4f9509b1dc201fb35d005c182b3d509b6faf"},{"sourcePageSha256":"d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb","source":"frame-config/page-013.json","sha256":"22c35608742fde79fbd226420f04def53ff9a1fbd0f623b2c7876e2df0f39c4c"},{"sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","source":"frame-config/page-014.json","sha256":"4af19623f6312371519282d124d3e35319e90b75c7bfdef71a871bd534cf5b3f"},{"sourcePageSha256":"5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1","source":"frame-config/page-015.json","sha256":"932ee20216ecfce243818f94e2ecfdf11a7e37d3ed6cae2e8098ddd849e05e70"},{"sourcePageSha256":"f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3","source":"frame-config/page-016.json","sha256":"a197f057745357424e108211aeec4f0e1f80e587806a19cedae841af56219c9f"},{"sourcePageSha256":"dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11","source":"frame-config/page-017.json","sha256":"fe3f6484fc5f3e5d1862a05f92df83453340ee9ebb1f5bf943fd47c3593a230b"},{"sourcePageSha256":"28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87","source":"frame-config/page-018.json","sha256":"b3199d05b287f00eb0b4a64c327ad9bcb38d563cdeeb04d01c8d51f5fd620ec5"},{"sourcePageSha256":"192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63","source":"frame-config/page-019.json","sha256":"e1ac22ba698d04fe49a931423522b91efa97e53f4f7a9747865837d3e2893cd2"},{"sourcePageSha256":"3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d","source":"frame-config/page-020.json","sha256":"c16b4a05fc19a6a416361b26abe2b3467c11d7cefe7146f7838f99af776f6b0f"},{"sourcePageSha256":"2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7","source":"frame-config/page-021.json","sha256":"af39b80dbf4e661f0482b590968a0ecc13a6d6731a2b72cbf4dbd2fe8df65208"},{"sourcePageSha256":"5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64","source":"frame-config/page-022.json","sha256":"31c3b0f7d8d6d31dc37b259af6ccef3077a2b0169b6e8a04fed4834567e46320"},{"sourcePageSha256":"f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334","source":"frame-config/page-023.json","sha256":"7a1dfee5710c39b89f546f6e866a9c52b7a0d479d8e45b607b38f8f602c4e060"},{"sourcePageSha256":"885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00","source":"frame-config/page-024.json","sha256":"2399ed1e51480e74fdc23ceb16a2a8436d013682d81f8c58b6eb8a75ac1caae1"},{"sourcePageSha256":"c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152","source":"frame-config/page-025.json","sha256":"f0822c533f7bde409548aa226f227d30c04a91f0bd08392a95302c122ebf70f8"},{"sourcePageSha256":"433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c","source":"frame-config/page-026.json","sha256":"940f22cd0a2e050b4ea24c7e55fc43a68f0ddcbe22bf9cf89c5cce76ddfada0c"},{"sourcePageSha256":"8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9","source":"frame-config/page-027.json","sha256":"a4b5a9085dfea34acffdaf576d55b02d5a79ee5df1ee3db14f4101e10c35854e"},{"sourcePageSha256":"52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8","source":"frame-config/page-028.json","sha256":"4f344ff183b21c9fa80dba8b6a546c0df97fbd6b0087b4e9682021d12892ac44"},{"sourcePageSha256":"244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2","source":"frame-config/page-029.json","sha256":"cf39d86a86114c824881bd7c8144ec9b7100c23f418fedee0090d82cbdc92078"},{"sourcePageSha256":"88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc","source":"frame-config/page-030.json","sha256":"da4f866ae27aa5899544126361bd2af385bfb1292dfc5679c6416823b6a9a9a7"},{"sourcePageSha256":"72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b","source":"frame-config/page-031.json","sha256":"8146d85e63f23fc103a9de83491518e8dd1e412e49be289c1b9148067a4518db"},{"sourcePageSha256":"3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365","source":"frame-config/page-032.json","sha256":"13463a01aa7d0b1215ea17d268319d3aed2b37f8063a307ddad5fb13b4b57eb9"},{"sourcePageSha256":"6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff","source":"frame-config/page-033.json","sha256":"c508f2e7cb15826f154830190f04536b9c9920922baa435c8a4d2f6cf3d875dd"},{"sourcePageSha256":"6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c","source":"frame-config/page-034.json","sha256":"9abbc48d6b120830314639538a521f56b616e2059c6f7a238376e80aa6467ca7"},{"sourcePageSha256":"d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5","source":"frame-config/page-035.json","sha256":"0f3cd8537d3d6a57abd91307ee8d8763dd24ea44c4c1e5e5d77889e286fa4d89"}]});

;
/* preview-sequences.js */
(() => {
  "use strict";
  const data = {"schemaVersion":1,"entries":[{"panelId":"page-002-panel-01","sourcePageSha256":"b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724","mediaSha256":"cbd9e5a1b0ba1dec8d917b44f47870cf2c169632be345f2b57f9ec39e6071184","videoSource":"videos/page-002-panel-01-cbd9e5a1b0ba.mp4","frameCount":180,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"pack":{"source":"preview-packs/page-002-panel-01-cbd9e5a1b0ba/000.orbf","sha256":"60166a4aa009269ba6a28df280efd6da6969fab88e0217662f5829edbb7b290d","byteLength":375962,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"frameBytes":[17368,10766,15830,15802,17162,16806,14220,17062,17226,16008,11260,15692,17180,15874,14728,17156,17274,16808,12042,16748,17172,15692,12756,17126],"frameSha256":["56900777721dbe5bb88ed68c20358eafe68371101d12eee523e89961387447f0","764524b1882d1fbb1f3414b4165f3f1fcc18b8110b128547a59f29c031140392","714eb1541d85b3797d629abbb06051240f331d53d334df0dbb7ad9178ff6dd25","dc230630e5402fb198a27b66e96a20d3ff68317d9a918f7a12791b85f4b192db","3036ddb42ec620b3e302f039553483ab50ae73f9bfe63c444eb7bdbc9e3e5711","0bf5c19b23f9e14d3bc337263b7f785cc931e9e127f3635e7b0e8349f90aed8d","6be381788f9f3a4af4df507f0c1514114c57d5d2e957858b5fa01d6614e32f7e","29e928c049d803177ce8c1aa9a620b8ee9a3306ad5a75e9045bf20b93d94035d","7457fa8f23a3a1091944737effd1a40bb46c530d52849d3a99194b884bf1c1bb","b2004d4daf191cb21089bbf6b1cf1885ba64ff3cc0d4c40a4d06f10570f5ba01","4dc2ffbdfa00cefa96a93eba7ee2c4117ecff91dc670cef203ba34b821d28108","af93c4b60eb4d1e10f44e1ee41b18b6a7127cda13d7ce646aaf807d931e34953","434b9a31ca078ca75d988ba1d751acaec13e712ecd4c566cc943a48148f918fa","043daa5cb2ff4fc59406a99bc57d36aca71662c656cb6a26fb423e7bf350dc90","090e855900eea0df8def7938a4f2a8c483fb0d7b0d2d2fa29b0092b8df7ae911","0d07dd26ce3a33112323ff09052a419803dd8d5ed2ddfe0387bfd7398111f53d","11997e78569b3e34cfd0047121fa5056c00ee8f59aecd2420abe20bb92a15482","10396eae8a73b1f02544baf8a203f5f6f05b3f51d3e45acbbd00f0cae8139ae4","32e6a921910d1d82dd65b4c5ee17846d02831cfb9bf6ddda27b0671374cc1f58","5f75809157e840412c7a877ea8d397ca498377f3bb01f959f710792195f6a1e1","02ffebf60a4674e78c9a84076f00cf26417ef7813d10bb16343d57d555a27f6a","71bf95885b438e917bf81df07f268d1663deeb2069e9aed762d536465d7e4155","d8061b7c6809b42a906b7f5a1d42d054021b06dfac750f371a782c168c6a2272","9dcffb4541bb64fedd308673bc5b0b3adc2af40a6e28de9f325508eedacbb8d3"]}},{"panelId":"page-003-panel-01","sourcePageSha256":"d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235","mediaSha256":"a2bfa5a5b3ec8e8216b768b07dbcaf6629951e9b3883957822f92545437ebc7e","videoSource":"videos/page-003-panel-01-a2bfa5a5b3ec.mp4","frameCount":180,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"pack":{"source":"preview-packs/page-003-panel-01-a2bfa5a5b3ec/000.orbf","sha256":"5301a84e0d2eb77b6f50d9dce8902ef2dee7eb43c2d344ad2566a20416e3af0e","byteLength":427322,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"frameBytes":[19512,18762,13898,19000,17728,19244,14298,18912,19464,19140,14144,20024,17850,19258,14514,18902,18872,19214,14450,19552,14386,18794,18114,19086],"frameSha256":["87d70be89b5544f4db3c6bf3fb28b4b6ca23029cbe664e557234f324c22ae484","6bb75c2fb42f0944fa4f9478739ad070876f18d980b443484be7487a2c785ff0","261421d994b8033ec1a4fcbe622ff0c060c52b5567ea6fb8feccc3611ecea77e","5995ab38f084b0f64bf42e28b126a45c406ec0fc015337c836a4336b1fa1980f","099067d66d69f7220568e89f7b3202fae7edeac8f25db81c6ae07106d4d93f93","80e4c357e736c861fad381ed89369d734c68b821c1c9ae71306a4b91f186556c","b1d8b7b90f870e4b4e0eb49cb26838c77ee819db9fbec4ed62ce78e4e928fed3","89473710e03df70a0f213e32b4216f797a4d5a4c2ae1af2b54a7653cbecd3b57","136db85f6916990fa6da013b8874c730384ed17140df2489c28c55e7815d4709","fe5396b08cc94e838d792212c780bd5bfd490e0fa8ef8fa2d9c1cd02baeb589d","2dc242cf95948f6db170182448fd17a27cb075fc5a0cb87a236ef815730d46e5","5cc41d34072c5eb3fe86e0a8ab4cc167fe509af6eda5e7083a50155826464644","97a967c1601ac6364a7c471f447145a16a1c166882a3e02de6494a0e3815619a","da18008e5e1905f80c60daf0a274c053ac3ed87d72d8245c516a358d323bffc6","e0f3840c076a602187f20e42eca32313ec85a512b17bc3ea5ad5a685c03c40ae","f6336161f94d35aec215ef4d26a4376c5e13158f3cf691f84de52f1aea600951","9b7bc82e122dec035a5c876708ef684b957142ab41178b01259739585a54af8f","6cde1c3de0efe008c6b640ae15c9bbce3febf79e4e65700aac8f9e5670e463c1","1f7ae3918b9a4a505590359c02bacd9083c2c4e77b0ee8442666110d3a4792a1","900d65aebc8f147bf3f005b9238c02a8f4a649e55f040cbcddeaba1b4710ea0b","98c9fa2dbaecd086d49d3f09b1280b222e85f7721f6527612a322a4549b1efc2","281581fb4903b5d608f4bf96f8d384b28c1e09b40e904468d2dd44db4c81fc15","28aae19c25e0a6cfcba64b5afdc00e22923eb986f2c14daa9d3137d6b5d1578b","cb23e5598f6c74aac97e8f10b5213f418d766caca4165672b06738715ae40f59"]}},{"panelId":"page-004-panel-01","sourcePageSha256":"3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823","mediaSha256":"294182ddad19746236b7d584e94fd41586410428f0e78cd5f26776c5e967c8fe","videoSource":"videos/page-004-panel-01-294182ddad19.mp4","frameCount":200,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,100,50,150,25,125,75,175,8,108,58,158,33,133,83,183,17,117,67,167,42,142,92,192],"pack":{"source":"preview-packs/page-004-panel-01-294182ddad19/000.orbf","sha256":"ef19fbaf6d911d90d5c439c7aa9c46d4fecb71f6bd5a51297b28028afcd7ac7c","byteLength":567940,"indices":[0,100,50,150,25,125,75,175,8,108,58,158,33,133,83,183,17,117,67,167,42,142,92,192],"frameBytes":[26628,19736,24620,25830,26988,25596,19714,21592,26178,17418,20872,25558,26394,25490,20330,25600,26038,21454,17948,25414,26902,25354,20096,25986],"frameSha256":["9e1acf6722d00dcd5fc562d353f6686f35bd543b5fa55d26603c86b5ac50ce75","f53d9fbbd4530e4e8992223aff75246002db0ff246f68c2864bc0cf25a86dfc1","223fed3593beeac4d6def46be0f49baa3b19e64812b3de848b16fd3075210b01","5a86cf02579309031726547caef34d16ef9e05edfb2d53636763871e7b3b66ea","4b9ada790f7281cbcb7caedcb015ab1728d31069a150cb6d72eaaf029f709be9","84e66e701ceb34f771571c4c740f8ef8ae9211cdd6314632e97e97a61c3260de","148afdaf6e74f451803e9208ad759b435e92d205b76cdcf2aad57ec57cfbac55","bf5e7eb0f17e8c79a37af9427eba1701943ff435ec76dab761a75ef057bf2851","91c64cfd2048c4a007581d61e43696509687ed76af4bf7cefdd13261568b6086","3305db347006cc06843e5234adf2b64f4bc0784a2a368eb14debc900f94e6aae","380f6724917db6c375494fd3f22ee5cdf00ed4c90a53d41d5dde7a684f573ee2","0dbadefe4dde4075fa602302d847cf903fe10e15d7b957460c91805cd6369f9c","96fdecee53bc8d2e40687452b0f272e551842d126226e151f9efe3315cf2a6bc","6b03c0263a616a0ff8addb3b35f2dcc4d2433d4521339f302111cff930dfe9c1","93371dccce6b3e2b648c89f8e6f83618af5f5bb40ee297974514f83a72d0c3e9","056fd8ef053aaf62503a678b4ff68990cabcff7905f4b3ee1e34abe6f8afe5e5","31fb8252943b6cbb37bd0e7a84744761c8caffa80944516d328a575b87ee1d02","a97f6277d761458f6533b76bcebb8b9437134546e7dc3b1351b19e233e17a086","8aa887cd2358dc96e8479bb8d0b2cbc15e62e4e68968785860fd239223eadb57","8b529248b113e0cdb73f8823f3b54d576cb1ba9a6b646ee5898294f79653bcb6","698ad683c4e89d87b7e422a73a0574126272ecaf2e6c45ac568bfeb8ab4370a3","8336437ceb8f6326f0eed66cc5d02ceeb20eb8407072b31e3b862fd445b6dac1","66cb550367e770561b9af5e594df6428c43577d0b0e633bdd48c5babb265e632","7f39bb84c93a5027be17faece8b24104c794a5940f15d66d6273768d98b46a17"]}},{"panelId":"page-005-panel-01","sourcePageSha256":"1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f","mediaSha256":"47eb640ab859e7eb02a621ca23dfc12d50d15a88e74ee49d9300e0df16f88e59","videoSource":"videos/page-005-panel-01-47eb640ab859.mp4","frameCount":240,"sourceWidth":1392,"sourceHeight":660,"duration":4.0,"width":480,"height":227,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"pack":{"source":"preview-packs/page-005-panel-01-47eb640ab859/000.orbf","sha256":"bda7a316c6c85942a31e0962051475b3ba475e31ffd4e96f1927c6eb682b7041","byteLength":94232,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"frameBytes":[3514,3694,5134,3406,4538,4096,4658,3274,3200,3866,5148,3378,5040,3738,4424,3394,2500,2780,5106,3338,4988,3606,4022,3186],"frameSha256":["c8e864177b9bcb8108620785ca0a6794d091612ee9300225d021753737738fd1","fbe4445bd60d94b9ac1bb7ecffb9730ce9c3ff93a46b8512c7091f6fae72b7d4","fa26fcbc8117b2f29197f8fdace07ab6e3ecfce44e26dcc0d0c50402de160809","8d72bf3130838e791b5450800b5b3875d00ef8d8c02680ba7be5e80a9c1f0e10","7651f768c4db587a9f19f831a6f37f9339406395b6d27a1b85097d4708a79fec","8b7a69883a5424f7aab62acf46c9b6c7b15cd58ecefb9c071b28b878f33e3771","a54c81fa0e981cf97188d6f8460332142c0d90d45104b26b54dd6dd30144efb5","dbfcecdbf82cc37d911249915febe8e6d8cfbb2abb4a3c9b595c0106117b2c39","047dc604c69869a82f21320c3f0f197fda0f197140744e75617fb641e55b8571","230af25f123c172de608fbf805775e0be665f9e1e264f482c485235c454cf098","0bfc0c2af9c7bf225ddab612caafbc44ee649404768c89bd6c7fa6dbabfcc7ed","e864124a1e510e474360f02869a273c199148947620a044aebd21e5db27674c7","639712930f0b291815782ce1ccd258b30fd32d1406fa05310d83e135bf9debab","db0a6389aa525bdd8415f7b6e0f01cd83151a992f6fdc34c5398e27d09090e76","ab6332fa04fc37820ae4c2f61fdc5447085bdaeb14125dce575eeafbb5e21631","e414842db8bbedff1d2dd16eada1576849c3dc17b12e44df790a39d293c82785","11640913bb20f9bb3fea1ba241d7f82b791e008b0cfb528c32c71aa453054338","e9afbe02487be7da2925c87682be85b6aed889e3bef63da83a7845ecc4775b1d","bcba81bedba09d308e0e6ad73bdf6e04ffeff51f012f3a581c2e5de73b051137","0673eda2e9f6695d9df62e5077ceb63d2bf67418af2f23a89b88c55e44ca3575","e06f5834e91d0952414c8b7b95bad2fb52d841c6d57266bb5da43903e23e0f8e","66d02e957c7dc2d260790effa792eda22000ad7f4e0eb926ea2ecb43ab15c5e2","869d8f84c29f9a7806c34d40eb52faa59eb9c0bf0177c4917c5f6382b63ff173","365f37671a3272b6d78e04a18785f5763134c7bb525d098d96f4ed61e1be605e"]}},{"panelId":"page-005-panel-02","sourcePageSha256":"1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f","mediaSha256":"74866a546608ef7714fe30c0ece81ff4e35b6cf1bd3ec064bdab8016d14e28aa","videoSource":"videos/page-005-panel-02-74866a546608.mp4","frameCount":180,"sourceWidth":1090,"sourceHeight":844,"duration":4.0,"width":480,"height":371,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"pack":{"source":"preview-packs/page-005-panel-02-74866a546608/000.orbf","sha256":"c61937735efecd58d2a9eb6bda0d1edb4137a025d8fc4c8157ccb4ba3c95ffe7","byteLength":338112,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"frameBytes":[15544,9552,13548,14140,15528,14262,13004,15826,15750,13556,11246,14574,15058,14166,12680,14790,15832,14218,13146,15596,14664,13982,11680,15566],"frameSha256":["007dd21dc15684198c336ec11cbc85f04764e67a834e912add9714251d69751f","1f67ccc2a7ab63afa448ad22703e6914d3788df0f6701331078a88777980c477","66458df6cc6616712a21905a7b2c2e47880abfa1e4f31066ef61f3b8fed4b954","1cd26776c9c09b8f28423e3db55d64a96bcce81934bc9c800c2a0b536d2edc6c","0606490ded120fdcdf5de8f77aaf770c9ca10ff7457a398219614c0923543195","45ab15a553c19f9e7e50fc568c2d54cbe6d051c716002d8845dc51f0b90e6bca","7a6868f090c4ef8cb39385953fa08a6a9aa8d34ed972880304d7063022cc6973","1ffa534e2657beaf12babbd64ab57dd0d6067f316596d4fe452ea67fde692a0b","0403ecce58ce0df757c5aeafd9db84c1ca6ded8e10016830d966673841c6377a","fb8c3d91641163211057af081ce414498afc24ed2aa9845e13e3e77234549d14","e93d61c09b48e60c911259a3ba58abe72b60bf694c36a0ffc37f4024aeb82292","776ce55771aebbd49ed019dde15a9749b7cf2745a2ac5b2840e0fe18ad49a4ff","3bd4785084c02abe625f53348582dcc47a37d9514a303617ba7fc126dfbbc877","9210fc0defff72665ccea87c6a3afe4c04e8989d58270b28431574baf53a3a03","834c6647c274539514dff776d3a5f1a3b17169bf9d7e9e27ac74523e8db85325","da98e9beb68580c2de46e304aa0da8f5fd4378fbdb8e47efac141d8ee40100a0","06263db1e67524dfab00683385f1425ff6b1062a1a814f43c0aefb2ed03836ad","efc9611e69e0b9465984e93eff491edb23dd88687e32e3699f9a88f0f1ed99dd","a94839b98c891f71e55f41d790724c4934b4ffec31d05b5c501e5860eaa049ef","22babaaa09509ac0cf76eed5b348a4c150174b6b35d6fb9cea0b3d548167b0e0","0d007768ee0fbb6e628728530a41d030c3d0046ffe79e1c4973bf4d256331403","ba045ebb026a95eead9d47556f2e14b6fe5073113947b87b49b622e4ac85fcd1","74aa65697aedbce3cfdc7cfefe4bcfc06b30227379074550251711a243d3e799","9c5368627ee96b55934a8b1c8beacba74dce2278149f69af50e0b6348e71d93c"]}},{"panelId":"page-006-panel-01","sourcePageSha256":"e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696","mediaSha256":"e28232b2f6664c0ffa6f3c7f20e2e0ba60f7a661bff34974ba61d745004d1a4c","videoSource":"videos/page-006-panel-01-e28232b2f666.mp4","frameCount":228,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,114,57,171,29,143,86,200,10,124,67,181,38,152,95,209,19,133,76,190,48,162,105,219],"pack":{"source":"preview-packs/page-006-panel-01-e28232b2f666/000.orbf","sha256":"6a8803f6a45e75222df32e359481e3c133e731ef6d1993aa5dfe88df3c4bbbb0","byteLength":463022,"indices":[0,114,57,171,29,143,86,200,10,124,67,181,38,152,95,209,19,133,76,190,48,162,105,219],"frameBytes":[21204,20620,20546,20156,16270,20070,19408,18434,19690,19986,18698,16634,17556,20266,20474,20556,17938,18546,17640,15856,20784,20254,20470,20762],"frameSha256":["fb61e6715c9724c2d3420acc13193343f7d4628e2f34511010234e5384a60328","51860a5e4b626ea7d4abacad887edcd9b9864b98fe2d355437bdd051745967e2","2149952154f3d235d49c17f97ae07329c5f741d4036fdd6b098abb40fe4114da","bf455fdd572bb0f0c76ef7f92bd9f7c632355ad0655b16213369c8a7b1220f96","807a7fbd0222a0ec522fb2af32db07147629c0348dee012cfdf3aedf64ee1948","279316c55a6c44c0e70505b764549ab9b3cdcce60063bacede2b662e71517ca1","fffef0f406335354d5e0ecedf7b29d3ba13ce0e999205666fcbc805a85545138","a6f5b6ec331bad3b6a516219880104eb076738ccf07b52de412ee57319f043d5","de7a9bc69728dafe7604b45543c87531cbf2ecb73f150a28b4d35706770c932e","40151f708a74f8aeaa43bddbd63d2ca15870be1a8473f3c56041bd402596bb7c","8ca03004a13997ad7d25f3721a689b98e8cc114c5daf9ffb8d9be2242d883b98","5ef89dcb31e156a66bcad98711e01b220a4f30870acd4836bbc225066da27967","750b395c2ac242d895507eb95db91a0c5e51ba74f8c9af72bb4a014bc869419e","33b6cf0886daba02f49b73e2c61d07c1732784112460539ff855b8ea334c70c0","92e47dd7023b062e0cd12a96d736d29b9e4de72dcd92da27726c1ef9171b305a","c0bb0989b3f48b196315a74be07ba0696dc304c53c64b29946f33be89155cc09","b4b7a27ab51c8004f1caf24a9ffe63c77a7228f8d0801d48952b4baf83139cf3","5f5c222441f3b31e75dac59b7dfe0f2a4fcff35a23231187ed69502f2a36d805","24eae4b792439ad6cec939ff97764dc3ac29627d52d530513a7873dea61674d4","0d82863cc6714f8bb37a39ccd6e9f4daddd8aae79e029a349351bca54fa8bf7c","e98fd8e40fbff93a6a1c4859ae23e8a439cc646ed5af68e47405dae25b3c7c26","c26241d1b8df5753b2cbd72b11a94bd4d9669013518e536dea6882772b7cef30","bf24d505335a368650bdc0ca228259eb9292a114859cbf0229666f4029c14e05","a0d88d29b2cd1a68ea476ad2ecd07771c99c72b288638007c02d657a07f18cc3"]}},{"panelId":"page-007-panel-01","sourcePageSha256":"b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41","mediaSha256":"ce9fb467b2b2df41c915edd466f8daefcb2b22d0fe755ea69061773f6f7c1cc6","videoSource":"videos/page-007-panel-01-ce9fb467b2b2.mp4","frameCount":164,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,82,41,123,21,103,62,144,7,89,48,130,27,109,68,150,14,96,55,137,34,116,75,157],"pack":{"source":"preview-packs/page-007-panel-01-ce9fb467b2b2/000.orbf","sha256":"f9d5d0c48bca804c0e8ea92e46fa1fc9cfdbce4d1d7ed11351a01b2607688c8c","byteLength":412608,"indices":[0,82,41,123,21,103,62,144,7,89,48,130,27,109,68,150,14,96,55,137,34,116,75,157],"frameBytes":[19782,15526,20204,14572,19362,12556,16606,18730,19908,15962,18042,16526,19400,13224,17498,19414,19338,15492,13660,18244,20066,13232,15558,19502],"frameSha256":["05e4a51164455c5f8f690588154d1d65c8f6a7ea4508b7c96cf6595bc58aaa2b","6b7dea6d5ec311891fa070b1a9679a7fe4fc99c3cdb9ad06cb619d8aa2846574","4aaaf9660fac48617472c3410c54151f3553d00a416d517d97f3ce61e823bb70","611b3f423c4f10873dfaf59fe71c864172839e194320b3191e9921c098d0f4e5","972b2c947ea9b0d18edf601544124d7d66596b6d11fab2e12c1fb5932b55a49d","ce3021546709c3f6689fc289399c7c45e7986ae13206ca5778d91df2b80d1114","f332175ab7ff8ca3de5a094179d67730b9e01fba4e7e0cad4994784daa57d228","4e98481171622a1079690d64cb70d43c2ee50aa5c872c2b6255827b7246087f7","890ab269eaf54a3a7df6be4f6dd6152a94613747219266accf31e555a9be7b9c","a497bb03e60715f3f2be12e6bf6ce662a44f6bd616814bd96b3d82774c8ffa8f","85c3ba2433d01f6a05fd23a9cc770a58f9ac434f90b710c9be5ab218ad55d9cd","6a87b30195a754daa69fd95d7d4a200f654b490724e6524a079e1122ae666d0b","bf769801cce13ff7956627410e157384fb2753452b947eeb41acef85f8a145e4","f7d31751436f8c0a8b7446ac5d1e030a793f6eb3ea81ab6add534d85f12d18f4","c330d13faf00dab0ee605741c61ac460dade066c4349fe2c17634a9a931315f1","6fa45401aeae81cee181e266d23fc9eb933394f08cc67751e6db24cb5fa73c18","4a1b8a5c64577fdcc84192ab1b2fa7a8be8d328dd4c79a677866ffeb5e333131","8729a449207aadc77c6a3b4cf49c505be0c68466901f2b736b291af0e189235a","ed4eb1c017f919b4a84b610640cc7b62f289b7712da462fdf30a6f5a1f0ace18","931787723f7b335d1f56d7f041bd9387e6d2065559fbe568f4d39206baad56bc","84bbe7b79c3afcf5fc5026a3ef25ca5d1c06cdd167378f967dd7e261a0951892","7b79b6c989c1e0b5aa928f662819f8c90dd4e2d8e9ec1f78308dda3c418be8e1","658ac8a9dc86ac769d463e10a9f48e21031bfb49236c47d7a14f50938736c097","068addb2588d5774b9f7ddcee3a5842ecfd97bb9f6b91d67f86cbd6378e13cb2"]}},{"panelId":"page-008-panel-01","sourcePageSha256":"cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d","mediaSha256":"dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b","videoSource":"videos/page-008-panel-01-dcbadfc23d5e.mp4","frameCount":240,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"pack":{"source":"preview-packs/page-008-panel-01-dcbadfc23d5e/000.orbf","sha256":"fd7e62af2362b2345ff006f23587e99e0214be19a3acdc497b1887642c444af1","byteLength":218758,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"frameBytes":[10070,8330,9012,9042,9854,7932,9102,9864,10012,8070,8618,8834,9698,8366,9286,9846,9788,8104,8686,9192,9418,8806,8788,9836],"frameSha256":["5a523c66fd609fafb5480f7e8f65414ba70fc1a4863ea396818808bc6ea81ec1","3e6a88fa5ea30db78aed71479b98e7d45478af2380632b020817e51036f33dd1","572b8d3a2c3a8e301d848312b3cb16265c31672cacbb73c3f433af0804d06f19","a39960ed47741d7b2cabfa49633c9ad12f6e285760d33dcfbdec3539e892d911","590e9e259a07436bb1357cd0f8232bcd7112a19a3863d9c0d82213506f6ea6d3","90ba8610f22a650e3f631712be9f7fbbf2556a4dd6285b64269e2bff74e5071d","2c742509c344fd16391a134e877f17b99c2ced9be7972bc2e8fa266f7b52d5f4","abb9bec4b9cabb42a7d1fc8cdcb5f1203b9c7955e8d587158581cb9af683f65c","04e0e2cf1c05bca7b30b8606376991cda5a4c0f56bb834bb64aaa13a935eb81c","d5d26a4256a699a2ecdfa719802fa35c5b29f5b3dc1319c37f34e7679373fb81","2168b45327258899db0c3828d8b131dd8872c8dc17c9edc0e4f7a142e99cc571","d1c235af4c4a202f31aa83a58441e725b6f8dd997bddc9de362c8f7cb1680345","4d570c641204420de8f592e23811685c257c6c976588d53ebc88bafda745df14","ac3f43df84da57b697f79e60e756a823974c9b1f5d6f989e29f1d8bd12972bd9","f895213fe35238beafb1c1cef12d1fa9794d165f2c2caf21f4447209530f1871","0d3e1b349fa1ea559cd1b397f34c91b6a6c7c84fffd8f814227912a2d299caf5","d77fc23a6dc908b877cd5fd5918fdd6ab03d68bc89cea2aef8e5bfb0fb14570b","4cbf0d2865123219152d414895f1cf3b61ec639161a3f2013327e79a1321a9db","418186b2f084fe7e9c7b07501328e0d84f95629fb9a3ad0396cd21c4eb13af55","fadb41e31beba87a6b8952b2127c4e0e5adddb4bf37d5c07f6cd245773f2ebbf","a8a5e00471b879e0dd8ed03083b67e68fdcc90751abb736854b241cec7677d79","b4df1c1ec093078a2075df14451dc514aacbea8f5941af079be21acd86438ed1","9254620a8315732b73da3a8066c23013972f0fb8e45f550e5b7e1b5b109d2821","dcb7f4a7eb476b7a8a0eff5d99bdad41155b089209583d8382a00d804b61f2c0"]}},{"panelId":"page-009-panel-01","sourcePageSha256":"5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1","mediaSha256":"7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7","videoSource":"videos/page-009-panel-01-7b0a43fd624e.mp4","frameCount":124,"sourceWidth":768,"sourceHeight":960,"duration":4.0,"width":384,"height":480,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"pack":{"source":"preview-packs/page-009-panel-01-7b0a43fd624e/000.orbf","sha256":"48f2ca96b7b47305cfab3f66ef36fd1c28b78380c852211ada1572cba34a7070","byteLength":146888,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"frameBytes":[7842,6776,4540,4956,6434,5156,6100,7266,7516,6454,4754,5706,5508,4634,6540,7588,7094,6074,5320,6538,4916,4414,6790,7768],"frameSha256":["7ca8cfe40db61407e1e672d5dba3e674a6a0b64c7ee5f8ea8188a01d667527c2","da90a10d019085a37de858ad1515e68be08e1329d82a81e2c88a495ed2e68a5c","689720aed6edd082bc71211c88268eb8e748aeca04248440df2236fb4f6dc982","8064dc1485cd4ef1efc3a1770b2ef4ba96cb1b7065616ac4e634aefbd1514703","760fc87b0464cc2b37ac654b78b848c9690e1ed1277a0a6f3df68d0e7c612a60","c5199f289a78dc97c99761441cc7a16a8b8294b11cd4dca1c2734d47c38a6859","b94d66035d38c579842a1d848ade37454e9a5dc64885e70d5af673b72ccf7cdd","ff826be9d0c8cb84a6ef0ee64620bbdeb084fae4809cef851fc688b19517817f","cb7df603ece4ba5b1172862de60c9fcdcf74891709ff872dc5a41677118b710e","97d99a435d23c6869a1cdd5862b5c836bb0815819e939e4c6eec45ab538b39fa","5b458072a00f29373bc6941ac5088607dd37e5c2eff168177af394d798a7433d","213c0812524231576b48d602b8531024d59f10f5b8c9026136b998622b8d20ed","43de5ed9641f955d1add68d46114b130e95db56182541df5c97f6eabb9d92df8","b720e2382c8baba905bfd3bfea6961dd1830011a4d8d8d5cbbc00cebd1e062c3","92514074334f5665b74664123fbebefbf4f155418b8c48dffa08cb4964e629ea","f6e27593e04a150ffc775e6267532a89d4aec48e3232d0c7a1750ce01a721b42","bfa1ce355853288f0184011585afe9c975a10dc798da64d686469e336080173f","3e5144a3ffb42bdad71a84d5ee40f84ec5833e91c64411b7bf6818cd468b30a5","549580ab8a34431e36b805cc387346612dd7c8aad40a9ed4cf48489949c4fb2f","350320b97e01852a380ad22afd2387eeda102be71adaf1045951740e4a0edb19","87d6834cf5b694a38a8784d7240009dfba8765c38a1027ca42c454d917785f3e","238e26e6d31960cfb9ac0fd2fefda82389b80e5b583d1708c8129ffeff6bf4f9","485c9585fff781af95f646a018765427b755dff216c0d9cda17b246af5783bd6","b420f210c135fdd43838af92ed58d907c16dc97152740f511459586f8abcc3a6"]}},{"panelId":"page-010-panel-01","sourcePageSha256":"9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070","mediaSha256":"2be85e3ab05e763828610e9c57932de58b8f97bc44a82af5ea893bf9cd08750c","videoSource":"videos/page-010-panel-01-2be85e3ab05e.mp4","frameCount":180,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"pack":{"source":"preview-packs/page-010-panel-01-2be85e3ab05e/000.orbf","sha256":"962121da37f2b5749429445ac53e4e8991d688dbf66aae24099ac6b7edf54ca1","byteLength":390398,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"frameBytes":[17228,14526,12184,18644,18992,17896,13204,15924,17112,17414,13514,18268,17166,18306,14000,15522,17314,17832,15302,17458,14484,18182,13418,16304],"frameSha256":["c67b820e29af571eb3632c1bbb6cd25955d046292fb3b36a5024ed435357a4ce","0221975bd6c1469ca43ce110ea66aaa3a03c8eee6c1df945895ac989b43a3bbe","d1ca127684bb9c3c3be1a7f99111055a1eadf6b3624a7dd85f1147fc41815b16","2b0c1232b1ca55534df0cb5781e6f0bc6d0213a9368430cbf30f316936273138","9d9a86559caf11e503bc0e08618a666f3301c2f377133b0f04a207029b6958cb","2d9ae5d1877f22c876730301dc0f97ae28899dd9bf97e13acf91f79090930fc5","528d461141a1243989b1a5f8b5dc954a6542b24d885c1412c63ce42d8454fb16","a2b6f12afc287ff60226c047ad97a6d55802d3e203613a05dc44e4c482570910","5d321d1dfff01d9eee6a0aefac380c4287ef3dfdd68f2e04b201d12aaab43860","bd8300706376b935d851413766cc83e61a1b2982afbd035fa47f83e832060590","213b2f7993b91abecd7d0c34a19fa3eebb4c9874a9d28f844cb3b914b1aa1f4e","0d6861fd266889369485366e2137a067138972db37e0c1555f0365a592f918f2","ead7971ca8be356dd69c6060dfb78517750991e9359f5aceb62e87852259a012","90a8fd8adf4a3c1457bcf3230b8e7804c869f2280c4e75c360c5ae9c94760066","485c7fca57a216f50af03ad9ba8862f1bee6acc46a71f30760b91f6fac99c45a","d6ccb1cebfc408408cd77fd4c81fd8e9de2667d8dae0e0e0486154f574f7fe9f","079b01a31d24b1a008ef878b8fccf47b23d3e989f91a823b53a34dcbbef41614","9c3fb6228c12dffabc9fe7bba4a8d1d631fd2290e9716bbb39a76d1e30f7cc4a","4fd8806b3e4fce8a2b8cf6eaaa903ed063bfdbd1730e44ae5b8e4492384d363b","71d5ac66f136002a99c3ad62247aeb3ef3e7dcd3e7b755bddcf06e65dd7a82cc","4795f1fc0aaa9e140c77d4ff29ac4b08f15d73c66654c758c7466dd2cb222884","801e4973c866a7f7ae09b5248dca8a643beaa2eb598ed016259f45a4682ac7d9","b0657d6038564758dbad6952b286c38f116a1ad0cebec2b0ee175052b7a6df92","91a68f9600cfc17243e729941a1a48688883823f5ecc3a96b77e693cff06f685"]}},{"panelId":"page-011-panel-01","sourcePageSha256":"d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4","mediaSha256":"3a7132420ee72df5c9fcd7a4696d9392416be29005675ba5884656b4eecd5b5d","videoSource":"videos/page-011-panel-01-3a7132420ee7.mp4","frameCount":240,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"pack":{"source":"preview-packs/page-011-panel-01-3a7132420ee7/000.orbf","sha256":"2068cd9fd16c7cc034bd2c9946842344ba8146621fa4d46a3826597767877913","byteLength":381858,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"frameBytes":[17276,14580,16164,15874,16760,14998,15308,16922,17100,15204,15920,16230,17036,14454,14460,16952,17134,14748,15784,16746,16144,14570,14414,16876],"frameSha256":["ecafe60d6bd13cb27b2c22b37c0221cb05e26e40577c18dd0df58287b0ad9135","fa2ebc8cf2dff80b01f65bb81bc4d6b52104811474c42e3847d5aae752733801","255d365e9ed2784047defb17b2e9ed495596fbac2392d4a4911ce979a470ce09","265b351df78f3c43c255f3086e48b3d39b985535c9d6c57c5315877e22062743","ca690d20241cfccaad40f27efb897fe6c25aa1ecfbf553ebcfc31f439b29b10d","cc0122643dbb68565c8ac0552e40e498225bd11fab365934d0e8aaf53152797c","013bbdfb27c34ef57983f152b8ebb5eb8b6243ae56a2732239a55a3b9369ac75","f0678db7c468afa71aae23c9acf926eb254256195fb0fe87564ea14b0b171af7","263f435f35c8484b4afdbc768a3a258234510d1f10d97bfb86568b5596e0ace5","181a3e660c91d4d7ddcfc1347ae6b59f2b5f1e3da06666a4d475257252b89972","a71804e6d8414fa21d6f8a7306ffc81a1b70c0bb1df1e95e9ccf1a446ac1115b","9d0c0ffbf6274602ff1b6d557597212fe0eaade06ca7d3d4fe050fedfa330613","622f022aa5683efea004ef1684b4fa0b49951495dba10dbce9a09307c3a7450b","c16084a552a85a505bb27985cd948913ac3202d371f2a40ebc505fbc8c1bb08a","f1bab1df7b9d04bdfc44726f8ea4dcfc6ea8cb7fb98a95cd0091223e433e87db","998f14c693c39591bc070ac70ba9b2529d4dc5165dede6dccc8fa53073f2d788","98cbf0255761c7b5cba541031a82a75c8e57457b6bf1207ae76a0be7a2e56a88","cf429d4ec6797e7c3c3a755679d380fd6599a845514dacd048086c93e8d06f3b","ed1d2d854f803f6ca32f1ed5f17fc80a4d6587c0faf07bbdc21b943e019f030f","6e9b803207da7368ebaaf94aa2f78f0952b4116ca88f0e34186a2ce5631ab185","93f35129b44d9f040fb3353baf71bc1bf301699b10cb358c07888d7ace853662","cf5923494a0480876c496e457444b57ba4e1e21ac11e7196c856c38708487578","f49fb7ffa80e6ad946e2300f09c66918389b702bc25b1bfe2837681fa4b5db45","3aed348d56a9891e18e3db6ff7ad5e26cfefede7c54da43dac91bee02fb0e4bb"]}},{"panelId":"page-012-panel-01","sourcePageSha256":"399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa","mediaSha256":"c315e2598a440f75e8d515f267584a5d4ecf89150b6a07f77330716cd1ff4d2a","videoSource":"videos/page-012-panel-01-c315e2598a44.mp4","frameCount":240,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"pack":{"source":"preview-packs/page-012-panel-01-c315e2598a44/000.orbf","sha256":"f78f323d7e7ea303fa34fea851de349996a70d67f5647fb356449b9a726b905b","byteLength":469746,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"frameBytes":[20066,18912,16694,20972,20598,13198,19662,19716,19870,18852,17916,20712,22546,21014,18082,20088,19888,19982,19550,19688,21484,21084,18912,20056],"frameSha256":["0b2fe8fbc8951d508a55d3285d579cd2f8e42c7dce6383e403d8949a8363c74c","8db13fd53c69a057459a01ad491379723432a9c64a622396adfccd1c362f96f8","4a7de0364ed766cc969aef9173f2eaf9361c8a7d4cdd35065923af05cf6d8e20","0eb9e3b96cf2e06b4252dbc5db5c6237628a9560929f427a8811dc74d4020e00","dd2d4046b08de8d4fff3377be176e2bdb1c4846e88e829a87aeab7ec0e6ed41e","1393a4ac85ea20824548122a72ae992513273f6f004a738a012e4f18b7d5da01","c03013693d8b11ce2975c79ba07bfdc3db9994a8267afea16440ab2d22c7bcfe","c7ba3143df8742bb3d5fd60872e464b7d1e35ad233a142438c1fe52dbe7ef4fc","c3fcaf0b32883dc1639711d5239a22f7e8e6c6f26fdbf2cc49ec8ac5e4c7ee87","86c7e5cf51accef62826250a6f973f0d657f97009c22218d42619be53f76c600","733f0c809efc983e754b2ae64dab821d6b0a5b1456ef696b1dc4f9a349b426ff","814c4c982a3f83f0830a2d0b79a4c705e39765626dc35fb54216dc7995ca9abe","23977c576d440e740fa2d998533dc7c0a3d9c231cbf5020c9b85f3ac5fe10bbb","5c1763c6af7be7280497602eaefbb111b3b4d70efcc9323281cbce4fd4562e30","81f9bb269abff6e44fd9fa1a9fb993fb6cf4047d411eb6e36f3179065a950115","a74813838cab4584bbff78cccafdedb112347563679126606383c679e36edd05","5dee18036827bea5cdbc9373508e4d08da4a1a3569d1034eb20aa52bd1da578d","463e2513ad492e30d8c3ad6fb4c10f3828be56a91456eb0b7ae51a402d6162a2","0e253791603500792e88e9a62c9908cad68f5f51930df7a5fc11543dbccee075","0b0fc2795005a1006adb078470913aead1a74ad07059a0f0b6193d6cbd5feed1","2ae5b8f00ca4208d491bda59e13e86b939c69523c162c8cc67cc650c039342a1","d293e4bf7e50c072ccce3cd7f6689b571edee81b206f483cf336303d9195d84c","71e08be8b6bb859c401afd3f0316a629de622ab4be02af438b2ddbc73014c491","f39b24961d8ecae742b528303a6af6b7c8d27874a8dc33aa45fe0bc9730ed24a"]}},{"panelId":"page-013-panel-01","sourcePageSha256":"d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb","mediaSha256":"eb1af69b0b39bedf79db1e9adf201546f61f84d631a7047c26624022cfb279c2","videoSource":"videos/page-013-panel-01-eb1af69b0b39.mp4","frameCount":180,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"pack":{"source":"preview-packs/page-013-panel-01-eb1af69b0b39/000.orbf","sha256":"060b3e7dd6b60224736b9a2d63ba48da4cd96e960ab296e3f43025c67917e24c","byteLength":404440,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"frameBytes":[18656,16574,18374,13690,18792,16492,15488,15716,18656,16478,17700,14964,18484,16646,14084,18954,18680,16568,16462,14908,17204,15800,16014,18852],"frameSha256":["0130ea1df244398814d036f1d74983d831ebd635f2fe0bc1020e639b1b450767","ffb9fcfa4d02702a35af55993072147ccace22a56ba830a1967f749dbce46423","59db353db8bc159e2213717bbfa2b934f468bcb38060dd3b714f586582e1b68c","90580287994574cc4c83cc0040edc8dabfc4220b8b4b99bdc0bb2a8259ac951b","933c722b09309931e0cdf63ffc69e7902468d928523ebf3f742c446413489ee1","bd9b761f7b1fc7a0a718228b801e30e43438744f5f733513a2536db0fd1d4408","889c9d93b59275aed4da77eedfe38ef690cced8bbd0056b0f40d7b6475cdb925","5a467d546703feb32961053a596eecfe4e140ff454687ae9e848920a0bcc361b","3d5fd66fb78c11789a7379c0ede0064a6cc643469c82c5e004321f638f3f532e","4d22a0060b25cd9f062f36929a2427b078fbb7731b75b6da765b38702ca66f26","8f20b2e4ecdb27b331645186828f35c6efd89707909a330199c14d40bce11afc","629fdb041902b78c4006523be61ce360dac17664bd37fe4e6a232b98a9110724","f8380da88a338dab0013030d29167e83b15367c26ab94eadbf8d27f96df74f84","98c38019b5891b2f5753c49f910a2415ae2c7ab4fa88fa31f9f1c0ef671f7454","767d44ad8713b287112d9210461b1064b30d7cf46e9198cbea5e1b329db42acd","043aef2540071e105b1222d245a28430029ed8c1f3231027dee0c2d915521c8b","2c43be5b9ed132f91f4b07858f0c941c635fb71817caa86fbed365a2d3e476c0","835daea524d53e61df03ee97a87db95a4197ba8830a98fc0087320cc8afc0f73","ded846f36427c1fd8bc9d2f1b5329552504463496f5b1976742aada3539583aa","90841c08ef25e07efe364960ec7a5e82a0b741b9765bb4057e749308ab1af62e","821ecfc32a4e41d4ccaae8df4cdca8b3c13eae08557a230c9c46acb3e3e7e14c","a42631bf3983348f5b6c6b2bd3ef502959ec4f8ac49603d0d8801ae26f7e4dc5","121759e54c9d5f299daeeb3e881e817699457c2787f4ffe1f27a30090e4415aa","32d418fa92853c7f122c120915ed81949ef85c1bd0c70df318f2abae05f63a5b"]}},{"panelId":"page-014-panel-01","sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","mediaSha256":"ff8c4fba139f77aa0562041d9e5b02ff7c6e08561bade192a07e1f584987e562","videoSource":"videos/page-014-panel-01-sharedpairs-ff8c4fba139f.mp4","frameCount":121,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,61,30,91,15,76,45,106,5,66,35,96,20,81,50,111,10,71,40,101,25,86,55,116],"pack":{"source":"preview-packs/page-014-panel-01-ff8c4fba139f/000.orbf","sha256":"bb0f4c6ad809e2acc27a2d1d8595d6112193c331a2806dced9cff1b5d374a1a9","byteLength":211034,"indices":[0,61,30,91,15,76,45,106,5,66,35,96,20,81,50,111,10,71,40,101,25,86,55,116],"frameBytes":[10220,8936,9286,7488,10136,8412,7510,9110,10182,8888,8418,8642,9994,7200,8330,9130,10198,8786,7500,8882,9702,6214,8552,9114],"frameSha256":["8736361945b263724286be0cba2629b7857b35a95b96b7e595e2722a97d1eea6","605dbfa807c39da57194bfc710dc64e03b4d84dcd11ad0e88a4fef45e98910eb","16534fed14e38e85145a047a9fd041c79aa8ecba3df2e738eea5e6c078528365","30b051dcd76538d735ed9c5cfdeb3647eee9ec9541c03b57fb5655776320b81d","c431d038f3f9f8706ac582c66481fa65c77f2ef3824f41cfc287746fa6d93757","c5cf52f4c7d03e5210f07960d5593a018e9f0fdc11062730e1c796eb02f07764","e3a5ec2859146f212b3f09ea8a82a85d89a8df5d9ce206b04064509313bb610f","2ec779f35c019b64b7341b1bca3326c3b2af20cb7d5341b3baa1a99bf6d4be4b","e39127321d283c1325e796d8030e9a54c7b72c553965644cf1dc52ff70ac61e0","194d442f9fc2f29078430b46772ce64a885b8034a35f8e61376980f93e08644d","b65a441ce2b4b20b1a09ff61f3866692c480340b5209ce3f94c22b5087108d10","b43fbd96a6b0ccee3aa6a465bfefe2f650262b3040518cb346ccfe486273fd67","2b1ad2c3079a41c2fedaaadb3faf996d594ad9140ac473827e43ccdc82363466","d107473d45d45aee2d8970055fd27e142a9240d833632c10ada333579dc68247","d8fc8cddc6ded1bd86dd7c249cb26c708097d088f6cd7fc13961f617d0324502","3a4e7de92c1f63597685e25a3f090383e2bfa4239a77680a06945ecd7b81ec99","8ad0c9cc385d7504c82de48f63980e4f31c87cf093b79b96daf610b93c2ddc94","e1e828f0141c686cb9a5dd4ab94bc281e900f50ba95d26db5a2fa7a54c9d0a06","8ec91af92f9bd07711f77ab4f4554340bc6a31bf11c71996084ae51cfa65f2e9","ee37e6ba83631606e4de7b2ebc9e2c93deac34f47965a1cd8b155c2addaf8e2b","846629e9b1fd0913f88910dfb3163144319c1a3c66a48938f7841e9aab9ae162","773940b920b2b5caf9927394024eae9c46ec0a4db2ec0daa7a4f261b99b8565b","b15b9260a39032f3230f857bb81bc06054477116be045db63354ac183e1971d6","58d64ab8895444adac21cdf88a2b195d04b730a39f0553a347f92307fbfdf657"]}},{"panelId":"page-015-panel-01","sourcePageSha256":"5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1","mediaSha256":"7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7","videoSource":"videos/page-015-panel-01-7b0a43fd624e.mp4","frameCount":124,"sourceWidth":768,"sourceHeight":960,"duration":4.0,"width":384,"height":480,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"pack":{"source":"preview-packs/page-015-panel-01-7b0a43fd624e/000.orbf","sha256":"48f2ca96b7b47305cfab3f66ef36fd1c28b78380c852211ada1572cba34a7070","byteLength":146888,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"frameBytes":[7842,6776,4540,4956,6434,5156,6100,7266,7516,6454,4754,5706,5508,4634,6540,7588,7094,6074,5320,6538,4916,4414,6790,7768],"frameSha256":["7ca8cfe40db61407e1e672d5dba3e674a6a0b64c7ee5f8ea8188a01d667527c2","da90a10d019085a37de858ad1515e68be08e1329d82a81e2c88a495ed2e68a5c","689720aed6edd082bc71211c88268eb8e748aeca04248440df2236fb4f6dc982","8064dc1485cd4ef1efc3a1770b2ef4ba96cb1b7065616ac4e634aefbd1514703","760fc87b0464cc2b37ac654b78b848c9690e1ed1277a0a6f3df68d0e7c612a60","c5199f289a78dc97c99761441cc7a16a8b8294b11cd4dca1c2734d47c38a6859","b94d66035d38c579842a1d848ade37454e9a5dc64885e70d5af673b72ccf7cdd","ff826be9d0c8cb84a6ef0ee64620bbdeb084fae4809cef851fc688b19517817f","cb7df603ece4ba5b1172862de60c9fcdcf74891709ff872dc5a41677118b710e","97d99a435d23c6869a1cdd5862b5c836bb0815819e939e4c6eec45ab538b39fa","5b458072a00f29373bc6941ac5088607dd37e5c2eff168177af394d798a7433d","213c0812524231576b48d602b8531024d59f10f5b8c9026136b998622b8d20ed","43de5ed9641f955d1add68d46114b130e95db56182541df5c97f6eabb9d92df8","b720e2382c8baba905bfd3bfea6961dd1830011a4d8d8d5cbbc00cebd1e062c3","92514074334f5665b74664123fbebefbf4f155418b8c48dffa08cb4964e629ea","f6e27593e04a150ffc775e6267532a89d4aec48e3232d0c7a1750ce01a721b42","bfa1ce355853288f0184011585afe9c975a10dc798da64d686469e336080173f","3e5144a3ffb42bdad71a84d5ee40f84ec5833e91c64411b7bf6818cd468b30a5","549580ab8a34431e36b805cc387346612dd7c8aad40a9ed4cf48489949c4fb2f","350320b97e01852a380ad22afd2387eeda102be71adaf1045951740e4a0edb19","87d6834cf5b694a38a8784d7240009dfba8765c38a1027ca42c454d917785f3e","238e26e6d31960cfb9ac0fd2fefda82389b80e5b583d1708c8129ffeff6bf4f9","485c9585fff781af95f646a018765427b755dff216c0d9cda17b246af5783bd6","b420f210c135fdd43838af92ed58d907c16dc97152740f511459586f8abcc3a6"]}},{"panelId":"page-016-panel-01","sourcePageSha256":"f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3","mediaSha256":"3da7e729068283603954b3b236c0d20970c465090666d2d899d82a72ccb7206f","videoSource":"videos/page-016-panel-01-3da7e7290682.mp4","frameCount":120,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,60,30,90,15,75,45,105,5,65,35,95,20,80,50,110,10,70,40,100,25,85,55,115],"pack":{"source":"preview-packs/page-016-panel-01-3da7e7290682/000.orbf","sha256":"379d6b867e567b76e282c5073e76b6917d3c08640b754a0034bcf5eae50e9d0c","byteLength":406636,"indices":[0,60,30,90,15,75,45,105,5,65,35,95,20,80,50,110,10,70,40,100,25,85,55,115],"frameBytes":[18340,19372,11842,13460,18766,16568,18516,17066,18670,18738,14132,15368,17878,15888,18796,17884,18782,18416,16558,16244,15728,12178,19046,18196],"frameSha256":["c3691224d22996b319fd55b839eb356a0254754fda8ad2c872efa5b6f7831633","27b75c12af67e94ab2eed5b913ee6abafe3cb85e3e10d9559a500ef638cc872b","845534c4318335d6240d2eb683980c9e6dfd04a25eb50786c86c730bc2b0b6d8","07c07f9a6155c6a8a26773ec739c0d279d0ffb7f25dad649c9582007a0b55936","e3a9f1f5dacf54f754bf479675635a3a63fbda1b5c0448bed2cb7a675b6a045f","2ec5dfc734ef5485187450749474376975ec271fe67d292b99ae571aefb2ce2a","27e171562a3abbfceb481c907ec33985b28a79788b7c4b308e86ae200d66c52b","fce5a23d6479f757bb5de86243dcb8acef406641c07e6b890c13cd6052100c17","634dcefff6d348204a1b141045700febe55bdf2749d058d8a34e0d541794963d","9fa9da5aa1b6387acdf08558899f1c84b4d6b770a52ef8830b232a9be1827197","b98aae9056e393fd8c76eff9509b83e54b68fd89429480641682ad4293acd41f","3cc4e0cbe6be013f3b0db8af7a269458cc2f57a2ce56e8d47b6f8980deff8d09","1d141785a2a03f9e63b1ee64f80e9eebf16c0286c0f084d4c5c50d1f05198672","5ed5f9b94926b53719ca9eaef7e44275def6c6672ecb7feeb7fc239b0351cade","8d4dc007d89e59f3cc8736ea9b2f7269a9c9b93167c8aa5c17db4be883a66e5f","13c332a847c11f74a6fb406b5bbf29e3f720820198ac1ae23ed8eee9121305ef","d580e280b4f1580eb1488c9688d8edea5b3241ebf312f488439c37c1b822608f","240cae409ebeeff0625fafc5d20f780fc3e72ed5a74a92b959074ed293708079","05565921190bc7ff7b499f18286ca5bcdf7e130303e3edf9ba4e2749d6c17b0c","b2169cd77253abf24415ea4ad86a6cb9f9fcdc1b9e9f3ac7ab2ce09d6b5c9cdd","03650c45b64d36060fdd492693caf53d326d654faa0f2cec6704d282e099459d","18c636e1be9606dd05481a9a2f6636e81d4ea134dc32b4eedf4da129f6540d73","2279467098df0a5078e083942052c3e16e7e0372740366d3464af0a147df78f4","1bd2a68761f36ccb53024b3fe11b1d6f347bdaabf4bc38104069c9305e1d2d9c"]}},{"panelId":"page-017-panel-01","sourcePageSha256":"dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11","mediaSha256":"d9349324d028c9c1f87523fa1f0d749286eed83c0b9f4f1c2482e82a1125e502","videoSource":"videos/page-017-panel-01-d9349324d028.mp4","frameCount":96,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,48,24,72,12,60,36,84,4,52,28,76,16,64,40,88,8,56,32,80,20,68,44,92],"pack":{"source":"preview-packs/page-017-panel-01-d9349324d028/000.orbf","sha256":"6f44ee2f8ddeedf91dc0bef821c0cee217c67bae19ac34b35a7141fd742a7c3a","byteLength":433280,"indices":[0,48,24,72,12,60,36,84,4,52,28,76,16,64,40,88,8,56,32,80,20,68,44,92],"frameBytes":[18926,17772,16444,19356,17272,17180,17236,19458,19584,17440,16928,19466,15934,17914,17264,19430,19790,17082,16912,19344,17096,18650,17186,19412],"frameSha256":["8947abb8fc835c9d100e8167a36817e4f8621d51e781185b63f0491ec9d0e41d","4d90a7a0c8fd5ef2484dcedcd77c726bd55680859aa1fa5d7bd7fa5fb8b97860","e179ee57900910199a573acd0927ef0035b74514ae051c06ba35c50c9eda67f8","050df769ef87f76e65fd7fcbb38dc6ea83a6549b8e41b9a7f7cca2944b427a48","05702709af521ef09b5c4b6fff09ff2e7741bd2227565f8c0ce1d2d11915c361","283e67c3fa1006002ee25bf77388dd791f51c1cfb66e743a35ef2c6898a14567","0a9ac5ee6c98e845862674bc1276488b4a537e2304572ecd3bfc9606ec99a01f","d956afa8edb09b00f66eed3d619e17dda05fb248e7a4808fb4d1efbe62af43f2","504a846e4b60b8c36cdabe6f39afd02629a0fb6eabccf4c329aa5ac922d34d13","59451f23dbaeee9eddac95a31bc1f167f767eeb2a3ac8a59165976a41add0f88","6ede8bacbd9ea8eebeb35e63a855ab6d37de000d83930761ffcea79b75161a1b","b056790a08bb3808e51b6b65774d3bc5530d6c5c67e3662665490e1b478bbbd4","509b9e3badaccc293dfc0d5ffd0c1e6e8d6a64bb820a6f2ff1a1d741853115a8","c67b546800b4f66802c428cb6306d5309f793c37fc647d7893ac68a772219990","a90e4354ddfef5aa588b873ef15c9775eed08ee7bdd6274175379f663d186d3e","1c66bc0c50880a8584c59bdc7793f716f00687dff532b9ae18dc7d84cd65daae","f1a2696bb8846bef2d136514585f6f6e576e3114cd4150e8c29d3b7abdb4be6b","7cf016cdb378df6f27db797840ca6d2ac11786c1b5eae39799f8e212309e35e6","23e22c952f294b55836b1f419cf829233a3e3a40dd6e6aaea3afbb67a65ba527","5cfad7724a79486491614ec34b8fe19d18dde84d5e8e0853465df0f15daf14c6","4e01df666cb1d0baa58984d38b24de96942ce121ba00aa7f5ae5824d0ccfceac","a121e41997721fcc9e4e13a1bf5e19a887a87caa748d3811d05227845c2bc056","36d807b881ce1e569c9fdb937e104ca22fc1d34d3b3fa200287f8df368f5b5e8","bd4efa2bd5471c168f05600bdfd36c610df63f0287f442cd1cbecfaed82cc431"]}},{"panelId":"page-018-panel-01","sourcePageSha256":"28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87","mediaSha256":"ce27d022cf1538f37314449a5db87fec92d6db43079e9b6d047784f836369010","videoSource":"videos/page-018-panel-01-ce27d022cf15.mp4","frameCount":180,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"pack":{"source":"preview-packs/page-018-panel-01-ce27d022cf15/000.orbf","sha256":"f975c8f17e1b164b0a6385a2f14bd69bf0f750f09dddc5ae284abedd864ebd22","byteLength":519296,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"frameBytes":[24192,21336,21580,21392,23750,22924,15988,22664,23706,22594,20330,21228,22134,22910,18200,23374,23810,22864,17234,20860,22132,21786,18474,23630],"frameSha256":["3c02b367f5f25b4cd8130e7aa94bcd8361dbc5b9167e741eae29625eb7998df5","49e6b0c4cd44d1268fc1925161d3e6b9bd750c970bbd837dc7a883a1ea0d0d42","c41f689a99db2be9ef3c09b4183d26fd6eae1fe71610258ef678b84bbd311071","fb4aedce110a627aca00b21763cd0fa3aa8976f883ef29cd356420b58955ea68","cf5771167bebd741c57098bb015f41b3136020ce1900ff509f61643c5d70400b","2a8ff633b1c2e68b13692f3e860f4dc228fed6932f9267fda871c19e01b4b00d","32f7d0132cff8d7952d3db1665b3ac63f101cd1a0bedc308853ebe8de4c4475d","f1fd301aba67c58803bd95861816f2e23d28a4032285a633ac46bced8e5acceb","96d1d829fa63b67cf779d5592f00c5bab982d816f3be247ad7ed25eaf90ced86","3061984c73c94d80d21f12bd00d3e6cea35263557982c9a1c8c4c8f164ac46db","fbd2a4f7ba424b8ddbdef598c3c10b30c9028ef07bf378f63e3756ef88a83d6d","da03c1d4e6a54e16707ac9cf0666633de17993496ce66a0f3064b5d8a3dff753","f7ca9e10c793068225671d7e18a202b0a9441055c1edf55e2c987d1116e096ce","c0410568b3eb4525410e38379d419fd7c8fdcb2f2f2e3174ec2512e577741e1d","f9e56c4f794cb94a80e69c4cb7cd094def6d45d62a910d3ca4ad0487bd113f5d","eeebec95c2bfcf4d97dd3ddc12f71e3473c263cb84aa00a7a60c88a0cc824f12","19b9f9cf071d904ee8d89728389ce83d05dfb371cdc76c475be61588ad466a61","7993ddadbd1a66154b5a2e7e0744913a975614c0e297a53500e2e55ecf0b1ccb","449e550911e2b9c69f07d313b0dd654a8425f94cc401dfe845228878601da7ad","8b8070db2fa28ae6b80a0a6e20ebcc3b9c425d3f0ef2e2d6be73afc53a183217","c52c94879cadb90888b72a87cef9816eec4f7f3883d29a0158709adda67f256c","0ae19bc53b928dbf33a4f59fbcbf3b4e979adce6eb140b1c24b5e47fd06f970e","ee5e3bfc3b7620aa7200cac16e7511b210ae681ad740d4f91b9742e2af628a19","138a19fb6da5c9fa9cf25dae061a1a4c0622927517ea2f46f4dc3349fd06320e"]}},{"panelId":"page-019-panel-01","sourcePageSha256":"192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63","mediaSha256":"72e21397b801032961f52a11b02ae6a72fc9b57916bb09525e26c6227a6d3675","videoSource":"videos/page-019-panel-01-72e21397b801.mp4","frameCount":150,"sourceWidth":1440,"sourceHeight":684,"duration":4.0,"width":480,"height":228,"indices":[0,75,38,113,19,94,56,131,6,81,44,119,25,100,63,138,13,88,50,125,31,106,69,144],"pack":{"source":"preview-packs/page-019-panel-01-72e21397b801/000.orbf","sha256":"8c473e0aff98a2e98c4ff41a0669f6e49d515dd85e38947c5a5418a1952cc2c7","byteLength":140428,"indices":[0,75,38,113,19,94,56,131,6,81,44,119,25,100,63,138,13,88,50,125,31,106,69,144],"frameBytes":[6272,5786,5686,5790,6260,5724,5194,6212,6406,5740,5202,6088,6332,5322,5716,6188,6310,5992,4548,6162,6048,5204,5736,6306],"frameSha256":["0071fd8b9b0c5b28d9adbdea5b2f1dbee1ee326542227bdb052c927b4f12eb88","84eb015d7f783235f323c110d1d8c9927ba2b96ffb8338682f2dc35fca4abf18","bb80f03794d86990fd5ac06490991cf4ecb171df101608cd17ecb753fc5e4eae","9dfc3415ab7322a7f428443746a0558b9638013640d5bc8bd8ce4ae953cfa1bb","f57dc9f5c9a01beb185c14c2be6898160f0f9779328d2cb99ab3d25d0147da01","f9f563c1b54e3c0037f481d5dbf5e274e42283d33e4d0fc0ed33dc6476102939","745993d298cb5f3d784e8c08fbf187320edfff47b735969430d440681158d575","d428c4992a4497e6a61b4d3fc3c86ea4eacbdcb5580414a1a5885a90dc075319","1a832e601a1a81837f4fc9ddaff1edc28eb1beaf7ad923a9ba722f3bf682ff23","3b97d4b62940703be2ceb1ba9dd0b24770fdfe3a5970be978de618ee47bfd397","80a0c6a0fd690a54295b5144aaab92c81fc288e5553bdc19a3273f4593db38e9","7d31f6683391c94fb94dda8359cde40f72cc1bfc7e2c16275693315375799f45","3d8927b0efca8a1e0aed26e71e64ebcf040c0a7cdc545e14c1ef5d176b12ed3a","28e7b1e0cffb5b7eb9224c234a22876c5e12c956c184486f9671a6c91508837f","3ea6d786138668f425fbc9fd537828ba46077564efacf98e624e303b24fdd033","b100e6e92c8af78be2bd6dba8ddf49c7266812ab2b5c7f8d236d2ebcfd4f3014","dc4e5b08eb6d732252b05358590dada5eb6187f343f92bca251f0de062fe5eea","8b3ce246410b625cbdfb5cc9dfb39168f218b625d31ba0e365be374331cff351","af9958beee144d70f8ac601460798382d8f52dce62fb404bf3e733e602996dac","1240ecec2e5cb6720b1778f08f90b976fdc14528d5cdaa866d4a1992c614b502","baf89cbef1dcf186137e59c0053099e5e1d307a648cad85d28c8898f3f225443","06178b19260379be2f10609cd6b5b1e55ea57beba7ca5170b49da11c18a8d960","d3a7b1983ee5ce805db07118f2d8fec5b60e04d2b702756837da052ccd8ded15","87bdf7c899ed1949e9ca310642e6c4e6a37d5b0b79114e885d8dbfd09f8c44cb"]}},{"panelId":"page-019-panel-02","sourcePageSha256":"192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63","mediaSha256":"a6af52d0ef6ac3744e80ec8b014065863239da5a7190dedf1da9fff1f5f00cf7","videoSource":"videos/page-019-panel-02-a6af52d0ef6a.mp4","frameCount":145,"sourceWidth":1090,"sourceHeight":844,"duration":4.0,"width":480,"height":371,"indices":[0,73,36,109,18,91,54,127,6,79,42,115,24,97,60,133,12,85,48,121,30,103,66,139],"pack":{"source":"preview-packs/page-019-panel-02-a6af52d0ef6a/000.orbf","sha256":"cd447e790be419f96f23b6ed3bcd40f397a8ca617d424f25b6491c5f84eb6128","byteLength":573528,"indices":[0,73,36,109,18,91,54,127,6,79,42,115,24,97,60,133,12,85,48,121,30,103,66,139],"frameBytes":[28888,22622,24736,24370,26096,16290,21946,26844,27076,20908,21796,28302,25252,18266,22686,28494,26052,19998,16960,27440,26124,22472,22670,27036],"frameSha256":["82ae6749bbad542af5bfc46654c7538607f6a96cd69ff5e3e9f414ba965b9d1b","4083047885a491e3c5d382e223106814b9357f501b2ed1585ce830eee583e007","3fb37202383f477bd7bfd9baa1976d57c8731898c74094c76104cd42b77be15c","38908254d1c0c41394456e30f8b5c0f706897e8dbd90f56619fa9a9dd73ed838","0014da3347a37f78f56d77f80044a3c9aa83351f99e1d56adef54d357ee2e783","2d9a66238f00858c4198f8fc231c02629f08cd4a1454397c34e4d75a4614966f","82d67219ec7c4dd17f2327bd13bec7e6348cad793739d596c6261314f09d388e","e768cb27a81e17e580b9c3e4b7908f3289653b68a70c3d3d57b50643615c3470","ee40b6c399b834d65870d3d7f3f198a300a43e4a00a8abffe28045db5dc1e64f","711cc0c76fafc4636e24d4664795e5877d65aeea04e2e31099ea825ebdb97e40","f0cce6e9b8e4fc778f98c89f056a6c51f53b1be2f62341ab7d37891ea6c63e86","20243bdd80ade6c24237fa7365f26318bfd6bf420f981018a04910dfd32a651c","b47571e1e1c953053e86e8b19fbafc2e8be3bbabb463a0f77da6a85d40e4dc1f","e51e3ef451259f315200d2ddba968a893cc1654698dec84e424b1085f3287f8a","705ddecc0aeeb71b79bede0a7a73b83583431dd37447970de5c9f283e48ee411","a0ec27c9a2dfd2dc6f67ac6487a0951e167b887611b179c87b3e6c009b39ff9d","be3da89ff201ac1a6f7d9ffdf952a0f52ad9bf81e78aad7e0794e660f3f0d1b9","82920ab2f372d41e30669192a14d4c0cedb822e7a6b9d3a496d6ae01d4d7ff15","c3325ddfbdbc72b105e2d8230cec122090df766c7be0f4cc3e6af3dfa0d01ef1","70e50a39d0f186cbfa8bd8da560de817de4f576d612b8689d44b5294a34049c2","2af3f79b2ab456c7b9506390d19f859bf3c87a558dc0d2b340c7008729fb977e","da6da0b117e6e25fe5b64f5e346efb3685a6bc11881cee6cd2ab9c36a4f9258d","1c9a817ef0ac6aa4527a9fa9e3c016e5639043a27382751f316fbc12350ffedc","bbfe298914626ca99b30fa80aee8661a24b355dd262788c60cd50091e89b7745"]}},{"panelId":"page-020-panel-01","sourcePageSha256":"3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d","mediaSha256":"db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192","videoSource":"videos/page-020-panel-01-db3168ad111e.mp4","frameCount":240,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"pack":{"source":"preview-packs/page-020-panel-01-db3168ad111e/000.orbf","sha256":"6925ad9712c954f04bd376904e748aae2aacdc4635be693cb94ed4e2ef77d407","byteLength":439064,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"frameBytes":[18446,17668,18760,18224,18594,17510,18156,18628,18446,17306,18822,18522,18986,17574,17844,18558,18466,17462,18958,18650,19168,17516,17704,18892],"frameSha256":["e027e9a6041bbaf38ca3fdc51e962096a7137a1b8f2c0570d8721a88edc9b497","6ce60d8a488b6e473036012cad0831eb3c603a0ec2854ea7f1ab0acdcf682e88","385d029f280392bc846139ce7314724990882d957271c6361fed30648f7569e6","0c485e6a77cc581979d98050f5873d334b16adbd16729e69eaf1a906af4b7798","d7d286ee5eb394226b674dfd58c2c4a2221d993ec347cfc467a57748e869f1a4","9ebb9ea5759c2f1fcf96dcccfd04b81db04f2799add784192868c0575343b5af","ea2691a47ebee6264f39a2fa13c21402c6df299f29b61a158f853e10f61a1d2e","44eb172954e821aa551807cc1f3e7d5f37b82ccf2da591ef89363445c6306fd5","428be02b58d4c92a3a0e80094045342daeb89edd3094a74acc1fb0599746ac6b","2ffc10db1d90e205276f55ae93c9bd1915d2984fa9615fbbbc980d1d2cc46e94","28879d246141c511d1a6835bda05c67a523fbe5d485a1a326ed1800208fe861b","896fef941f6c9735fb79a165ab5949498f0e37182c7655f2a86115b548722a91","3467d93b4010ff5fb4e4a746ff9f2cbb499129044b6cd5f2e81a0156b070b4f8","128006835c8ee27e006e0bccab06472a33347a29b930545f2d6b1afa431355a3","4a9898aa4eb0b09d89db8d1a976ff2a68d9964d415bda5655838eae3177fad37","4d122b8ef82b4e1dae390fb66b4010fe88add22332e87dea5c69ae3f914e2c48","41f77651eba0329743dfff85c077e0eb92287fc6701a2cd0a48c7b07016f7f44","3880fb4d0a5cc0a1dcaa2925b76a788430742928dc0be25bca6bbb23d3c0912a","d8ced26322617bf6b242e53d735a94f4ac85df56e983b966bdcbbad186f0b318","26fb516f25d470883fb634741d25e032237bb002a5130cf9c223f998305435d4","04f8898eddaf275f39d3e75db9a5f40511bad525ca7421daea0ecd3813619031","c6c83d3b05e99246f53f43aafbbd3e877f3c64a9361f3658cc8f5c51259a4aff","fc55deb19f5f4cba261d9eda78d5f75e59ee3174cf43d16f2c9456a1e846f036","070b826ad23ee2b517c13b7ed381934a86ea1458260c2dcd0f75e8b70bbc5400"]}},{"panelId":"page-021-panel-01","sourcePageSha256":"2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7","mediaSha256":"6aadb1ca8171915c2eb80c177b6d5dc43e759093955c82fe472969ee6c7a1e5d","videoSource":"videos/page-021-panel-01-6aadb1ca8171.mp4","frameCount":124,"sourceWidth":768,"sourceHeight":960,"duration":4.0,"width":384,"height":480,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"pack":{"source":"preview-packs/page-021-panel-01-6aadb1ca8171/000.orbf","sha256":"414c1c87bc8b782534d73c300cf9368379b78b2e7f7cdbb2f9a12471c21f5f9a","byteLength":214758,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"frameBytes":[12020,9450,7256,7732,9578,5360,9256,10504,10796,9294,6870,8516,8818,7588,9198,11968,10142,8504,8422,7960,7802,6550,9178,11792],"frameSha256":["a847519429742d06f3ca0aa3dfc8b45f7dd46539c4506ca49e16805f5174c2eb","4aa133783ffc98416c1cee35855f8f4249b41d549ae816b94e282ae3bdb1bfba","92af0dd1c6763f5b6b2f356773d04d2142189d4a86b48ceab1fd14cf9182ac3d","a167619cc491491bdee0518703dd758e0bc14cd589b1400086975c8564bd0240","18f1ea26b6e54890e1cd315f927cd4885fcd5387539e935f01715a7bc5eccaa9","91633a7b0e24cc0ddeee5d0bdf295546450704b5c49df74e850bccba38c27023","397d09f0a5b61f685e10d486397aaca2d581401b0a78ae8e428d1a41140bb58b","ce0bd2218a46ffd5dd74441b9d841f221c8935bd7b0913bee3ee0d6a938b2e6c","9e92d55fac1dc410b6f3f6896ca6feb508bb49bc59323a32afb08564eb47b1af","240e89751ee008663514bbabfb279aa4de050f2bb9b5ce70c72872b49d7a394d","1e852b5894f9413fc6e402bf6e38898a48f835164578d6569fbfe771a0980bdc","90b8582b58b959e814293811262e7ede187817a4acd9788a1f15e9393eb4313a","a2cf0a7ea873a319666bd061261479a4078a0a42c0f17da13e1a542c21a79be4","8bfe156600c667ac1abe4aaace7825b494b4a12f2d3a6d0b3725a357aaf441e1","7ccb0873ba6d7204cf3cfa9505c46b0236702e3de6fe879c8cc68b630296f2f0","856d36b8911e5cecdb59a9f0c1137777ca6bb66c794668adb293be023d216d09","8c60cde36ab7901ce08452135a183801878d3e745df460a15526be1c7a22ba56","a3a81af27d823290ff44a391df800a9a2e5525208505968fcaac8d8214042b47","ce69ab764a0eb219c686da53e950af19995382255aacb38992337d5b8ab86414","ead8e66a78c8263d41a86c6c2de3be662666a05b5bf6a51ee92afbd6c563362e","cf65010bfc6cb4eae06e969a0588f67d91bdd3df81120fdaf784b4becc930ea8","8368cccd7359584853677b200824a43d76fe6ba9c4166dff79bd2ef6fdb7b8f2","2cf327ca6016808f36fd4bf9ada117a7da1b8dc66ec99ac6df5409135381704e","bafdb8a71e64d9fdc150da7212a8af025bbbb9554dd5f3213dbdbc818b53b4b2"]}},{"panelId":"page-022-panel-01","sourcePageSha256":"5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64","mediaSha256":"602b0cc5195cf9f3f100167190da398cd30e9431dcd94a6d41042f0162d7da12","videoSource":"videos/page-022-panel-01-602b0cc5195c.mp4","frameCount":180,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"pack":{"source":"preview-packs/page-022-panel-01-602b0cc5195c/000.orbf","sha256":"57cd24f50e474f3ee4ad33644cde1c60292e4871970e33511e105475968a8e2b","byteLength":396404,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"frameBytes":[19404,15874,16578,14812,18472,15734,15434,16776,18892,16616,16902,14612,17116,15578,16338,16324,16848,15066,15842,15228,18134,15762,16848,17010],"frameSha256":["06cd24ef7910ac7d60bc05ef152fe6bcd2a09f91e41f73850e2a816633fee89f","547bf0043cca372ab3ce8e79261688946489d02b3f7e40727100ec9a1435d419","1ded45e62b1cb6c39fcd96ce887ef5da3b885b03ff2f0cfd0ef78fecdb7e31d2","bf805d3d3e97e4b34d43a92cc710c6b72acf493b70edae70f77a483c94e7bfe3","266f2d9c31061d143271316912c392fe4de2e01782647e4f6102daba40876477","676c9bc9db9cd3cc96ef6bd7b39ca51f639c7c29820f87570e1805f14bdbdb1b","f29224ae4cb91f604d0770f2aa951c975d0d17672802bb89e8019c076ce08acf","f14120bdfdd4eb843547843524c36b39aa8548402812f0371889f3c6de2a81fd","1ddbeb598300df0ea1795aaf3891b00d7ea78a6bf528d99f0ec6426f89e4dbf9","313cd8619b5f34384238ec8c2b62aeac00fdcaa665f5c81014a5fb966f86747d","216a71984a46bc2b5a6d40e61911521846daa44461c9601abe391f2863c7f517","603548d99469bfd1ee09f8a2d07c19c3ce36ff1336a54e9d496ae6ae794e2c85","fea455f500c0f47c4c67852a40baeed73173f4783373459d3301ab94fe3806e3","9bf46b9d2b42c44c88a24160e765cfb8ac0227983ead58c530b646b5c0e6a66e","f9580b90d33588a3fa9be859c5efa1b2b37eca8c1b368d9b8c6124130fc77b0b","35aaa2b3bb2f490f8cdad9dc68bd554fc914b5b285a6f354922c4bdfcf8238a7","c13ae3b77b45a51bc2d0fa71682bd75c147850692206c0be1cf1ebeb70b7a38e","3b42121e6af2dae22c3ceb25f692d69b3d77435ca05045054b9b932d17a0d515","749e1834b3dac67f70d58a03d6141743244ea0939f582cdce335c1a3b3bc0870","1fc7d258c9c3782234dae78d98cbe800262f07553d5fb1a984b18c786c920443","63744a60d3616ea5b83b47ff1d33aba006d495d35f96500692ef3d10f735d0e2","9a4f03e3dbc1d939f953b4843d0d2aaee8d65bd6e3db9b64b6d57e1f0580162a","65e0393459da229673bc675436ff02fd026db28dc9bed7fc2b8b84780af7376b","e242d7ff912e256c6f5433f16a5d1c5328a7b147a8897ab2810f6d5fff470c1b"]}},{"panelId":"page-023-panel-01","sourcePageSha256":"f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334","mediaSha256":"6d107e3d373acd5acfab857f62c7854ec90c69ce930abe38f68234d196b2652a","videoSource":"videos/page-023-panel-01-6d107e3d373a.mp4","frameCount":217,"sourceWidth":1128,"sourceHeight":816,"duration":4.0,"width":480,"height":347,"indices":[0,109,54,163,27,136,81,190,9,118,63,172,36,145,90,199,18,127,72,181,45,154,99,208],"pack":{"source":"preview-packs/page-023-panel-01-6d107e3d373a/000.orbf","sha256":"5a1157ab79ed6dec860813ef72a2540da326f37209227763a08cbdffe20a49ae","byteLength":415548,"indices":[0,109,54,163,27,136,81,190,9,118,63,172,36,145,90,199,18,127,72,181,45,154,99,208],"frameBytes":[17852,18180,15896,17548,19194,18178,16386,16324,17778,17964,15718,17276,18022,17420,17368,16798,18774,18066,15908,17038,14946,17644,18278,16788],"frameSha256":["629b53c45bfeadc16f0fb25c6f6c6452b430bc8db6c90fa8242942e8397d97a9","638c3e7342b5175638d33cdf07b980f2443b59b054325bc4ffd34e781897775f","834e80abea531958e643e5884494c55fea74df74f66de980be2f9ca82611596d","a06cfc6956265e63fca131bea1e439292a7cc1756fc8d31fa92fd6626d521721","da7cf6eb580e2d8209a973ce1c2a250b3552ecdd1d37235dd14d2e9ca4a5ae42","97665ca152b1bec397504f8e224b9b070cc151a7de977c6794b3de126e4d9a6a","672cde06e3e5108cc0f20027efd9ab644c75e123c57a2bbc997ba633b95fc093","f958ac5dcc9812d36c2e5d28433277082995f98d383650ba2bc62a5259958622","72b2733402f62aaa77920373d147ab90267c38bb853385d9b851456ad645b790","bc8ab6ba58cb85708a5ccaae3f6600e25e321104697b86d9a3c868d7dc0ba531","aa142597267c8e51ce23e1279d0eab70a7f487f5e013d8cd627b146394292417","3ec3820c97e6ea894e5c3a5de408e8e51025496915601abc02225e9d6a53527e","159d79c5ffd20d29a2bb8851bd106e40c373a2ee17b3abfda5976f5b29ec9e35","1158024707c94750417e165bca5335596585ca0ea8c11f03686ed4892e14e6a4","87a95fe5a8a5b0858b02923f3554979408c58186885f29a79ada1e630269e5ee","72e2594ed083736b65482e2ce6ae6ae8c4d644799ac447fb4f4b28230837774b","18445237ff1509d2a5dde64745d52f2b31e83ae672a2398e27f28ff3ac293ab7","0a2176342b5c8e4c45106ea4501fcfa17eedec9d02c9c70077d73b2220ed2995","d98b30afde931133bbe24ed3b96aa4c23aadcbdb240d087a63b372fb6faeeec2","ece9051f50bcc3034d447c0f2e42d9d9fcc34561091f833111a9604503754079","363585443882ef64e68fdbdf965dd73230650cb6905f04d31dab04565615c22c","dfd300faae23c905f7ac158654b214682c3aac4051ddf92ae996d69fb794db1f","44a5ab911aa6916a2a69964f8c308ba78fa37023fb57d0d1675cf13dbb47e09c","9dac6b2a6a14db85872ca8f3ad0d5f2314b2eea111d6ffdb9f107a211560ad45"]}},{"panelId":"page-023-panel-02","sourcePageSha256":"f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334","mediaSha256":"9ed86aae5d5ef7dc07fa0a1618b6a04210c07e0007d99853eedfa572c6c9b729","videoSource":"videos/page-023-panel-02-9ed86aae5d5e.mp4","frameCount":180,"sourceWidth":1310,"sourceHeight":702,"duration":4.0,"width":480,"height":257,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"pack":{"source":"preview-packs/page-023-panel-02-9ed86aae5d5e/000.orbf","sha256":"3aff1917e398555b07dc642ca41f0670802aabf0041e4e5ac2ebca1732d455ed","byteLength":207702,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"frameBytes":[8598,7884,9034,8248,8652,8270,7242,9906,8512,8318,8980,8460,9046,8312,7508,10228,8582,8290,8428,9886,9032,8252,7280,10550],"frameSha256":["7d668a43e8443546907eb4faa977b8ec7d0c56626441c1ab70ac0ab52bde6dfe","c2b91d6b8ffbcc4584aecac33c5d19e1a9146a5fc46d31998188c8022a239add","275f2200b38ec2dc069ff31be9a8153f2fa1d56fb60f2697ce94f5269f67ae9c","96d7afa7133bd7f3581c040554491978d85e2739592ef089cf9ad3524e2bb76a","7b1c1b66c8007d575cea981c7465a8d73f41afda1e4109c3fd2215fd418f82cb","f5d93c79b5dafc7f79c0d87d115346821b7550b6701ee8b5e1598778bc751321","b65923ae057553e5014d237f5c949cb05d275eda271dcbf3f7ba5e85a033f915","c3c75b0313d76616c459ae63ea5dc5b54da74a03b0ecec8e4ac02899c616033d","43b0738ca0b5e543939ecf2eaa91e9c6b161b1fba5462ebae56a0efe1a2a5af8","625f9d971281d1044a965db11718dc7650efc0a1846180bcbaf5a7b90a00cb5c","1cb7a78a8e9693ff62676ef112a39d660c9393effb57d3de3a6c5b2543002a6c","f77a8b85d48c97c9e1add373da16642c3e6e1c267931fb2752405c9054395b11","67da759f5d1bef25b8b12ac7f308e4b6b9b208d3529922e923e09d7fd122ea6b","61cf4fdbc717e85946ab9527d8be65fc81484c3dec53fee123386c222facbd4c","138b77f787e82a3adf55318895493e34f5c5ff51b8a4464212b7a7cb3f184632","dd2025e0455ce9075c1147807262937dfca057c5b9076e073e31b8dcb29bbcfc","b7fe28ffccd6cfe7c78357128e950f408e221e5bf1bdfb014bc76d2c1846f283","b9ec9d203378266c6331ea7d056efa7dbe7f9fc1f82172c9beb935a0cb65ed50","f604416ccaee3f7fde80f77c4693f341cf1e01666046a11a675e22f43a323554","576776659921e0d2c38ffc2c08556d12d5f590bbf8f9e10886e13a42422f20c9","49d6b8e833f302d31eb6eafc33e02abd7ada181727426d3754573c5fd38b2016","6936979efd89dd7d88ab92281c5ac8c12265ac75226b70b101358fa63e10e711","1ba1de367f80536abb45b6fdab918541e3caef793035b24800e3ba54d121a85c","059ffb37f88dfc472da5395e0648050ea2eb1ea22095117dd3e33638648fd60c"]}},{"panelId":"page-024-panel-01","sourcePageSha256":"885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00","mediaSha256":"cb514202c8470a45fa8cd369a39a0c7b12d9d12b345e08ede4f9268ee9ef8bd9","videoSource":"videos/page-024-panel-01-cb514202c847.mp4","frameCount":164,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,82,41,123,21,103,62,144,7,89,48,130,27,109,68,150,14,96,55,137,34,116,75,157],"pack":{"source":"preview-packs/page-024-panel-01-cb514202c847/000.orbf","sha256":"5716c30602c81b61c84f8f64cb6fb19eedcbb7d64f3d22d076f2707f6951cdef","byteLength":430110,"indices":[0,82,41,123,21,103,62,144,7,89,48,130,27,109,68,150,14,96,55,137,34,116,75,157],"frameBytes":[22322,12232,17768,19634,21820,19522,11112,20106,21972,13860,16856,19780,20776,19676,11718,20392,21680,16816,12116,19974,19760,19590,9862,20562],"frameSha256":["5cd7715df1e4f4c44a067a2a951750a159f7777e2d1fb047ca2c6c84b866df8e","ccd6eb3b4deba31c3a95e951ab07bf840aa1ca6693819f481c61f99907c70c19","909fbe4feea1d67fd6ec66fc0198bbf8c30f747fc8fccb93c19f514ed5b927d9","687f8b8e79d4ac1e1c4ba5f516c28f5ddd2f4ecc98366012c0d16cd4d097e738","ecb68ab731c9aeba0d9d198790f38b035fa3d57c4a757af6832afdd5d12c2020","b0e314eab060008fbcdb253be6767ce3a7bd471af76784bafaabfddc28a8ae88","1191d08835e2ebbc218a55217a8ae2e93fb1c8a0e8530231b1a9165fb7a23230","26ab5c5e82437a24478c6e1e476c4c98648c9ce15fe5a4337510d33380459b51","f8f67f95c32badd17e56646a7ad2a8a70d5aa2bfd7400c1b7917a7ba79eaf16a","dda80e9e78c45588e779d2b72e7b77a216fa81a66695e50f519157aed44b9e51","afa92c6f882870eb84760f551fdaf631967ebc90907840254c5f710de965c8dd","8c9ae406f518c53019097b67807377ac130bd92c976e366bd925f5540f41af4c","042c8c592d089fd457199e200c2a4368c70c1c66778abfe8a7230511e5200293","950c906b7bc48e58b4fa0b68fe6c49cc305d8dc7d00af9454d442ad5848029d1","fe426acd56093eec0ad3c5dd5615062c45b8d146b25c5badb59aa021d0fe5d9f","9f6a93715b86e187e268577d1693aadb1653cf3255d9e77e2df34d3b8dc8374f","f31b48cb29735e3a2f6f360fb87886ead607260e2e6e2849816aceac37f56099","227c0a61c8b1aca7a6a9288185060d42681508f94d0b411180268819f49d737f","8622426402f6d2e6534e5ee49b7c48f42861de8bbd4b7f7d4d43fa14bc02ae96","96080912ebb119ba003bb8d15eaf5157b72e7529380d87e52d90ef3d0e361f2f","ba4f3c783830aa10bdddf52b2b73d8f407446cee8e86167f608e669105356176","d75ad63ba24f37d3cdc24536e630d9f694214c0b655e4bc3dc852b9eb1f47c11","a5824fe1a9a744a7a09c0aa7fd9b086e2422e064f05528142200f28d810f3ce6","0fb842ea16f64f6de5ea77256ba860af73540471838f28d83185e247c29da79e"]}},{"panelId":"page-025-panel-01","sourcePageSha256":"c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152","mediaSha256":"5ecaab4752bfa2ba1147dab68bc68f93d6de3431ca6eb0765826726ecce74c13","videoSource":"videos/page-025-panel-01-5ecaab4752bf.mp4","frameCount":196,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,98,49,147,25,123,74,172,8,106,57,155,33,131,82,180,16,114,65,163,41,139,90,188],"pack":{"source":"preview-packs/page-025-panel-01-5ecaab4752bf/000.orbf","sha256":"12f4a0dc64e9c396c60a5fc887edec6e988281f6fc9bd3fa353931408a9602b6","byteLength":532336,"indices":[0,98,49,147,25,123,74,172,8,106,57,155,33,131,82,180,16,114,65,163,41,139,90,188],"frameBytes":[26588,22830,19976,21710,23874,19382,25188,23264,24988,20306,19230,21210,21888,20278,23902,23046,24578,18764,22200,21954,19834,21002,22770,23370],"frameSha256":["a50fdbeaf4d2a150b9ab06ee82a868088ac044e644bed34eaad860be6bf18e78","43acca9e9212c8516dab2e1630e47387ef6800e847e7759a9f69bb1c33837df0","7554afefba103398de7e5fb1bf76319801e557ca9c9bc68fd8835c011bf46004","5a1df3c828778dd9563ea08cf0b55557379b9df17c89e9ee284a04001a7dc325","adf4011153a269691bd9a483b719963f9436eab47d6cd9961d315ec9a13ff344","5d31a9420f0e9e02188977a3dad6980abb4c1dc9ab9c7fa2e3fbf680db908dc7","b921f68307bbcb58906921f4c3bb6afaf76509cf1a44bbb840027ca1b3396ced","3659a23990c8158456938943e374150f5075ef1d997a9d10d9ffb6ed3faca9b7","ae2d6e96f0af84d95aa9b891f4b3384fe820bc0da1518a9d5018c40bc418fcb5","d76fdbf02941663736207d4fd4cccdb0e18ff2f76aaca72341a90a2a4421fefa","6da790f469006fe12b02c3184ad6e3eb2952b7920832141feae84260921fdd3f","64c157d4b9bb42b3df9d9aafb06d88580fa41a6004af459ce43482d71aa63094","628ac4d4166c33bb10cd53e09ba1a9df46d5edec74612c71ed4eacfb7cc5ff32","14806d4e8798bfe13b2e02a608b5ce12f79b285b2d1a844a50c294190eaf687c","4c2cdd903815ac6ec64a3c6be9a51e37c9063160067139d38bf53fc663bf5259","cdc8c7ad5c3901357c76ee579200cd17b0e993195d55c2872264bcae409c46c1","2bf032672e6d28c1a3c682f0e19dc71ca51980dc6ece6693f77d547a12632e50","be11e53e224cf26939f8c1091366d6f8b2e4d3958792820d8c7191c749d677f1","c1ada1d9f315d29b194ab9b31140b3253b3f588df8ad236192b3991d2c84b64c","bda1607d1f733efb695d58e14d402d3efb11e976cc0f52d04031972f6707f380","4a1919ef14c4383b6096a0f1d979a94514407b082ee20420f4162298d0411886","61321cb95860f09d13d79a7364dd4c05a621419f9460839b87ad17bdc5b17926","5d2c777f44e6c9eb3ca677a0c5b4242eaf07374970f4f65f27258b8e8e527b0e","e93d5fcd4a1a121251b1aa0141f8166b3bc00a11bf1e404e26a62a77126fc52b"]}},{"panelId":"page-026-panel-01","sourcePageSha256":"433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c","mediaSha256":"cdb8accd93304beda858a5fa6157fc66efee14ce0f8f2982fc88c14219f2d689","videoSource":"videos/page-026-panel-01-cdb8accd9330.mp4","frameCount":240,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"pack":{"source":"preview-packs/page-026-panel-01-cdb8accd9330/000.orbf","sha256":"b1413e10f9f6de4f30c4ae9bb5355d8f105a3ac1d67ec246e14f578776157975","byteLength":392704,"indices":[0,120,60,180,30,150,90,210,10,130,70,190,40,160,100,220,20,140,80,200,50,170,110,230],"frameBytes":[17950,13424,16912,15346,17700,15026,17408,16516,17340,14472,16842,15948,17914,15348,16770,16454,17694,14848,17792,16292,17294,14882,16112,16216],"frameSha256":["dc073a0293697b7a7ddf6b386c94ad6cc95d17012abc403935bf29d66d4d1ddb","d3d8a41c6bfc6bdd1e98676a5673e203fbd25584e21329cd90fde57311727d48","15ad6b7c3b1c05c3bf7eddf7384cca7a05fbc9eec67b723411833ec28921ad73","0aed465737179da676c7dc82e4d24a55d1b70c6d47fe6a89858ee329e03f4248","486658ec0a32c6c2082d2d9b75ff137d5f08d80fe4489b349e625a6da577e225","0ca0bb941c3f1d50096e98f08bb4a2223ae08c0920bf9faa573ab10306eea485","02155c5e36fdfd6a94c2ff4227d9f44a1aa638cfb6ddbea03e5d63b193b22601","dc39834772f20bc220994ec3be5d3929ecd43ab16f40b5cef9c2647fa8dc73db","4fc27b040b19c6b7e2de5774992008911f85deb81826c36b29f63597196bc285","681a48e28b090db97ca034b6f7cb341ac42e90257d4ad107f157de0cef55b554","4554cc6f48217d88b96fa873adcf94ecbcd4738227b747145b8869f98bad751f","2c1f5c7e881aa76a73e99ffa0e9d194ee64c5aa0f8624af6bd7d9d4a663c24b0","bbf26d14b3d9895a377094416766222953acbde15badadebc498208474003b55","78bc498bc49aeaad8ec75058a89052d1dfe56d6db23c16332b3c82b914936546","ac146aba465b7419956b0ac1147ace71edf8cff3d7448ab02fb96f05760d0d3c","7596910abc02b56d06fb414ba43422c683399c370a9916b18f080530b760332d","8465930189d4876775b9779f5fd1f6189cfd18042144094902cd93fb5131cdf0","350e75ccfa109d445694f61ed98ea795c407bdb66131c71e2fd278c24d9e0459","395f22bf6b34e0c474e82e15436c08ad14843f2f467e93a7cfdc3fa53b6eaa6b","ded03e1d7303895f7b6a7aea4d510ecccb5688be854214086a8f6a049d15b864","c5b143e952756e4041d08b28cbcef7f3170839284a6161aa178dc792fd427a40","906d62c6fb7a8528384dcdce0e36bce3a078235ca7d7596971046a4a087c71a9","ce1ed1b88345787972a57eefaa7a3be513e2bd20c5000757332a7fbbee62c05a","9c74911ed0c6ea6ba67fb70302808768c17d8753902cad9407ea25084556e3e8"]}},{"panelId":"page-027-panel-01","sourcePageSha256":"8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9","mediaSha256":"7672c3be4b07db5c0d6cb3dff294f474d2c124fa077052dfd2e9a39f719f6031","videoSource":"videos/page-027-panel-01-7672c3be4b07.mp4","frameCount":105,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,53,26,79,13,66,39,92,4,57,31,83,18,70,44,96,9,61,35,88,22,74,48,101],"pack":{"source":"preview-packs/page-027-panel-01-7672c3be4b07/000.orbf","sha256":"01bde348988e2a1a994e568a33a0984c483823e8f0ae289ce6410051ce72428d","byteLength":669414,"indices":[0,53,26,79,13,66,39,92,4,57,31,83,18,70,44,96,9,61,35,88,22,74,48,101],"frameBytes":[32132,24452,28410,22784,31664,19896,28746,31964,31882,21488,28474,30126,31770,21824,29608,31764,31318,20486,27208,32000,31584,21384,26482,31764],"frameSha256":["e3bafa7ca4bc804f11d27ecf342a64f1bccdf73bc95e9f8ab1cdb6caa293bb9c","9df6132b2061f5f243060598ca24c13c11c6cb4e1f55f85b02117d9c37cc052a","22986b1174522c0bd9fa48c5633dfa08903693e4407b04b28181304fa8f1f63e","024c8e4bd609938eb24dbe12986ff29c956633613d2566c1c7680c72ebb000a4","c776580a55d1f5e33328aeb9b03dc0ed1d375b62e1131000d184a42cf00e041c","a8970384dec730e78e347a85bbf5b3b6905e8f3dde1007b515f84f4f50f6f09c","a1dbbbaf97f58a6502a3e83f7d7b630fdde15783c163c8d86c2db7a3cfaf06d2","503da87d8d21816830a27526f13d1be0fb8d050087a5490bb09e73fb83065662","96b2705e9b5094cfdb7bc033c86f3331a624e1a5e74f4a0ea706ac127837395e","a7e4037004f54554cab347b14a24515a4c1e2e02b745e83b9807408b2493266f","f01d6becf0f93332f870f25db89be83101e9a69615359aed3d281f5a839b1ae0","ecc32dbdb9a3d78cdbb8840b622a5c8a1922e1d5d8a776cf8eb807b6e0d48797","4337d9d2a7cdd822193590fcb2d4ecf6d4472c7fe8617d8590145f6d83f73af9","bbe73c72520d1d6a1e3e46834bfccb5250c7958a77c53af4947b2902c71cdcdb","cec1c1f1ee072959af134c83af67edc5d1f95d69005853bc5e69901fc32c0216","42987dbd5c7a7e3731dfcad4e9d75691d4f50e6a218b7c64e8cac46cff8c2da3","4344a46d9bca0fd0e4264dcb767cdec4582105a17b828691ddb8b8265f19f6ee","aa8ec5e6b03700e3c7c8105c6da25807cca89bf59be34a0d678580e4eb610ad1","a905487460650e20feff3e6bde8d010cd1fe492c4282770db923e502a7b0cbf1","428e68f7b17ba0be2c63fde25ff885482c3228d67320980a451b3f1cfa6197af","0a066e75117625e2b0fb2032992af0195992ce4ff6dc8a88dbdb687e00e86046","8e5cc6e32dbd039b3dd89d7c595926130d97825863da07eb48c6cc74ba6692e9","63aeb3a4acfad60c742bdaf1a3ab1fc5621f611e8b24f3ae0ffbfa65b41b9173","b0c02579317451e67ac281d2396f1988e3ad5be910c19ce8d9956b4b3e818370"]}},{"panelId":"page-028-panel-01","sourcePageSha256":"52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8","mediaSha256":"2c20c097f4c70ea7237d5316b485bbaf3f0bead0d596d84635350df2529d82e2","videoSource":"videos/page-028-panel-01-2c20c097f4c7.mp4","frameCount":121,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,61,30,91,15,76,45,106,5,66,35,96,20,81,50,111,10,71,40,101,25,86,55,116],"pack":{"source":"preview-packs/page-028-panel-01-2c20c097f4c7/000.orbf","sha256":"570a170ac86fec12dee730a450156f675fd2b703aebfa3248074136541172f0a","byteLength":627776,"indices":[0,61,30,91,15,76,45,106,5,66,35,96,20,81,50,111,10,71,40,101,25,86,55,116],"frameBytes":[26320,28340,26614,27008,25662,23924,22694,28262,25912,27530,26322,28134,25772,23394,24472,28078,25672,26356,25420,28388,25162,24908,25146,28082],"frameSha256":["3b62f56ec386d690f9446380db21f491b83b9b8343df99d2b9adbf06e8d9c0d0","41e26d97734967cc5b8ee51e30a15be9edb4ebe6b85f1f09a542d15ad964b051","c871126908a3998ec34473536a2d42fd818984a158d53fed073e9423340f5edd","97ca477e53bc79579b3825419062440019eaceace428c500d1b35519c68087d2","ed4c8008a979f3ce1874b1b1e7e499755ce7615243115516fec24627b5c157d4","b63157f9f18ff116743188cde14e8c60a32d001b4560c5d479f1d132c8e0ec06","6336e70db086063aaf498f4f08bca088abe162499ea1cb830c0442f7597d77c9","70d89afef8a0abb0a10509389a1f2f0d43566809989b881073101651e1068ac5","64f937f9d2dba04487955473dcd26605b833716ab9b914e03a9e69dde646a45d","ff5cae11a027bd2e7079cedaacf5230ddd52adb7405a0d5ac7885992881d4877","a0ce571e6458ce6cb317c9789dcf37f3954e98fd959d7d55fc2ea1deaa94416f","e5ac136b491f77e0801e958aee017440898236a5fa3aee34f6fb79efe2179510","2f72d4a5019e71b108770f52e6cb73c8b0b0340678fcffbf77a11a98148e8810","c12506670cee6eab28e40dc69fda22b7e3e17dfb9f659d174257d94e2f5adf73","f5037f771c02f9a0cae5c5cdd24fe6082d816833bd27f8fd837484a6453a9a07","bc202113961155ca53a8662709df347647dbed22f5b5e160edbc9b8dd72707a8","5c2b67b9a8b16b739a00c4984b522ce033fa4f5f6832789568bf98a97c0884eb","27e05e5a1572d8903c501d66ce1ac0ef5e98c8d6beb1445b5aba45aeb75b9160","2822e3d1d6ec9469601535d98d9b43462b7e0979aae58ad38bfe27cc1e89ab2e","77a631261252f9fdca1a948de1234641e441f346b37c56575d7619f2eed0003b","5b27fafc70df803dc80aaacd2e3c81529b9972c2b2411128b1eb9321d1d756de","cb5bb0809dac30773dca6b024f8fd0d1028558be514ed2a00410b43ebbab7b97","e5462fe33ce2363847e66a285d5359f93e8c50c74289728f5289adc9f057a448","a1743e71e266752b5675f1a1d02130607e02fa15db7a3a0c90abb4a5fe4815b4"]}},{"panelId":"page-029-panel-01","sourcePageSha256":"244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2","mediaSha256":"f00bd9a1a00fe24edf93e94943354bf795c0c7af9250291477d7092a3340c80d","videoSource":"videos/page-029-panel-01-f00bd9a1a00f.mp4","frameCount":120,"sourceWidth":1442,"sourceHeight":638,"duration":4.0,"width":480,"height":212,"indices":[0,60,30,90,15,75,45,105,5,65,35,95,20,80,50,110,10,70,40,100,25,85,55,115],"pack":{"source":"preview-packs/page-029-panel-01-f00bd9a1a00f/000.orbf","sha256":"3f5c4c0e9848ac883f994b6794ba4c0d9fae8c458a950a715308fee8d96e1d70","byteLength":193270,"indices":[0,60,30,90,15,75,45,105,5,65,35,95,20,80,50,110,10,70,40,100,25,85,55,115],"frameBytes":[8674,8522,7604,7252,8352,8182,7366,8110,8766,8716,7722,7564,8218,7796,7988,8144,8468,8430,7748,7914,8068,7134,8292,8036],"frameSha256":["d85eef753ebca8ad1365b2676cd7ae90582253177cea5bd96636ac58f90dee0b","513bedf6b307b6bb5480b72e8160178008051544ef059e3e2670667427e42c9c","5e2a7434ceee3e060c2335dc566ee8729340f0738ce38c742d44cc2bc95ec6da","60ef9972103fe30ad2d694d91a47cb6fba3dda24c3d575a762c213415eb2ee35","92d07cdac044bef8d39e4eec1f4e30c005f3efd59a829ca1a7a60d2f53ec5b0e","e5b3990a87b1fc7213bb9c25cf62b19edb7ac8bfef8aebf96a83e466c0bc350d","fb5f381a9d1a3b0a0c0218885c13b763dd96cdfbea2ffe0e1f585deb85ad9fc9","022f0996aba50968e98f37329e6901eddd144df3bb7d225b0ce090a1487de40a","66401eb3882a220fdec225e8236739d349c0628ab036e3241790cf069c2694c8","3293250bc87afa63810c353f520b06c87158972e9c3ed0c6b809085e2ed7f960","4d5fe22f9ae46069027311687a0711178a4431cbb973c93017cbddae759dac8b","0cf3addd003e0e91f2830a9f95235800bce667c54437da4903213cd6f3386e19","c90bea4bff2703f199c44e3e10e189ba2052c89904df1c3d8fe56725139507d7","c7b348e86579a310eada7c8382937bdd4b2dd0130aabb9e48384b060a319be03","70bc20e5bf99e69532d6a9a56363b140869c30e5374776bbcf31bc2dd1fb2390","19f1c28f20912abeeb0fdbc8594b1ff4cf99377aef269b3e5284a239d8c84d1f","ab3e37edfff27e01cf70b8e8eb13f8ea2b2047766d1e8d8165fe95b8f8b1a368","013defc2127410326852c58f2904130077896b154fb4aaa24e099ba49fd7b4b5","d43f23c1945e273adf6d038a4e01e0ee8c7d5e41f80a15666f3d312e29dbeba7","a8abfc3e2cbf909713b2e93e8b50ce0458b7accb6ff8c7b480d2908e82751f3d","47ec5bc22d0f362ec4a4af9f902fcffb1079dd2bb61c8df8471a5faad10048f6","823edaf158d4456b516a52541b5063ab2c3ee5582a5b8489ed381ead87918d37","10ee4f439220e36d655e9f2c93f64be9fd0a05b75e2495731ace769c72d22d69","3febb183ccc242c3df8b6cd070e55fb7360dadea24d71f708945c5fd8aef9720"]}},{"panelId":"page-029-panel-02","sourcePageSha256":"244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2","mediaSha256":"441a6ecfb90f0bacbba3e603b8027a321c268f7981058f8d40fddeb3d6a10239","videoSource":"videos/page-029-panel-02-441a6ecfb90f.mp4","frameCount":162,"sourceWidth":1072,"sourceHeight":860,"duration":4.0,"width":480,"height":385,"indices":[0,81,41,122,20,101,61,142,7,88,47,128,27,108,68,149,14,95,54,135,34,115,74,155],"pack":{"source":"preview-packs/page-029-panel-02-441a6ecfb90f/000.orbf","sha256":"7c36d84f47be5919b8ac9cabf78625ab44c7ce622d56e84ad6b391d0b7fcdb12","byteLength":686564,"indices":[0,81,41,122,20,101,61,142,7,88,47,128,27,108,68,149,14,95,54,135,34,115,74,155],"frameBytes":[21390,36238,23274,37830,20886,38438,25284,20036,26894,37656,26140,36002,23134,38214,26514,17160,21480,38332,26774,31876,23422,38002,32484,18900],"frameSha256":["52c6a78a7e610a105921833c56be0a84c074ed49206f5db3d9d686bbc06a3cfa","f4ba1acf1c784523168b974179012fb65a8bf93b0dea7c8c22e63707d9cb9059","345c1f459e32ef14bca54449e0e4f1cd2b89738068fc02538f38a67bea2b7a98","2b525d07d18b64935a5559047aef40d5be44fc0003a85560371ba738b5a0da32","d0fc8134029b019170cddec3d14715ad726a1c6913d9b193931da29eb8eb5534","c60b2b54b109ffbd79003a0370147460a103f7bc1efa0446170bca7c6fc43c18","c58cd7b65e8b5a59d09d60f73336ec70a4249bcc6ddf18c3937570316cd438ee","f7e264097f2162ea78189d8110bdf47136807a10aa6c026a34770661fc274062","aaf458ca20d960dba25062aa5c7e69a357f06ea00b76cdfa6fffaf9e95a4ca50","17bf796db89d7eaec5df945406ebf5d07cdd4097bc9d177e94aa3eb594b77f58","58b45a4b356ac15ee6dd5263b7be89d48be8e862b2b9974437fd0cdfeb84cc01","4eba3952b623dca0c5b20db816f337f24988b7059ccd4c0d95ec8277d634fd10","909f5aa1a48b85ffdb8a919ff6f1a9a827d8aa01d450c7c7d43324d4a1d94573","0f20c1f7aebdb31ecc3eb7f664f525337b1d8e5b121ee4fb7a1348088414091f","e473a0b5c38b5e82f5f2e8cbfa418685f27145a7e2b7e24410f35f48ffb3b366","f4bc52d5409d525776058a2fbaf7a444aaba0986ca78b723f6a93f13b18d695e","977c717c34922ee7348065ba065bf77722d362146e01ce7322c1b64427ba4e73","1baa3612739156d68142b182e56eebf3ac9e35d2ad55dedba0ea4ca9ff9ddb8c","0261f1b99188809af4c985b90b6d8d46055a2c2bb7053a7aacbcb598b1cbe58f","b65124f279f336652a0065b4a56c92f8e8ebef0cbbfffb1f5c7cac606bca2136","e5399d1dcf0d973ba1484aaa7faf6aa655108022a9d4f8fbca339eb01c433176","32cdb3130eb6e12779a44cbea962eaace91646096d7501f4e1c6cf99a3e247ab","4c33c47d398a809f070dea1fe1ddbe5020fe953f3b8425c8aa37613e9d7c484c","6cd9f15f56c6bcfc0e59b3a5ecc33e5ec7f6a08950a9e31c4d531ec1e0e45f94"]}},{"panelId":"page-030-panel-01","sourcePageSha256":"88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc","mediaSha256":"17d69e7937d0d42befd985840759a79f7a33b815429a16b5322a6f08346aa5fe","videoSource":"videos/page-030-panel-01-17d69e7937d0.mp4","frameCount":124,"sourceWidth":768,"sourceHeight":960,"duration":4.0,"width":384,"height":480,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"pack":{"source":"preview-packs/page-030-panel-01-17d69e7937d0/000.orbf","sha256":"3a3f34318bdd10c9afd7e648e4e02a63800d1692e20943f18d3d3d8f3790db7b","byteLength":200040,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"frameBytes":[12418,9028,5396,5194,10390,6048,7004,9066,10242,8722,4832,7102,8574,9258,8116,11338,9376,8242,7102,9066,7002,6186,8286,11848],"frameSha256":["a9df1140a65f5376d51794ffeefdbf697a17e2c335da9640203eaab9a67daa8d","66d37ec26b5e30eda259158432ffe716fadd970bc59eb24af8bf3e69fa440f76","78d03d6950db39b1f9873c8abebe857b6f8a965bf645eaf82adf35c374134f6a","60691d63de7de7d6b0c57fb76151e1086e637477480c7b57f6543869126c184f","8b1f4a49e7710936d245ac5780caacbc4d145641f5bb6de824d0d3043730d810","bcb4f4fee24c7519d04ee976976dd874d47a1e9e48116a8531666748aa4fdc0c","544160cf992f2efa454990fb4927821184d520a62d8bae6751c8b8fe7a34e680","ba371bbf5ce4a29c088fdd663595aa18172ac5df3ed522b7d116d6cec0dc7c54","a37454489d5c2c8cbbd3e9b5141f80683e43c6292dd239f57af7653d69e54d53","9fa19e94c77495c532841ded4a1c46ae000c98e36f94b38979abff376dc997b8","844ff5a9c2f9a178956f3ec55537c40e48ee9453676060af63cd5d4596fd32f8","a2aef839835718ee159d54fdbcc9e23f75da1b1938195ee75ce48a8e30b78959","b4eb50876ba6ee871315f0e9a61b3915bfa0f4e7531bb7860025a7a2d68f3ae7","33531224e30566d3b64d2e1a3bc7e93807211a6cc03f535e0498234a9d8f84b5","6e7a76f386d87926aec82c479226eff3311f43466f7cf48124a8fa326e71bb5d","19e91f198b431a62c858789f3ee0a9862ef1f65b577e6612fe6dd7543bc4e01e","8b766d50512470efae64fd36ca3764282b14003a481212f1d071083d7ad67571","95dd3055a12a2a38eaa8aa8f47fae2345908204f8090153a6d0e7ee29284c916","3e79a939ca2959baae087c62fa8acf27efd6740dd0a2682d3973ffd8b0a002a0","f627debd24ab66973e614c35941fc6672cb0ea1e179e53f3e9a631ce18ec7707","02f8a69bf235192941a49d538b216190b2e46333e84599b9a73be6a440e77711","cd6f153574b2e2def649ca6990f5aab8aa51a8f11842c30f200053bf3454e106","b0a6da31c4d61bbcc552325505b4fdb51862eee7c062954408319789429e6918","149afb5472ab8774be85d46911a1954cd3d6ee7c91c8914add5486c377ace09f"]}},{"panelId":"page-031-panel-01","sourcePageSha256":"72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b","mediaSha256":"8c9a7454fb65ae4756cc685c5703b843d49d96c8b4e0196637d9bc8717fffd3b","videoSource":"videos/page-031-panel-01-8c9a7454fb65.mp4","frameCount":124,"sourceWidth":768,"sourceHeight":960,"duration":4.0,"width":384,"height":480,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"pack":{"source":"preview-packs/page-031-panel-01-8c9a7454fb65/000.orbf","sha256":"26b8452a7f269e12b2e64ae5317531a201800b16e3c0a35f3436ff2e2b77caea","byteLength":113434,"indices":[0,62,31,93,16,78,47,109,5,67,36,98,21,83,52,114,10,72,41,103,26,88,57,119],"frameBytes":[6352,5130,3514,3590,5278,4174,4324,5552,6148,5020,3378,4198,4792,3670,4678,5816,5870,4780,3750,4740,3900,3420,4970,6186],"frameSha256":["c6c295026bb745b99c098fccf2a04977df963dc6a22d947147d65181847d1e47","d8c51c952a90d89fe3079c6d525cfb987538f3e4baa48692467dc71a1aa8a34f","281c65054faf16f553fc5aef8d7b61b57dd779d4c1d642dfbe2f7492ef962e70","24bdfd09ac07ad4f8d72469bb4aac824333fa574e77682935a359a320a750789","24c546ea5a2fce52f46036c33cba739365a35ac3ae019251e70040c2193282dc","a94aefa1beaf23e412f3a127c235abee2704c48c37b88e87a283c8c7aa4e1bd3","3b17d08790524e987382e02fa37730aa53519fa384798361852417a31d49a6b0","5ecf4ddd0ba4cb32261234044c85b45c619787a1366b6109076c91386cad9163","b8572bbe8fd389d8e25cee2ab830a7c5e2605284c3f8a2ebb22b9a82dfc7ecf7","0ee90a412b4bba218f5d788346079cca3ab2a13d0a47b91c439155f1f8b9f589","8f64932ba5ddd23dfe6ce799f25f57726386ba4c424fe450deb8ce59a2798997","5be18703e8c194551f08ddab788d8f60ec8a3aaed0ec317ea5205ad74c62ac06","8cec6c5748e31ac8dfd27bb6b75111d0e249dce3c292b9d7616944fa399cf693","1f3d6c573f0ed8b0ef9c59e0469c5b2d974e097efcf3acbfbdd907b72efa53f2","04abaa24506f6d16d817485f5baaa8c3ec2ab3c8c8d1c5102d6bb92e882b67a1","1cd408545655548fc52db4d20dae18027bebdac8146d5a1b225d232cb6f587e4","ea6fccc24db8fee1c61a0443aa1fb55e9d9bbbe0dc19ed8128f2588d3002178d","f4622508b2f2e0502f42036898e7fb6818d2ffad8fb86d9222cfb5ac2311bad6","516fab39a42e59af81c5656669a5aa912420be1e2c57196d3dfdeb4f6f1618ce","c84fbf37d072576ed355184747e4e9fef48ed7454df615919705ddeab088d11b","356c9d958b15ca01edde65c2c02389c574662b402fd5e049cf95806ae96ed31d","1ecb00e45f4773c0c983f6bda7535b411d413db1f4049d676199e9ef76511bd8","ee5b6c2cd3df6385b55258100e7755245eaa383949a52118de0e3863929e5294","95c0855f5f2cf73644a429adea7a20feb16eec89b8402e6d004f1318aea451ed"]}},{"panelId":"page-032-panel-01","sourcePageSha256":"3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365","mediaSha256":"9d0f1f9b2952ed4173bc6e900f07220ca5a7ca7edc7dc4470c66f38277f5bd54","videoSource":"videos/page-032-panel-01-9d0f1f9b2952.mp4","frameCount":96,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,48,24,72,12,60,36,84,4,52,28,76,16,64,40,88,8,56,32,80,20,68,44,92],"pack":{"source":"preview-packs/page-032-panel-01-9d0f1f9b2952/000.orbf","sha256":"a786e81df282131f6e1980dbb27e415290c1e958ba3ad7bb9a982f00d91b2327","byteLength":451594,"indices":[0,48,24,72,12,60,36,84,4,52,28,76,16,64,40,88,8,56,32,80,20,68,44,92],"frameBytes":[21496,17386,20520,18284,21362,18812,20120,13320,21432,17992,20954,16268,21016,18010,18786,16074,21206,18718,21144,12606,20958,18450,17548,18928],"frameSha256":["4c0de5b50cac0558fe61fbd0633bb4cba8a6d3db267c2d1f8c12a34eb21bcb46","fc615a2b8ee5af85f8292fd53c3f7dc1d2e84109d5cc24d30077ba4818b41614","913c889e015c2d73f6e3224a509bd34437919f7339784ae87c9b83a3c1a2d6c7","ecd0aa6d9af3cd86e3974c0318f26836ff538dca115a3ffd26aa20da555501bb","04a24095a8edabc56e19abad37e2f077e206e9040a642d684b46a1c9f59c8873","47ce29f10ed0c333f5be3d1f0e8cd23c2d5ef20e20dbb1c1e9ee27648834ccf0","f284bffa51400b67902d51623eb4cf7f6c39fb0561e1ac0a5349453acb96c7ae","e3bcb848244d124c38c66486f27c2f41035dd094118abc2ecb7344aeebbada8f","fe38487a120af3ae378e91c9e540cf726a610a1c000dcfabd45d8234204e6041","18bdec62d0eb244d9606e87821c336d07c60eac7ee560052fddd647efa0e99ee","f1310ae96167384c837c58b39db6821b3db0946495b2cd9a990a66df83047b7b","e95ea68a3bb02092916e9e48feeb824ad43cb0029274ccc0d1f52dfa694925b5","ee27916b8bf264d2d0a4dd68a82a6a755a2943a7f363dfa4dc499a59633c58ab","fe24bfa6159b1092457f0fc12e833af43b49a4cf6384ef0871cf96e16b7249b9","1ce850f71f5acb54119c0396cf9bdf46ccbc888d2b72397e928cf989642ee3fc","3e1fa0059d4bc6472b119cfca662972a12700c5c574c672a427a459b617bb0e9","cf8b3e08e1dad98b4595a4cf44a1e44c742290586715a35d614a8259a4d020a5","c78c2fe33529067ffbcd21986c36c4df491d5d5443e6414f5296ee7fb08bc108","77a76150c8c38a4b9bd58110a3fb0ea29326764a7912e7d43e3bde10ede9af5b","600f28f5e18d03565fa878d69c6922439d638e963dc42259790bfc360aa91d97","b78f4e527dcf9ba0f1a41e71f909ad9aedb6569a8048190a4250dd528378785f","420685cb70e47d2a3aa5f517fca94085bbaa57efbd6431a3aa608f05dafdf5ed","0b19a8fda78ad00a4815deeffdfcde11fc489e00c571a17fd88d559f78c680df","4d3ed45db03059d31e8f33a84e216a369fbb5ae5ae2199e35e0d56171e830505"]}},{"panelId":"page-033-panel-01","sourcePageSha256":"6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff","mediaSha256":"8524b48dca5dd28f1cef1152dc7290842df578bc918b45be53352ffc8d5c58ca","videoSource":"videos/page-033-panel-01-8524b48dca5d.mp4","frameCount":163,"sourceWidth":1280,"sourceHeight":720,"duration":4.0,"width":480,"height":270,"indices":[0,82,41,122,20,102,61,143,7,88,48,129,27,109,68,149,14,95,54,136,34,115,75,156],"pack":{"source":"preview-packs/page-033-panel-01-8524b48dca5d/000.orbf","sha256":"e15dc1c88e40ac4876ac6aa7a6d819084adb72d48c57180048b40f59a9493daf","byteLength":668278,"indices":[0,82,41,122,20,102,61,143,7,88,48,129,27,109,68,149,14,95,54,136,34,115,75,156],"frameBytes":[30636,26084,27626,27460,29862,30088,21230,26700,30014,27264,25898,27718,29010,29698,23076,31536,29968,29328,23544,26754,29474,29268,25050,30788],"frameSha256":["35cd4f5048608fda43bc85b0c14b5239267d4c1525783e5f8f3ce25d3079ff99","15d89a725de32b74e9ea5e5ba11aa57957d93a44fd8a3451610678b994a7f3aa","9ea1c7084950ce13412fb5b0ae180bf3e2439ca69dd86494a7e35e31bd1b0536","9296636a6f0ce4c000740009b61ea48f09aee3c9c02598bad79881bc22d95bbf","1f6c801a57a153be6e9ce010890bd4ae8e6f62bc5db8c8ab3be7538548114354","8fec4194550a5621a9a7a4c01e03608da766d29b01ae6b318ea1e62844f6ac29","fd83295b52c8e03258640a4f6487941fcf9223a4cd79e1f1e1d40677bf459ec5","b9666e7e1114f8fff332a8cabb8c3e772616a7bca1febf2cf548f6886166489d","d9801995da261fd13b8d54cdc6c7351894b417c621f3bdafadc4522a008e7db1","7240291865f41267dfea9fa29c1977fd9c55a65b9759bcf7c646a6d4169cec2e","aa454e72a45c2e2ecf8a22e913ea272c3d46a7c6bd1caaf88d0bae7e512615fd","cb64c1060438bd4268b3eae37bb66a52176c8f243b418622ff412e2b637d4b5b","7e809825344d4b5e222577a65985106401db3cb0495157f68e3b76ab43a045f1","8a4f8afcb91bf527fcfce9967692547af728493bd65ba81a506612fe2e31a25f","ea6d5c916283b790b3cdcf3b7e8df6f55ee89caba05a20aa65efd858be413d23","5d8dc266d5b037d1dcb74dcccac3cf60faa8e34c2a6986eba834673c90993738","1986475ff1ce02ac6e11819e4e08cc7853451f1802169f031912ae4f5978a463","798866cf9bfc23d57a6e76ae1a92d5dac749c6f26832e6b1c4eb2664f19d2ae3","ab2ddf53a36ec6866eec4607e81a8146addde17001ae39b03c021df404c5ccd7","c05c48056f35aa1fb4dfc8615c79f5c93333be52d1a5bdea674c0af526cd8a33","0855aa7850f588ff6482ba08db48ff583cd921c45cadd1525aee251d5c39eb9d","742ade01d045448b9811d564210087c000342fb93f31423029bfe714ccd16a93","6af144f2541955bfa1c093ebcbc5457e64d5cdd3569e490e170fa367598063ea","0d856c6855ba2204e5c98f60b93bda844e366a4e3e1e069a6bdc58ddf5687759"]}},{"panelId":"page-034-panel-01","sourcePageSha256":"6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c","mediaSha256":"56da6f23983bf42ad594983ed58d53e44c0f6a635dc4d3070a0136cdaacb2094","videoSource":"videos/page-034-panel-01-56da6f23983b.mp4","frameCount":189,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,95,47,142,24,118,71,165,8,102,55,150,32,126,79,173,16,110,63,158,39,134,87,181],"pack":{"source":"preview-packs/page-034-panel-01-56da6f23983b/000.orbf","sha256":"969ffc87901fc0bfb1096f4032edcbbd5bfbe40cba81e3ee59005adf8c75fb73","byteLength":487222,"indices":[0,95,47,142,24,118,71,165,8,102,55,150,32,126,79,173,16,110,63,158,39,134,87,181],"frameBytes":[20976,21636,19404,20424,18574,21112,18160,19768,20982,21554,20222,20392,17264,20716,18838,20080,20234,21278,20390,20302,22766,20114,21276,20556],"frameSha256":["a5f3f74fd6aec56d87944574e5a6f807d6f29ed3bc272e11ae4d1c7516f5f11a","40f2b95d30f0b0074fe721392a2f85852bfd4381781a3db37d91ebe7b0fbe24f","913dbeeab541b0e478b64944a2c815e86f1361dbf5415abeebf78b7127fb20a9","c17a67bacc647d8b62788813c3c716140c666c7b1736c7a4cae062bd69f1bc72","2af19f3089af2c0cd4ca52a8f40c416ad60803fdf1cf96c8d954d4a5a62b5f3e","c42bfd0ed43456104034fbf78a51b8eaba1c8648ae078ea4fa84f9fe473b0f10","e147caf4ea9375e7ec7aa6d82bc670c7454a2d48fee769223750f7a36f7604e5","fedeebbebfff385e9f59a7b8928a4e7e432a54ffd4476e8fc6ab72a024a883a6","0150bfeb80c117a6c75c00211b685bdffd3d7d3314b2552cba3015e212fbcadb","251496f487bb0ac9215fe8c0dadd9c890af9f1ee789e5ddf917cb71ec4f4a0fb","83bc2d513cd17274f11bcfd877b3c6d1defeb1986331003f14d51e9d53077904","dc3930e612cf60688ee5470a8019914745f9b32c42353a13acea40bb360d1c27","fb7e8dd9f5c53532d90bac2ad4d26b0e737957f0f9e4f257f80f6833582e5592","16c8122d62bf094447d6171ea241de5d826663d2e5dfb07ed941b99beaa61a5a","c931a6477b143a439dc2cb67aab121314f262cc470bcc6dbed4f00866bbf171e","03aa9bb0ace3f213964139b5893302580d6a846a8f38b8c73a7a8334400ff972","bb9ef024be3824353c5a29dbc7936fb7d6a58b6c3e99eea45e85f4cfbf3d5554","cb68387937ab170577f52e1fa7b28580ce3e601003a4a7e298000140aaf38260","5abd3836d3220bdc4bb6592ef7c4071918c27f2448bebeb86e0ab3707a99c07b","78347b0ba66e6854c9a99de99cf598de99b2a51ae86890f2a113f0eac73b6669","59e06a0ed456534244dab72f443462204204bbd93685e2f59c938e4fc1852d89","aa49cb526f6f0189d67fbb8694d27fc066b317c155ca16a643f6eaba4c3523e8","27b9647c0db00cb3ae560b5f20c7f945c3bd5483dfd78d08b699575b3c48b43b","51f212423ee9c3771c2e93a5ab55739bc4a387248a1e39c083235d4606b548b2"]}},{"panelId":"page-035-panel-01","sourcePageSha256":"d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5","mediaSha256":"42d6ed2ca479e20975d84f7c4ffdb6e9fff5add0f5cf4fca8c831830af52fb9b","videoSource":"videos/page-035-panel-01-42d6ed2ca479.mp4","frameCount":180,"sourceWidth":858,"sourceHeight":1072,"duration":4.0,"width":384,"height":480,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"pack":{"source":"preview-packs/page-035-panel-01-42d6ed2ca479/000.orbf","sha256":"ab6d3123d25ee2b464ed9716c4712ce0e4921eeb8fd693bee1bf19ee5c7ffde0","byteLength":406778,"indices":[0,90,45,135,23,113,68,158,8,98,53,143,30,120,75,165,15,105,60,150,38,128,83,173],"frameBytes":[18490,16868,10686,19026,18698,18374,14326,18694,18138,18368,12904,19170,18788,18196,10896,18616,18526,18098,14516,19060,16860,18282,12500,18494],"frameSha256":["b064efdd1dd00c11cda8a0b4a5762f48d8f79e12c16b122cff5fcc93a892852e","8dcb0b5417e99c43e6eac8e3165c02f1cdbcd2c7944e7e6081f50f245607c310","a8d0adbadd83041bea428e060efbdd2f303f87985896cb6df361cf704449784e","21c52c16ac36e2cd71ebd846240eb6b6987c6d451f61f41b4242a8c8c60baacc","003f13aedb4c25f1e40d7320e6a0c90f5e88081bc8929409f9c605d9cf0b28f5","90e1dc2c955a5537bc05ef4706eb0b30cf39e22d5e29e2a8e7600fdbf0e7f792","20429faae536ca99f1aadb91c21b195a5ecf58aee5642d920c53954ba59fe59a","9d2957b8c6f7767efae07677f13d732b1453429130d906fd3bbe011184818de9","7ff6325432b51272c422679c4fa095684912dbd88eb8507fb787cb2e835f29be","7aed584afc11ce2fb116044b4ffa672833c7cec26c546757192d047063c87bcd","d031661ef91d8166b223207429b23538e692569026fa56c65f4537ae0bbed14a","679232b9066b04382675089fb14d0d0a1fdc902ba463d3af4d1d1b1cd97bc964","b933b11abd804ce7db826ae9707ceb396134ff5b646d8714e864ef87e78ab23f","f95e510185cf1ed4a43e7ffb8b6fd946b058a10898ab56199a79dabcf482c2bb","06fb603ad795ba1a9f669deab16b96cb259e8ea4725c9a7c38dc02416b86ae0e","9f2e5e23148b78ad870ba784b56653e753f4ed7dfc9f533ab1bc9e46b8b24d82","603dc184662b3db8633a43b6f9cdd2468a2af98efe1112b21cf3cf17a0bb2614","41b08f78e3fea02f254d8a86c0eec45fd40833c9828be287eb8eb0fee04520ab","9778a29ad43ca030e65bf0b0cdf17c829ed2e007c40b2ac03791a27c2740a046","e9a0886921e150b2e61624ac19ec0fbaddda411c10b6320a4aaaadfe106bfa52","df3c8f6ce4708b221eb3f8924f7777b16251a1352f646f790d82b2db9217a253","832ee1f76c2e21a826f40949dfaaaa8903ffd9490391e53935ba415645c1181e","0141d466a09fb11a109f5a60b4277211b60c448de54728ecb32eaeb87f6e8a00","03d9d914564ec18c85fff3b974729dd5edcdee34178ee7a765dcf40c8a83be0d"]}}]};
  const freeze = value => { if (value && typeof value === "object") { Object.values(value).forEach(freeze); Object.freeze(value); } return value; };
  window.COMIC_PREVIEW_SEQUENCES = freeze(data);
})();

;
/* delivery-config.js */
window.COMIC_DELIVERY_CONFIG = Object.freeze({
  schemaVersion: 1,
  mirrors: Object.freeze(['https://just-cuz-episode-1-mirror.xhuozhong.workers.dev/']),
  probe: Object.freeze({source:'delivery-probe.bin', byteLength:16384, sha256:'472d628b79a95e4545b4ee1a2e8812c5ebdd33ddeeabea8654b55396c8a029ac'})
});

;
/* asset-delivery.js */
(() => {
  'use strict';
  // Only reviewed deployment origins in the retained configuration can receive
  // public frame requests. Neither URL parameters nor remote replies add hosts.
  const config = window.COMIC_DELIVERY_CONFIG;
  const sha = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
  const relative = value => typeof value === 'string' && !/[:?#%\\\u0000-\u0020]/.test(value)
    && value.split('/').every(part => part && part !== '.' && part !== '..');
  const local = new URL('.', location.href).href;
  const raw = url => url.hostname === 'raw.githubusercontent.com'
    && /^\/xhuozhong\/just-cuz-episode-1\/[a-f0-9]{40}\/dist\/$/.test(url.pathname);
  const bases = [local];
  if (config && config.schemaVersion === 1 && Array.isArray(config.mirrors)) for (const value of config.mirrors) {
    try {
      const url = new URL(value);
      if (url.protocol === 'https:' && url.username === '' && url.password === '' && !url.search && !url.hash
        && (url.pathname === '/' && url.hostname.endsWith('.workers.dev') || raw(url)) && !bases.includes(url.href)) bases.push(url.href);
    } catch (_) {}
  }
  const disabled = new Set(), responses = new WeakMap();
  const started = performance.now();
  let selected = local, settled = bases.length === 1;
  const cancelled = () => Object.assign(new Error('Asset request cancelled'), {name:'AbortError'});
  const stopBody = response => { try { if (response.body) void response.body.cancel().catch(() => {}); } catch (_) {} };
  async function probe(base, controller) {
    const timer = setTimeout(() => controller.abort(), 6000);
    try {
      const response = await fetch(new URL(config.probe.source + '?sha256=' + config.probe.sha256, base).href,
        {signal:controller.signal, cache:'no-store', credentials:'omit', mode:'cors'});
      if (!response.ok) { stopBody(response); throw new Error('Delivery probe HTTP error'); }
      const bytes = await response.arrayBuffer();
      if (bytes.byteLength !== config.probe.byteLength) throw new Error('Delivery probe size mismatch');
      const digest = await window.crypto.subtle.digest('SHA-256', bytes);
      const actual = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2,'0')).join('');
      if (actual !== config.probe.sha256) throw new Error('Delivery probe hash mismatch');
      return base;
    } finally { clearTimeout(timer); }
  }
  const canProbe = bases.length > 1 && config && config.probe && relative(config.probe.source)
    && config.probe.source === 'delivery-probe.bin' && config.probe.byteLength === 16384 && sha(config.probe.sha256)
    && window.crypto && window.crypto.subtle && typeof window.crypto.subtle.digest === 'function';
  const ready = canProbe ? new Promise(resolve => {
    const controllers = bases.map(() => new AbortController());
    let pending = bases.length, done = false;
    bases.forEach((base, index) => {
      probe(base, controllers[index]).then(winner => {
        if (done) return;
        done = true; selected = winner; settled = true;
        controllers.forEach((controller, other) => { if (other !== index) controller.abort(); });
        resolve();
      }).catch(() => {
        if (--pending === 0 && !done) { settled = true; resolve(); }
      });
    });
  }) : Promise.resolve().then(() => { settled = true; });
  async function requestFrom(base, source, checksum, init) {
    const controller = new AbortController(), signal = init.signal;
    if (signal && signal.aborted) throw cancelled();
    const abort = () => controller.abort();
    if (signal) signal.addEventListener('abort', abort, {once:true});
    // This timeout covers connection/headers only. Once streaming starts, slow
    // valid packets retain their existing lifecycle and caller cancellation.
    const timer = setTimeout(abort, 8000);
    try {
      const path = base === local || raw(new URL(base)) ? source : 'packets/' + checksum + '.orbf';
      const response = await fetch(new URL(path + '?sha256=' + checksum, base).href,
        {...init, signal:controller.signal, mode:'cors', credentials:'omit'});
      if (!response.ok) { stopBody(response); throw new Error('Asset delivery HTTP ' + response.status); }
      responses.set(response, base);
      return response;
    } catch (error) {
      if (signal) signal.removeEventListener('abort', abort);
      throw error;
    } finally { clearTimeout(timer); }
  }
  async function fetchAsset(source, checksum, init = {}) {
    if (!relative(source) || !/^(?:preview-packs|frame-packs)\/.+\.orbf$/.test(source) || !sha(checksum)) throw new Error('Invalid bound asset request');
    if (init.signal && init.signal.aborted) throw cancelled();
    if (!settled) {
      const remaining = Math.max(0, 1200 - (performance.now() - started));
      if (remaining) {
        let timer;
        await Promise.race([ready, new Promise(resolve => { timer = setTimeout(resolve, remaining); })]);
        clearTimeout(timer);
      }
    }
    const order = [...new Set([selected, local, ...bases])].filter(base => !disabled.has(base) || base === local);
    let last;
    for (const base of order) {
      if (init.signal && init.signal.aborted) throw cancelled();
      try { return await requestFrom(base, source, checksum.toLowerCase(), init); }
      catch (error) {
        if (init.signal && init.signal.aborted) throw cancelled();
        last = error;
        if (base !== local) { disabled.add(base); if (selected === base) selected = local; }
      }
    }
    throw last || new Error('No asset delivery route available');
  }
  function markFailed(response) {
    const base = responses.get(response);
    if (base && base !== local) { disabled.add(base); if (selected === base) selected = local; }
  }
  window.ComicAssetDelivery = Object.freeze({fetch:fetchAsset, markFailed,
    get state() { return Object.freeze({selected, settled, candidateCount:bases.length, disabledCount:disabled.size}); }});
})();

;
/* orbit-frame-cache.js */
/* Shared frame-store lifecycle/LRU ideas adapted from Orbit Panel Viewer FrameStore.
 * Copyright (c) 2026 Orbit Panel Viewer contributors. MIT License.
 * See THIRD_PARTY_NOTICES.md for the retained attribution and full license.
 * This adapter reads existing locally exported frames; it creates no new views. */
(() => {
  'use strict';
  const MAX_BITMAPS = 24, MAX_DECODE_PENDING = 4, MAX_FETCH_PENDING = 4;
  const stores = new Map(), lru = new Map();
  const retained = new Map(), MAX_RETAINED_BYTES = 16 * 1024 * 1024, MAX_RETAINED_STORES = 2;
  let retainedBytes = 0;
  let serial = 0, decodePending = 0, fetchPending = 0, pumpScheduled = false;
  const defer = callback => Promise.resolve().then(callback);
  const sha = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
  const positive = value => Number.isFinite(value) && value > 0;
  const relative = value => typeof value === 'string' && value.length > 0
    && !/^(?:[a-z]+:|[\/])|[?#%\\]/i.test(value)
    && value.split('/').every(part => part && part !== '.' && part !== '..');
  function boundSequence(panel, page) {
    const config = window.COMIC_FRAME_SEQUENCES, media = panel && panel.actualMedia;
    if (!config || config.schemaVersion !== 1 || !Array.isArray(config.entries) || !media
      || !page || !sha(page.sha256) || !sha(media.sha256) || !relative(panel.video)) return null;
    const matches = config.entries.filter(entry => entry && entry.panelId === panel.id);
    if (matches.length !== 1) return null;
    const entry = matches[0];
    if (entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== media.sha256
      || entry.videoSource !== panel.video || entry.frameCount !== media.frameCount
      || entry.sourceWidth !== media.width || entry.sourceHeight !== media.height || entry.duration !== media.duration
      || !Number.isSafeInteger(entry.frameCount) || entry.frameCount < 1
      || !Number.isSafeInteger(entry.width) || entry.width < 1
      || !Number.isSafeInteger(entry.height) || entry.height < 1 || !positive(entry.duration)
      || !positive(media.width) || !positive(media.height) || entry.width > media.width || entry.height > media.height
      || Math.abs((entry.width / entry.height) / (media.width / media.height) - 1) > .003
      || !Array.isArray(entry.frames) || entry.frames.length !== entry.frameCount
      || !entry.frames.every(file => relative(file) && /\.(?:jpe?g|webp)$/i.test(file))) return null;
    let packs;
    if (entry.packs !== undefined) {
      if (!Array.isArray(entry.packs) || !entry.packs.length) return null;
      const sources = new Set(), covered = new Set();
      packs = [];
      for (const pack of entry.packs) {
        if (!pack || !relative(pack.source) || /[:\u0000-\u0020\u007f]/.test(pack.source) || !/\.orbf$/i.test(pack.source) || !sha(pack.sha256)
          || !Number.isSafeInteger(pack.byteLength) || !Array.isArray(pack.indices) || !pack.indices.length
          || pack.byteLength < 12 + pack.indices.length * 8 || sources.has(pack.source)) return null;
        sources.add(pack.source);
        for (const index of pack.indices) {
          if (!Number.isSafeInteger(index) || index < 0 || index >= entry.frameCount || covered.has(index)) return null;
          covered.add(index);
        }
        let frameBytes, frameSha256;
        if (pack.frameBytes !== undefined || pack.frameSha256 !== undefined) {
          if (!Array.isArray(pack.frameBytes) || !Array.isArray(pack.frameSha256)
            || pack.frameBytes.length !== pack.indices.length || pack.frameSha256.length !== pack.indices.length
            || !pack.frameBytes.every(length => Number.isSafeInteger(length) && length >= 12 && length <= 0xffffffff)
            || !pack.frameSha256.every(sha)
            || pack.frameBytes.reduce((total, length) => total + length, 12 + pack.indices.length * 8) !== pack.byteLength) return null;
          frameBytes = Object.freeze(pack.frameBytes.slice());
          frameSha256 = Object.freeze(pack.frameSha256.map(hash => hash.toLowerCase()));
        }
        packs.push(Object.freeze({source:pack.source, sha256:pack.sha256.toLowerCase(), byteLength:pack.byteLength, indices:Object.freeze(pack.indices.slice()), frameBytes, frameSha256}));
      }
      if (covered.size !== entry.frameCount) return null;
      packs = Object.freeze(packs);
    }
    return Object.freeze({...entry, frames:Object.freeze(entry.frames.slice()), packs});
  }
  function boundPreview(panel, page, sequence) {
    const config = window.COMIC_PREVIEW_SEQUENCES;
    if (!sequence.packs || !config || config.schemaVersion !== 1 || !Array.isArray(config.entries)) return null;
    const matches = config.entries.filter(entry => entry && entry.panelId === panel.id);
    if (matches.length !== 1) return null;
    const entry = matches[0], pack = entry.pack;
    if (entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== sequence.mediaSha256
      || entry.videoSource !== sequence.videoSource || entry.frameCount !== sequence.frameCount
      || entry.sourceWidth !== sequence.sourceWidth || entry.sourceHeight !== sequence.sourceHeight || entry.duration !== sequence.duration
      || !Number.isSafeInteger(entry.width) || entry.width < 1 || entry.width > sequence.width
      || !Number.isSafeInteger(entry.height) || entry.height < 1 || entry.height > sequence.height
      || Math.max(entry.width, entry.height) > 480 || Math.abs((entry.width / entry.height) / (sequence.width / sequence.height) - 1) > .006
      || !Array.isArray(entry.indices) || ![24,32].includes(entry.indices.length) || new Set(entry.indices).size !== entry.indices.length
      || !entry.indices.every(index => Number.isSafeInteger(index) && index >= 0 && index < sequence.frameCount)
      || !Array.from({length:entry.indices.length}, (_, index) => Math.floor(index * sequence.frameCount / entry.indices.length + .5) % sequence.frameCount).every(index => entry.indices.includes(index))
      || !pack || !relative(pack.source) || /[:\u0000-\u0020\u007f]/.test(pack.source) || !/^preview-packs\/.+\.orbf$/i.test(pack.source)
      || !sha(pack.sha256) || !Number.isSafeInteger(pack.byteLength) || !Array.isArray(pack.indices)
      || pack.indices.length !== entry.indices.length || !pack.indices.every((index, row) => index === entry.indices[row])
      || !Array.isArray(pack.frameBytes) || !Array.isArray(pack.frameSha256)
      || pack.frameBytes.length !== pack.indices.length || pack.frameSha256.length !== pack.indices.length
      || !pack.frameBytes.every(length => Number.isSafeInteger(length) && length >= 12 && length <= 0xffffffff) || !pack.frameSha256.every(sha)
      || pack.frameBytes.reduce((sum, length) => sum + length, 12 + pack.indices.length * 8) !== pack.byteLength) return null;
    const indices = Object.freeze(entry.indices.slice());
    return Object.freeze({...entry, indices, pack:Object.freeze({...pack, indices,
      sha256:pack.sha256.toLowerCase(), frameBytes:Object.freeze(pack.frameBytes.slice()), frameSha256:Object.freeze(pack.frameSha256.map(hash => hash.toLowerCase()))})});
  }
  const keyFor = (store, index, preview = false) => `${store.id}:${preview ? 'p:' : ''}${index}`;
  const pendingKey = (index, preview = false) => preview ? `p:${index}` : index;
  function peek(store, index, preview = false) {
    const key = keyFor(store, index, preview), entry = lru.get(key);
    if (!entry) return null;
    lru.delete(key); lru.set(key, entry);
    return entry.bitmap;
  }
  function evictOldest() {
    const key = lru.keys().next().value;
    if (key === undefined) return;
    const entry = lru.get(key); lru.delete(key);
    entry.bitmap.close();
  }
  function schedulePump() {
    if (pumpScheduled) return;
    pumpScheduled = true;
    defer(() => { pumpScheduled = false; pumpDecodes(); pumpFetches(); });
  }
  function current(store, generation) { return !store.disposed && store.generation === generation; }
  function clearPreviewIdle(request) {
    if (request.previewTimer != null && typeof clearTimeout === 'function') clearTimeout(request.previewTimer);
    request.previewTimer = null;
    request.previewTimerVersion = (request.previewTimerVersion || 0) + 1;
  }
  function armPreviewIdle(store, request, generation) {
    if (!request.preview || request.previewIdleTimeout || !current(store, generation)
      || store.preview.finished || store.preview.failed || typeof setTimeout !== 'function' || typeof clearTimeout !== 'function') return;
    clearPreviewIdle(request);
    const version = request.previewTimerVersion;
    request.previewTimer = setTimeout(() => {
      if (version !== request.previewTimerVersion || !current(store, generation) || store.preview.finished || store.preview.failed) return;
      request.previewTimer = null; request.previewIdleTimeout = true; store.preview.failed = true;
      // Only a real stalled response disables a mirror. User/page aborts never do.
      if (request.deliveryResponse && window.ComicAssetDelivery && typeof window.ComicAssetDelivery.markFailed === 'function') window.ComicAssetDelivery.markFailed(request.deliveryResponse);
      const error = new Error('Preview body stalled for eight seconds');
      for (const index of request.pack.indices) if (!store.preview.blobs.has(index)) store.preview.errors.set(index, error);
      for (const consumer of store.consumers) scheduleProgress(consumer);
      request.controller.abort();
      if (request.reader) { try { void Promise.resolve(request.reader.cancel()).catch(() => {}); } catch (_) {} }
      schedulePump();
    }, 8000);
  }
  function scheduleProgress(consumer) {
    if (consumer.disposed || typeof consumer.options.onProgress !== 'function') return;
    const preview = consumer.store.preview, previewLoaded = preview ? preview.blobs.size : 0;
    const previewFailed = preview ? Math.max(preview.errors.size, preview.failed ? 1 : 0) : 0;
    const complete = consumer.store.blobs.size === consumer.store.sequence.frameCount;
    const urgent = complete || preview && previewLoaded === preview.spec.indices.length && previewLoaded !== consumer.previewProgressLoaded
      || consumer.store.errors.size > consumer.progressFailed || previewFailed > consumer.previewProgressFailed;
    // The initial callback stays asynchronous. Streamed rows then share one
    // update per animation frame; completion must also work in a hidden tab.
    if (consumer.progressScheduled) {
      if (!urgent || consumer.progressFrame === null) return;
      window.cancelAnimationFrame(consumer.progressFrame); consumer.progressFrame = null;
    }
    consumer.progressScheduled = true;
    const version = ++consumer.progressVersion;
    const deliver = () => {
      if (version !== consumer.progressVersion) return;
      consumer.progressFrame = null;
      consumer.progressScheduled = false;
      if (!consumer.disposed && !consumer.store.disposed && typeof consumer.options.onProgress === 'function') {
        const preview = consumer.store.preview, loaded = consumer.store.blobs.size, failed = consumer.store.errors.size;
        const previewLoaded = preview ? preview.blobs.size : 0, previewTotal = preview ? preview.spec.indices.length : 0;
        const previewFailed = preview ? Math.max(preview.errors.size, preview.failed ? 1 : 0) : 0;
        if (loaded !== consumer.progressLoaded || failed !== consumer.progressFailed || previewLoaded !== consumer.previewProgressLoaded || previewFailed !== consumer.previewProgressFailed) {
          consumer.progressLoaded = loaded;
          consumer.progressFailed = failed;
          consumer.previewProgressLoaded = previewLoaded; consumer.previewProgressFailed = previewFailed;
          consumer.options.onProgress({loaded, failed, total:consumer.store.sequence.frameCount, previewLoaded, previewTotal, previewFailed});
        }
      }
    };
    if (consumer.progressLoaded < 0 || urgent || typeof window.requestAnimationFrame !== 'function' || typeof window.cancelAnimationFrame !== 'function') defer(deliver);
    else consumer.progressFrame = window.requestAnimationFrame(deliver);
  }
  function enqueueRequest(store, key, priority, index, pack, preview = false) {
    const existing = store.requests.get(key);
    if (existing) { existing.priority = Math.min(existing.priority, priority); return existing.promise; }
    let resolve, reject;
    const promise = new Promise((ok, fail) => { resolve = ok; reject = fail; });
    const request = {key, index, pack, preview, priority, promise, resolve, reject, started:false, controller:null};
    store.requests.set(key, request); schedulePump();
    return promise;
  }
  function requestBlob(store, index, priority) {
    if (store.disposed) return Promise.reject(new Error('Frame store disposed'));
    if (store.blobs.has(index)) return Promise.resolve(store.blobs.get(index));
    if (store.errors.has(index)) return Promise.reject(store.errors.get(index));
    const pack = store.packByIndex && store.packByIndex[index];
    if (pack) {
      let waiter = store.frameWaiters.get(index);
      if (!waiter) {
        let resolve, reject;
        const promise = new Promise((ok, fail) => { resolve = ok; reject = fail; });
        waiter = {promise, resolve, reject}; store.frameWaiters.set(index, waiter);
      }
      void enqueueRequest(store, pack.source, priority, index, pack).catch(() => {});
      return waiter.promise;
    }
    return enqueueRequest(store, index, priority, index, null).then(() => {
      if (store.disposed || !store.blobs.has(index)) throw new Error('Frame store disposed');
      return store.blobs.get(index);
    });
  }
  async function digest(store, bytes) {
    const result = await store.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(result), byte => byte.toString(16).padStart(2, '0')).join('');
  }
  function webpPayload(bytes) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    return bytes.length >= 12 && bytes[0] === 82 && bytes[1] === 73 && bytes[2] === 70 && bytes[3] === 70
      && bytes[8] === 87 && bytes[9] === 69 && bytes[10] === 66 && bytes[11] === 80 && view.getUint32(4, true) + 8 === bytes.length;
  }
  function publishBlob(store, index, blob, generation, preview = false) {
    if (!current(store, generation)) throw new Error('Frame store disposed');
    (preview ? store.preview.blobs : store.blobs).set(index, blob);
    const waiter = !preview && store.frameWaiters.get(index);
    if (waiter) { store.frameWaiters.delete(index); waiter.resolve(blob); }
    for (const consumer of store.consumers) {
      scheduleProgress(consumer);
      if (preview || consumer.target === index) scheduleRender(consumer);
    }
    schedulePump();
  }
  function packTable(pack, bytes) {
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    if (bytes.length < 12 || 'ORBF0001'.split('').some((char, index) => bytes[index] !== char.charCodeAt(0))) throw new Error('Invalid frame pack magic');
    const count = view.getUint32(8, true), tableLength = 12 + count * 8;
    if (count !== pack.indices.length || tableLength > bytes.length) throw new Error('Invalid frame pack table count');
    let offset = tableLength;
    const rows = [];
    for (let row = 0; row < count; row++) {
      const index = view.getUint32(12 + row * 8, true), length = view.getUint32(16 + row * 8, true);
      if (index !== pack.indices[row] || length < 12 || offset + length > pack.byteLength
        || pack.frameBytes && length !== pack.frameBytes[row]) throw new Error('Invalid frame pack table row');
      rows.push({index, offset, length}); offset += length;
    }
    if (offset !== pack.byteLength) throw new Error('Trailing frame pack bytes');
    return rows;
  }
  async function unpack(store, pack, buffer) {
    if (buffer.byteLength !== pack.byteLength) throw new Error('Frame pack byte length mismatch');
    const hash = await digest(store, buffer);
    if (hash !== pack.sha256) throw new Error('Frame pack SHA-256 mismatch');
    const bytes = new Uint8Array(buffer), rows = packTable(pack, bytes);
    for (let row = 0; row < rows.length; row++) {
      const item = rows[row], payload = bytes.subarray(item.offset, item.offset + item.length);
      if (!webpPayload(payload)) throw new Error('Invalid frame pack WebP payload');
      if (pack.frameSha256 && await digest(store, payload) !== pack.frameSha256[row]) throw new Error('Frame payload SHA-256 mismatch');
    }
    return rows.map(row => [row.index, new Blob([new Uint8Array(buffer, row.offset, row.length)], {type:'image/webp'})]);
  }
  async function streamPack(store, request, response, generation) {
    const pack = request.pack, bytes = new Uint8Array(pack.byteLength), reader = response.body.getReader();
    const tableLength = 12 + pack.indices.length * 8;
    let received = 0, rows = null, next = 0, complete = false;
    request.reader = reader;
    armPreviewIdle(store, request, generation);
    try {
      for (;;) {
        const chunk = await reader.read();
        if (!current(store, generation)) throw new Error('Frame store disposed');
        if (request.previewIdleTimeout) throw new Error('Preview body stalled for eight seconds');
        if (chunk.done) break;
        if (!(chunk.value instanceof Uint8Array) || received + chunk.value.byteLength > pack.byteLength) throw new Error('Frame pack byte length mismatch');
        if (chunk.value.byteLength) armPreviewIdle(store, request, generation);
        bytes.set(chunk.value, received); received += chunk.value.byteLength;
        // The entire table is bound before even the first payload is published.
        if (!rows && received >= tableLength) rows = packTable(pack, bytes.subarray(0, received));
        while (rows && next < rows.length && received >= rows[next].offset + rows[next].length) {
          const row = rows[next], payload = bytes.subarray(row.offset, row.offset + row.length);
          if (!webpPayload(payload)) throw new Error('Invalid frame pack WebP payload');
          if (await digest(store, payload) !== pack.frameSha256[next]) throw new Error('Frame payload SHA-256 mismatch');
          publishBlob(store, row.index, new Blob([payload], {type:'image/webp'}), generation, request.preview); next++;
        }
      }
      if (received !== pack.byteLength || !rows || next !== rows.length) throw new Error('Truncated frame pack');
      if (await digest(store, bytes) !== pack.sha256) throw new Error('Frame pack SHA-256 mismatch');
      if (!current(store, generation)) throw new Error('Frame store disposed');
      complete = true;
    } finally {
      clearPreviewIdle(request);
      request.reader = null;
      if (!complete) { try { void Promise.resolve(reader.cancel()).catch(() => {}); } catch (_) {} }
      try { reader.releaseLock(); } catch (_) {}
    }
  }
  function nextFetch() {
    let choice = null;
    const previewsPending = Array.from(stores.values()).some(store => store.preview && !store.preview.finished && !store.preview.failed);
    for (const store of stores.values()) {
      const active = Array.from(store.requests.values()).filter(request => request.started).length;
      for (const request of store.requests.values()) {
        // Equal-priority work takes a free slot from the least-served panel.
        // One panel's surrounding views must not monopolize another's first view.
        if (!request.started && (!previewsPending || request.preview) && (!choice || request.priority < choice.request.priority
          || request.priority === choice.request.priority && active < choice.active)) choice = {store, request, active};
      }
    }
    return choice;
  }
  function pumpFetches() {
    while (fetchPending < MAX_FETCH_PENDING) {
      const next = nextFetch();
      if (!next) break;
      const {store, request} = next, generation = store.generation;
      request.started = true; request.controller = new AbortController(); fetchPending++;
      Promise.resolve().then(() => {
        if (!current(store, generation)) throw new Error('Frame store disposed');
        const init = {signal:request.controller.signal};
        // The validated content hash gives revised packets a distinct HTTP
        // cache key. Both whole-pack and per-frame checks still verify bytes.
        if (request.pack) init.cache = 'force-cache';
        if (request.pack && window.ComicAssetDelivery && typeof window.ComicAssetDelivery.fetch === 'function') return window.ComicAssetDelivery.fetch(request.pack.source, request.pack.sha256, init);
        const source = request.pack ? `${request.pack.source}?sha256=${request.pack.sha256}` : store.sequence.frames[request.index];
        return fetch(source, init);
      }).then(response => {
        request.deliveryResponse = response;
        if (!current(store, generation)) throw new Error('Frame store disposed');
        if (!response.ok) throw new Error(`Frame ${request.pack ? 'pack' : 'image'} HTTP ${response.status}`);
        if (request.pack && request.pack.frameBytes && response.body && typeof response.body.getReader === 'function') return streamPack(store, request, response, generation);
        return request.pack ? response.arrayBuffer().then(buffer => unpack(store, request.pack, buffer)) : response.blob();
      }).then(result => {
        if (!current(store, generation)) throw new Error('Frame store disposed');
        if (request.pack) {
          if (result) for (const [index, blob] of result) publishBlob(store, index, blob, generation, request.preview);
          if (request.preview) store.preview.finished = true;
        } else {
          if (!result || result.size === 0) throw new Error('Frame image is empty');
          store.blobs.set(request.index, result);
        }
        request.resolve();
        for (const consumer of store.consumers) scheduleProgress(consumer);
      }).catch(error => {
        if (request.deliveryResponse && !request.controller.signal.aborted && window.ComicAssetDelivery && typeof window.ComicAssetDelivery.markFailed === 'function') window.ComicAssetDelivery.markFailed(request.deliveryResponse);
        if (current(store, generation)) {
          // Independently verified payloads remain usable even if a later row or
          // the final pack hash fails; never publish any unverified remainder.
          const blobs = request.preview ? store.preview.blobs : store.blobs, errors = request.preview ? store.preview.errors : store.errors;
          if (request.preview) store.preview.failed = true;
          for (const index of request.pack ? request.pack.indices : [request.index]) {
            if (blobs.has(index)) continue;
            errors.set(index, error);
            const waiter = !request.preview && store.frameWaiters.get(index);
            if (waiter) { store.frameWaiters.delete(index); waiter.reject(error); }
          }
          for (const consumer of store.consumers) {
            scheduleProgress(consumer);
            if (store.errors.has(consumer.target)) scheduleRender(consumer);
          }
        }
        request.reject(error);
      }).finally(() => {
        clearPreviewIdle(request);
        if (store.requests.get(request.key) === request) store.requests.delete(request.key);
        fetchPending--; schedulePump();
      });
    }
  }
  function neighbors(consumer) {
    const count = consumer.store.sequence.frameCount, index = consumer.target;
    const offsets = consumer.direction ? [1,2,3,4].map(step => step * consumer.direction) : [-1,1,-2,2];
    return [...new Set(offsets.map(offset => ((index + offset) % count + count) % count))].filter(value => value !== index);
  }
  function requestDemand(consumer) {
    if (!consumer.store.sequence.packs) return;
    void requestBlob(consumer.store, consumer.target, 0).catch(() => {});
    for (const index of neighbors(consumer)) void requestBlob(consumer.store, index, 1).catch(() => {});
  }
  function wantedFrame(consumer, index = consumer.target) {
    const store = consumer.store, preview = store.preview;
    if (store.blobs.has(index) || !store.sequence.packs || !preview) return {index, preview:false};
    // Native front/reset must never reveal an unrelated approximate angle.
    if (index === 0) return preview.blobs.has(0) && !preview.errors.has(0) ? {index:0, preview:true} : {index:0, preview:false};
    let nearest = null, distance = Infinity;
    for (const candidate of preview.blobs.keys()) {
      if (preview.errors.has(candidate)) continue;
      const delta = Math.abs(candidate - index), gap = Math.min(delta, store.sequence.frameCount - delta);
      if (gap < distance || gap === distance && candidate < nearest) { nearest = candidate; distance = gap; }
    }
    return nearest === null ? {index, preview:false} : {index:nearest, preview:true};
  }
  function nextDecode() {
    // Derive demand from live consumers instead of accumulating stale seek promises.
    for (const store of stores.values()) {
      for (const consumer of store.consumers) {
        const {index, preview} = wantedFrame(consumer), key = pendingKey(index, preview);
        const blobs = preview ? store.preview.blobs : store.blobs, errors = preview ? store.preview.errors : store.errors;
        if ((consumer.actualIndex !== index || consumer.actualPreview !== preview) && !lru.has(keyFor(store, index, preview)) && !store.pending.has(key) && !errors.has(index)
          && (!store.sequence.packs || blobs.has(index))) return {store, index, preview, priority:0};
      }
    }
    for (const store of stores.values()) {
      for (const consumer of store.consumers) {
        for (const target of neighbors(consumer)) {
          const {index, preview} = wantedFrame(consumer, target), key = pendingKey(index, preview);
          const blobs = preview ? store.preview.blobs : store.blobs, errors = preview ? store.preview.errors : store.errors;
          if (consumer.prefetched.has(key)) continue;
          // Network waiters must not occupy the four bitmap-decode slots: a
          // freshly verified demanded frame can arrive before its neighbors.
          if (store.sequence.packs && !blobs.has(index)) continue;
          consumer.prefetched.add(key);
          if (!lru.has(keyFor(store, index, preview)) && !store.pending.has(key) && !errors.has(index)) return {store, index, preview, priority:1};
        }
      }
    }
    return null;
  }
  function pumpDecodes() {
    while (decodePending < MAX_DECODE_PENDING) {
      const next = nextDecode();
      if (!next) break;
      const {store, index, preview, priority} = next, generation = store.generation, key = pendingKey(index, preview);
      // Reserve capacity before createImageBitmap, so even its late result never
      // makes the live decoded bitmap count exceed24.
      while (lru.size + decodePending >= MAX_BITMAPS) evictOldest();
      store.pending.add(key); decodePending++;
      (preview ? Promise.resolve(store.preview.blobs.get(index)) : requestBlob(store, index, priority)).then(blob => {
        if (!current(store, generation)) return null;
        return createImageBitmap(blob);
      }).then(bitmap => {
        if (!bitmap) return;
        if (!current(store, generation)) { bitmap.close(); return; }
        const dimensions = preview ? store.preview.spec : store.sequence;
        if (bitmap.width !== dimensions.width || bitmap.height !== dimensions.height) {
          bitmap.close(); throw new Error('Frame dimensions do not match the bound media');
        }
        lru.set(keyFor(store, index, preview), {store, index, preview, bitmap});
        for (const consumer of store.consumers) {
          const wanted = wantedFrame(consumer);
          if (wanted.index === index && wanted.preview === preview) scheduleRender(consumer);
        }
      }).catch(error => {
        if (!current(store, generation)) return;
        (preview ? store.preview.errors : store.errors).set(index, error);
        for (const consumer of store.consumers) {
          scheduleProgress(consumer);
          if (preview || consumer.target === index) scheduleRender(consumer);
        }
      }).finally(() => {
        store.pending.delete(key); decodePending--; schedulePump();
      });
    }
  }
  function scheduleRender(consumer) {
    if (consumer.disposed || consumer.renderScheduled) return;
    consumer.renderScheduled = true;
    defer(() => {
      consumer.renderScheduled = false;
      if (consumer.disposed || consumer.store.disposed) return;
      const {index, preview} = wantedFrame(consumer), bitmap = peek(consumer.store, index, preview);
      if (!bitmap) {
        const error = !preview && consumer.store.errors.get(index);
        if (error && consumer.errorVersion !== consumer.version) {
          consumer.errorVersion = consumer.version;
          if (typeof consumer.options.onError === 'function') consumer.options.onError(error);
        }
        schedulePump(); return;
      }
      try { consumer.context.drawImage(bitmap, 0, 0, consumer.canvas.width, consumer.canvas.height); }
      catch (error) {
        if (typeof consumer.options.onError === 'function') consumer.options.onError(error);
        return;
      }
      consumer.actualIndex = index; consumer.actualPreview = preview;
      const sequence = consumer.store.sequence, firstReady = !consumer.ready;
      consumer.ready = true;
      if (firstReady && typeof consumer.options.onReady === 'function') consumer.options.onReady({frameCount:sequence.frameCount, width:sequence.width, height:sequence.height, sourceWidth:sequence.sourceWidth, sourceHeight:sequence.sourceHeight, duration:sequence.duration, preview});
      const wanted = wantedFrame(consumer);
      if (!consumer.disposed && wanted.index === index && wanted.preview === preview && typeof consumer.options.onFrame === 'function') consumer.options.onFrame({index, targetIndex:consumer.target, preview, currentTime:index / sequence.frameCount * sequence.duration, duration:sequence.duration, percent:index / sequence.frameCount * 100});
      schedulePump();
    });
  }
  function retainComplete(store) {
    // Keep only finished, independently verified compressed frames. A fresh
    // live store owns future callbacks; disposed async work is never revived.
    if (!store.sequence.packs || store.requests.size || store.errors.size || store.blobs.size !== store.sequence.frameCount) return;
    const bytes = Array.from(store.blobs.values()).reduce((sum, blob) => sum + blob.size, 0);
    if (!Number.isSafeInteger(bytes) || bytes <= 0 || bytes > MAX_RETAINED_BYTES) return;
    const old = retained.get(store.key);
    if (old) { retainedBytes -= old.bytes; retained.delete(store.key); }
    retained.set(store.key, {bytes, blobs:new Map(store.blobs)}); retainedBytes += bytes;
    while (retained.size > MAX_RETAINED_STORES || retainedBytes > MAX_RETAINED_BYTES) {
      const key = retained.keys().next().value;
      retainedBytes -= retained.get(key).bytes; retained.delete(key);
    }
  }
  function disposeStore(store) {
    retainComplete(store);
    store.disposed = true; store.generation++;
    if (stores.get(store.key) === store) stores.delete(store.key);
    for (const [key, entry] of lru) if (entry.store === store) { entry.bitmap.close(); lru.delete(key); }
    for (const request of store.requests.values()) {
      clearPreviewIdle(request);
      if (request.controller) request.controller.abort();
      if (request.reader) { try { void Promise.resolve(request.reader.cancel()).catch(() => {}); } catch (_) {} }
      request.reject(new Error('Frame store disposed'));
    }
    for (const waiter of store.frameWaiters.values()) waiter.reject(new Error('Frame store disposed'));
    store.frameWaiters.clear();
    store.requests.clear(); store.blobs.clear(); store.errors.clear(); store.pending.clear();
    if (store.preview) { store.preview.blobs.clear(); store.preview.errors.clear(); }
    schedulePump();
  }
  function create(panel, page, options = {}) {
    const sequence = boundSequence(panel, page);
    if (!sequence || typeof fetch !== 'function' || typeof createImageBitmap !== 'function' || typeof AbortController !== 'function'
      || (sequence.packs && (!window.crypto || !window.crypto.subtle || typeof window.crypto.subtle.digest !== 'function'))) return null;
    let canvas, context;
    try { canvas = document.createElement('canvas'); context = canvas.getContext('2d'); }
    catch (_) { return null; }
    if (!context) return null;
    canvas.width = sequence.width; canvas.height = sequence.height;
    canvas.setAttribute('aria-hidden', 'true');
    const previewSequence = boundPreview(panel, page, sequence);
    const key = JSON.stringify([sequence.mediaSha256, sequence.videoSource, sequence.frameCount, sequence.sourceWidth, sequence.sourceHeight, sequence.width, sequence.height, sequence.duration, sequence.frames, sequence.packs, previewSequence]);
    let store = stores.get(key);
    if (!store) {
      const warm = retained.get(key);
      if (warm) { retained.delete(key); retainedBytes -= warm.bytes; }
      const packByIndex = sequence.packs ? new Array(sequence.frameCount) : null;
      if (packByIndex) for (const pack of sequence.packs) for (const index of pack.indices) packByIndex[index] = pack;
      const preview = !warm && previewSequence ? {spec:previewSequence, blobs:new Map(), errors:new Map(), finished:false, failed:false} : null;
      store = {key, id:++serial, sequence, preview, packByIndex, subtle:sequence.packs ? window.crypto.subtle : null, generation:0, disposed:false, consumers:new Set(), blobs:warm ? new Map(warm.blobs) : new Map(), frameWaiters:new Map(), requests:new Map(), pending:new Set(), errors:new Map()};
      stores.set(key, store);
      if (preview) void enqueueRequest(store, preview.spec.pack.source, -2, 0, preview.spec.pack, true).catch(() => {});
      // Compressed images are small and reusable; decode only the requested/nearby frames.
      if (sequence.packs) {
        // Demand and its neighbors do not necessarily touch every interleaved
        // pack (for example 162 frames only touches three of the four packs).
        // Queue complete coverage once; live demand below promotes its own work.
        for (const pack of sequence.packs) if (!pack.indices.every(index => store.blobs.has(index))) void enqueueRequest(store, pack.source, 2, pack.indices[0], pack).catch(() => {});
      } else for (let index = 0; index < sequence.frameCount; index++) void requestBlob(store, index, 2).catch(() => {});
    }
    const consumer = {store, canvas, context, options, target:0, actualIndex:-1, actualPreview:false, ready:false, disposed:false, direction:0, version:0, errorVersion:-1, prefetched:new Set(), renderScheduled:false, progressScheduled:false, progressFrame:null, progressVersion:0, progressLoaded:-1, progressFailed:-1, previewProgressLoaded:-1, previewProgressFailed:-1};
    store.consumers.add(consumer);
    function setPercent(percent) {
      if (consumer.disposed || !Number.isFinite(Number(percent))) return;
      const next = Math.min(sequence.frameCount - 1, Math.floor(Math.max(0, Math.min(100, Number(percent))) / 100 * sequence.frameCount + 1e-9));
      if (next !== consumer.target) {
        let delta = next - consumer.target;
        if (Math.abs(delta) > sequence.frameCount / 2) delta += delta > 0 ? -sequence.frameCount : sequence.frameCount;
        consumer.direction = Math.sign(delta); consumer.target = next; consumer.version++; consumer.prefetched.clear();
      }
      requestDemand(consumer); scheduleRender(consumer); schedulePump();
    }
    function reset() {
      if (consumer.disposed) return;
      consumer.version++; consumer.direction = 0; consumer.prefetched.clear();
      setPercent(0);
    }
    function destroy() {
      if (consumer.disposed) return;
      consumer.disposed = true; consumer.ready = false; store.consumers.delete(consumer);
      consumer.progressVersion++;
      if (consumer.progressFrame !== null) window.cancelAnimationFrame(consumer.progressFrame);
      consumer.progressFrame = null; consumer.progressScheduled = false;
      canvas.width = 0; canvas.height = 0;
      if (!store.consumers.size) disposeStore(store);
    }
    // Includes cache hits: no callback can run until the caller has assigned its handle.
    scheduleProgress(consumer); requestDemand(consumer); scheduleRender(consumer); schedulePump();
    return Object.freeze({canvas, setPercent, reset, destroy,
      get currentTime() { return consumer.actualIndex < 0 ? 0 : consumer.actualIndex / sequence.frameCount * sequence.duration; },
      get index() { return consumer.actualIndex; }, get ready() { return consumer.ready; }});
  }
  window.OrbitFrameCache = Object.freeze({create});
})();

;
/* interaction-layouts.js */
window.COMIC_INTERACTION_LAYOUTS = Object.freeze({
  "schemaVersion": 1,
  "coordinateSpace": "source-panel",
  "purpose": "Independent views of sequential narrative moments; presentation metadata does not add accepted primary panels.",
  "layouts": [
    {
      "panelId": "page-008-panel-01",
      "coordinateSpace": "source-panel",
      "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
      "sourcePanelSha256": "b78f3bd42da66d56545e11b30cc1b9dd1fd793bdad646f8a244482b5378fc169",
      "mediaSha256": "dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b",
      "videoSource": "videos/page-008-panel-01-dcbadfc23d5e.mp4",
      "overlaySha256": "1192fd9e3735fc0561aba71034d2cb2aab91debd95a84d82dd25d595c43a4048",
      "sourceBounds": {
        "x": 0,
        "y": 0,
        "width": 1600,
        "height": 2000
      },
      "regions": [
        {
          "id": "gasp",
          "title": "惊讶",
          "artworkRect": {
            "x": 1,
            "y": 16,
            "width": 469,
            "height": 834
          }
        },
        {
          "id": "stomp",
          "title": "跺脚",
          "artworkRect": {
            "x": 548,
            "y": 451,
            "width": 672,
            "height": 804
          }
        },
        {
          "id": "cry",
          "title": "哭喊",
          "artworkRect": {
            "x": 681,
            "y": 1311,
            "width": 885,
            "height": 482
          }
        }
      ],
      "producerLayoutEvidence": [
        {
          "file": "qa/public-acceptance/page-008-panel-01-bounds.json",
          "sha256": "f33ce52c5ccc3005d468f1d19b638671f42309faa2f76bf7660a7b675f7ade8e"
        }
      ],
      "verification": {
        "status": "passed",
        "sourcePageSha256": "cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d",
        "mediaSha256": "dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b",
        "overlaySha256": "1192fd9e3735fc0561aba71034d2cb2aab91debd95a84d82dd25d595c43a4048",
        "evidence": [
          {
            "file": "qa/public-interactions/page-008-panel-01.json",
            "sha256": "1b9a6354cf5baae603cc3dbcf8060d0039b998bc38a6564c3bac46de4182cbd4"
          }
        ]
      }
    },
    {
      "panelId": "page-020-panel-01",
      "coordinateSpace": "source-panel",
      "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
      "sourcePanelSha256": "cecf5fddda96489b28abaebece0701a1ca949e78818496022d4217ab68486cb3",
      "mediaSha256": "db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192",
      "videoSource": "videos/page-020-panel-01-db3168ad111e.mp4",
      "overlaySha256": "a0352084bbca52ffefee522eb3c3d8ef7d1bb6ec2e82f4e44195a64940d4beda",
      "sourceBounds": {
        "x": 0,
        "y": 0,
        "width": 1600,
        "height": 2000
      },
      "regions": [
        {
          "id": "gasp",
          "title": "雨中惊讶",
          "artworkRect": {
            "x": 110,
            "y": 190,
            "width": 385,
            "height": 608
          }
        },
        {
          "id": "stomp",
          "title": "雨中跺脚",
          "artworkRect": {
            "x": 804,
            "y": 347,
            "width": 518,
            "height": 593
          }
        },
        {
          "id": "lying",
          "title": "雨中倒地哭喊",
          "artworkRect": {
            "x": 24,
            "y": 1038,
            "width": 827,
            "height": 574
          }
        },
        {
          "id": "kneel",
          "title": "仰头呼喊",
          "artworkRect": {
            "x": 1037,
            "y": 1197,
            "width": 461,
            "height": 516
          }
        }
      ],
      "producerLayoutEvidence": [
        {
          "file": "qa/public-acceptance/page-020-panel-01-bounds.json",
          "sha256": "bf938775a178ba7a22e79fc6af7ca148edbc565c45b038e9c48487a7a64c6f97"
        }
      ],
      "verification": {
        "status": "passed",
        "sourcePageSha256": "3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d",
        "mediaSha256": "db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192",
        "overlaySha256": "a0352084bbca52ffefee522eb3c3d8ef7d1bb6ec2e82f4e44195a64940d4beda",
        "evidence": [
          {
            "file": "qa/public-interactions/page-020-panel-01.json",
            "sha256": "4f422f4ae72ab3787d449c387afdaaf0f4473cccf8a1aec173e89aff6ee8b80d"
          }
        ]
      }
    }
  ]
});

;
/* protection-resources.js */
(() => {
  "use strict";
  const data = {"schemaVersion":1,"encoding":"webp-lossless-exact","coordinateSpace":"source-panel","entries":[{"panelId":"page-002-panel-01","sourcePageSha256":"b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724","mediaSha256":"cbd9e5a1b0ba1dec8d917b44f47870cf2c169632be345f2b57f9ec39e6071184","originalSource":"publication/page-002-panel-01-38767869640e.png","originalSha256":"38767869640e48a413202f98aed29c62ba7bd56e64a3e25ef2622befb641c993","originalByteLength":379845,"width":1600,"height":2000,"source":"publication-webp/protection-a8bd23c6418ccfab86030cec67ae1577897e260cfc202390587327acaabd1260.webp","sha256":"a8bd23c6418ccfab86030cec67ae1577897e260cfc202390587327acaabd1260","byteLength":242406,"rgbaSha256":"1f52ef41df15c8d9b068ea7606bfd17c868279e5adbfe7e572f92a16db335c60"},{"panelId":"page-003-panel-01","sourcePageSha256":"d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235","mediaSha256":"a2bfa5a5b3ec8e8216b768b07dbcaf6629951e9b3883957822f92545437ebc7e","originalSource":"publication/page-003-panel-01-3b0d7e173293.png","originalSha256":"3b0d7e173293e13def4f65b7314c725e64d1dab043dcd3a55bcabb5b20249df6","originalByteLength":1809915,"width":1600,"height":2000,"source":"publication-webp/protection-51c8ddd9c439113785716259d9c828e044dadbefef43ad67c2be53816cc748c8.webp","sha256":"51c8ddd9c439113785716259d9c828e044dadbefef43ad67c2be53816cc748c8","byteLength":1150612,"rgbaSha256":"825d239e5d9a07f7d2ebb007b7787a619514ad36078eca98b8197d7776d94110"},{"panelId":"page-004-panel-01","sourcePageSha256":"3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823","mediaSha256":"294182ddad19746236b7d584e94fd41586410428f0e78cd5f26776c5e967c8fe","originalSource":"publication/page-004-panel-01-7361a34d33c3.png","originalSha256":"7361a34d33c3f17f714f187ebe7a83d041bcb41e839e231f61eee31a948f5cab","originalByteLength":351965,"width":1600,"height":2000,"source":"publication-webp/protection-af45c9049d0be9e307275c73223b9840c51d3044dcf34e3eb3a19ac218ad1b3f.webp","sha256":"af45c9049d0be9e307275c73223b9840c51d3044dcf34e3eb3a19ac218ad1b3f","byteLength":225964,"rgbaSha256":"d6ea0c0f288093443f87abbbf2d5a3eee9ae129140afd25cb1d36d1970d4dbce"},{"panelId":"page-005-panel-01","sourcePageSha256":"1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f","mediaSha256":"47eb640ab859e7eb02a621ca23dfc12d50d15a88e74ee49d9300e0df16f88e59","originalSource":"publication/page-005-panel-01-0d90c80fd6fa.png","originalSha256":"0d90c80fd6fa3e312f7347ac97a8fac2666efa08af190853563abcedb23d44ff","originalByteLength":266857,"width":1600,"height":760,"source":"publication-webp/protection-2205b837545581e3d6e711c2e270e8d18bdb4cc6122500754657ed12f1ba46b0.webp","sha256":"2205b837545581e3d6e711c2e270e8d18bdb4cc6122500754657ed12f1ba46b0","byteLength":168188,"rgbaSha256":"ad1f7ed72f67e63abbb070584b7d391723716a644fd2c4d0967f13faa573823c"},{"panelId":"page-005-panel-02","sourcePageSha256":"1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f","mediaSha256":"74866a546608ef7714fe30c0ece81ff4e35b6cf1bd3ec064bdab8016d14e28aa","originalSource":"publication/page-005-panel-02-9c11c1694475.png","originalSha256":"9c11c169447590ee398670f648018c4ed591afbea5db7ae47f0a8bcc90c638b5","originalByteLength":187384,"width":1600,"height":1240,"source":"publication-webp/protection-39d14f7a0f66876db519b2ee0ff2aa1a78a34b5307683ab944a730724260f263.webp","sha256":"39d14f7a0f66876db519b2ee0ff2aa1a78a34b5307683ab944a730724260f263","byteLength":113876,"rgbaSha256":"7e7611c2832aa663e67e25266e2a230ab28f73bb9b263a682d9c9280c5ee0759"},{"panelId":"page-006-panel-01","sourcePageSha256":"e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696","mediaSha256":"e28232b2f6664c0ffa6f3c7f20e2e0ba60f7a661bff34974ba61d745004d1a4c","originalSource":"publication/page-006-panel-01-fac4916e842c.png","originalSha256":"fac4916e842c7b5710c88173e74d0673a2da22a58f49acc7d601c19719c2b2cc","originalByteLength":260930,"width":1600,"height":2000,"source":"publication-webp/protection-790f46c9bab17ac3d4af58856f78c9614d18c7ec8fdcd75f743356f092ac1e79.webp","sha256":"790f46c9bab17ac3d4af58856f78c9614d18c7ec8fdcd75f743356f092ac1e79","byteLength":140248,"rgbaSha256":"1fdad48abf20d3c1b8dd0c792d2e3623a3553b9c6186294b077a73f0f0d5bdb7"},{"panelId":"page-007-panel-01","sourcePageSha256":"b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41","mediaSha256":"ce9fb467b2b2df41c915edd466f8daefcb2b22d0fe755ea69061773f6f7c1cc6","originalSource":"publication/page-007-panel-01-c7a1196a2a62.png","originalSha256":"c7a1196a2a626f12037ca165c22b035ea12956a42110ec634d9fb20d8f56991a","originalByteLength":275920,"width":1600,"height":2000,"source":"publication-webp/protection-221b2d4fffb327a8b3e074f4492d5907744829454f726a8991623f7adbb6415e.webp","sha256":"221b2d4fffb327a8b3e074f4492d5907744829454f726a8991623f7adbb6415e","byteLength":168716,"rgbaSha256":"ee86f3e979c3cf368dd437f2df579d6d2c533960c5a075d87b50016c6b45b18f"},{"panelId":"page-008-panel-01","sourcePageSha256":"cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d","mediaSha256":"dcbadfc23d5e1875d5e6202993f8a391b7134d8a8f1210b4a101c591cbcd2c1b","originalSource":"publication/page-008-panel-01-1192fd9e3735.png","originalSha256":"1192fd9e3735fc0561aba71034d2cb2aab91debd95a84d82dd25d595c43a4048","originalByteLength":247685,"width":1600,"height":2000,"source":"publication-webp/protection-b504eeae01db7dfbb40392c129d2b8b2771757a7621ce0159c0822b38cabd7e7.webp","sha256":"b504eeae01db7dfbb40392c129d2b8b2771757a7621ce0159c0822b38cabd7e7","byteLength":141776,"rgbaSha256":"21d01003b7124956fbdbb7f0bf6937e081cb5d378ca3586e51ba5103f3fded63"},{"panelId":"page-009-panel-01","sourcePageSha256":"5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1","mediaSha256":"7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7","originalSource":"publication/page-009-panel-01-3e1bf37d7c20.png","originalSha256":"3e1bf37d7c20fb0618db360ff3bb31821e5fda93a87d7fb7159cef220965c9f0","originalByteLength":408205,"width":1600,"height":2000,"source":"publication-webp/protection-fc75027cbef06c082e1c19debbe3f3d6df323bd846203765fd89e066495d810b.webp","sha256":"fc75027cbef06c082e1c19debbe3f3d6df323bd846203765fd89e066495d810b","byteLength":271448,"rgbaSha256":"f46644b445a0d60d73cdd6a2e51e9388888dd876502463eb24b73b90ab0f9e1c"},{"panelId":"page-010-panel-01","sourcePageSha256":"9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070","mediaSha256":"2be85e3ab05e763828610e9c57932de58b8f97bc44a82af5ea893bf9cd08750c","originalSource":"publication/page-010-panel-01-844dfd95975b.png","originalSha256":"844dfd95975b88d6ecc7322f68f4eca78df60ceaa317f5aa79e57f3ae69f5a1b","originalByteLength":357190,"width":1600,"height":2000,"source":"publication-webp/protection-6a0d32378a88baf87c86395078bb6c0a97f2781cc94582026558abee1e61cb5c.webp","sha256":"6a0d32378a88baf87c86395078bb6c0a97f2781cc94582026558abee1e61cb5c","byteLength":206736,"rgbaSha256":"c5dee8c23e7bcc8739fcdcf4dc314631fa09384a8f2829509eac6a7f6f6ce274"},{"panelId":"page-011-panel-01","sourcePageSha256":"d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4","mediaSha256":"3a7132420ee72df5c9fcd7a4696d9392416be29005675ba5884656b4eecd5b5d","originalSource":"publication/page-011-panel-01-1a72d5b80481.png","originalSha256":"1a72d5b80481b202e12edbdb172c832d73da0626a504fa9de49786abd9d689a7","originalByteLength":373837,"width":1600,"height":2000,"source":"publication-webp/protection-3e7e2a207a7771497c4b660ce59f11fbc7b5adb65c235fd109080ec3912dcd96.webp","sha256":"3e7e2a207a7771497c4b660ce59f11fbc7b5adb65c235fd109080ec3912dcd96","byteLength":231506,"rgbaSha256":"0071c4945fe3cf7cfe9121464be1133332b766f83a50bfa58b5ff4482fa4f723"},{"panelId":"page-012-panel-01","sourcePageSha256":"399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa","mediaSha256":"c315e2598a440f75e8d515f267584a5d4ecf89150b6a07f77330716cd1ff4d2a","originalSource":"publication/page-012-panel-01-a899f8641848.png","originalSha256":"a899f864184896608c4a63482ff0ac764506ac6f5812c5d9bed7c8642e332f1c","originalByteLength":423760,"width":1600,"height":2000,"source":"publication-webp/protection-d4aedc2eaa7882195f7e65faa20a4ed7354c1ef8c401bdb49479411e30fcc592.webp","sha256":"d4aedc2eaa7882195f7e65faa20a4ed7354c1ef8c401bdb49479411e30fcc592","byteLength":285178,"rgbaSha256":"5c6e2db7fa5e09413c35d4e4a8fe4032aa5bb1beb6dba8a0ca1b806643d76c0d"},{"panelId":"page-013-panel-01","sourcePageSha256":"d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb","mediaSha256":"eb1af69b0b39bedf79db1e9adf201546f61f84d631a7047c26624022cfb279c2","originalSource":"publication/page-013-panel-01-5efc09325642.png","originalSha256":"5efc093256420ec399859ff80ce7efaf0ca8074c9d6d8f08897d5decd5cc3bf2","originalByteLength":135207,"width":1600,"height":2000,"source":"publication-webp/protection-f584c2f2627a5e7dab5266c45829a755ff3700a568954a79b0a3535a176bbf6f.webp","sha256":"f584c2f2627a5e7dab5266c45829a755ff3700a568954a79b0a3535a176bbf6f","byteLength":74698,"rgbaSha256":"24862d6e0abbd58ac4205408daa58fc7818cf24a716b9bcfc95d6eb775e72530"},{"panelId":"page-014-panel-01","sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","mediaSha256":"ff8c4fba139f77aa0562041d9e5b02ff7c6e08561bade192a07e1f584987e562","originalSource":"publication/page-014-panel-01-sharedpairs-e08800b3bfaa.png","originalSha256":"e08800b3bfaa57d628b003f89d49b688c53bb22c0baf3d7c3dcd17e6e1ab1f0b","originalByteLength":308686,"width":1600,"height":2000,"source":"publication-webp/protection-860c276b6999e8d9b522b11b2828f489582af756de1d61d503f9862c4ddff571.webp","sha256":"860c276b6999e8d9b522b11b2828f489582af756de1d61d503f9862c4ddff571","byteLength":179874,"rgbaSha256":"a0daa9e4ff0dc52bca518ee453cfd417157f89532beabbc1873d93954d99c104"},{"panelId":"page-015-panel-01","sourcePageSha256":"5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1","mediaSha256":"7b0a43fd624e389ec40ed2b16f3cf8f0c49d36a02c6af3d7a6b3f4b6826022b7","originalSource":"publication/page-015-panel-01-3e1bf37d7c20.png","originalSha256":"3e1bf37d7c20fb0618db360ff3bb31821e5fda93a87d7fb7159cef220965c9f0","originalByteLength":408205,"width":1600,"height":2000,"source":"publication-webp/protection-fc75027cbef06c082e1c19debbe3f3d6df323bd846203765fd89e066495d810b.webp","sha256":"fc75027cbef06c082e1c19debbe3f3d6df323bd846203765fd89e066495d810b","byteLength":271448,"rgbaSha256":"f46644b445a0d60d73cdd6a2e51e9388888dd876502463eb24b73b90ab0f9e1c"},{"panelId":"page-016-panel-01","sourcePageSha256":"f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3","mediaSha256":"3da7e729068283603954b3b236c0d20970c465090666d2d899d82a72ccb7206f","originalSource":"publication/page-016-panel-01-4cf4442b563b.png","originalSha256":"4cf4442b563b141f5d5c4985bd3cb4cd5fe901fc8b02b33b62c4eba9d1c3e0e8","originalByteLength":172326,"width":1600,"height":2000,"source":"publication-webp/protection-a9af8d6068968bdd59ec3a98a6128da8647835a6d6b13d9fbc1f8b006c401981.webp","sha256":"a9af8d6068968bdd59ec3a98a6128da8647835a6d6b13d9fbc1f8b006c401981","byteLength":107516,"rgbaSha256":"51873f09f586a2f1b4e9f7ee466a34dec2d275ad7ebd0c536d48ef6328368e73"},{"panelId":"page-017-panel-01","sourcePageSha256":"dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11","mediaSha256":"d9349324d028c9c1f87523fa1f0d749286eed83c0b9f4f1c2482e82a1125e502","originalSource":"publication/page-017-panel-01-da7578702735.png","originalSha256":"da757870273592033e5c4fdfbbfa1f4a138e0a17e9f7d2f46fd44a83640aada3","originalByteLength":331661,"width":1600,"height":2000,"source":"publication-webp/protection-c0cd71d73f700df243ba3eb442d616af7b1a5df486953a92198f8876072234cb.webp","sha256":"c0cd71d73f700df243ba3eb442d616af7b1a5df486953a92198f8876072234cb","byteLength":214346,"rgbaSha256":"af872ba234281dae184cf1008aa256834855907969642e0e2ac092a36eec263a"},{"panelId":"page-018-panel-01","sourcePageSha256":"28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87","mediaSha256":"ce27d022cf1538f37314449a5db87fec92d6db43079e9b6d047784f836369010","originalSource":"publication/page-018-panel-01-a1a199f82128.png","originalSha256":"a1a199f821288079214025a234025437e7911f52ecfb4bbc5c1b35e21fabf819","originalByteLength":467057,"width":1600,"height":2000,"source":"publication-webp/protection-9f32fcf51d0c88d54133153a68de446d944e5668d8829e71e511d3b8d4fcbce6.webp","sha256":"9f32fcf51d0c88d54133153a68de446d944e5668d8829e71e511d3b8d4fcbce6","byteLength":298258,"rgbaSha256":"e15595dcc4b1614c71e0c6c749438aa7547438fcd7e35aee75eae0c97e68a490"},{"panelId":"page-019-panel-01","sourcePageSha256":"192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63","mediaSha256":"72e21397b801032961f52a11b02ae6a72fc9b57916bb09525e26c6227a6d3675","originalSource":"publication/page-019-panel-01-8c26d92fe234.png","originalSha256":"8c26d92fe23455d332e0e076ec207bcae4216d396883dfbc2e8c0ac89813db7e","originalByteLength":302068,"width":1600,"height":760,"source":"publication-webp/protection-da3ee05a71372fcda7b01c3d374e37a68f46a7b851eb7f696b564a7d65f86670.webp","sha256":"da3ee05a71372fcda7b01c3d374e37a68f46a7b851eb7f696b564a7d65f86670","byteLength":183382,"rgbaSha256":"a0df3d306f9960c6ea4227a3dfdeff2c5a16f22cba25dc7cb13274c83b4b0ad6"},{"panelId":"page-019-panel-02","sourcePageSha256":"192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63","mediaSha256":"a6af52d0ef6ac3744e80ec8b014065863239da5a7190dedf1da9fff1f5f00cf7","originalSource":"publication/page-019-panel-02-0e576d5cdec9.png","originalSha256":"0e576d5cdec94b33e5eafc3ed1bb89ae36f6f519e910dc8382e0fdc2a486e440","originalByteLength":152599,"width":1600,"height":1240,"source":"publication-webp/protection-9bc7aedac92c31af411fdef904baa431c3110c5cf1d92853898fc4d9742408fe.webp","sha256":"9bc7aedac92c31af411fdef904baa431c3110c5cf1d92853898fc4d9742408fe","byteLength":76976,"rgbaSha256":"07b48077a59b187367c72fd1a9e91e1f5cd10017306641a0433260f4e8bf31fb"},{"panelId":"page-020-panel-01","sourcePageSha256":"3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d","mediaSha256":"db3168ad111e981ada7cdf91392d3e478620dbed42428f953e0ccaddb1085192","originalSource":"publication/page-020-panel-01-a0352084bbca.png","originalSha256":"a0352084bbca52ffefee522eb3c3d8ef7d1bb6ec2e82f4e44195a64940d4beda","originalByteLength":227445,"width":1600,"height":2000,"source":"publication-webp/protection-6b73ac8fbbbbe2e86f95b61fd40cc4e6605f2483e12336e647846dbebde4a07b.webp","sha256":"6b73ac8fbbbbe2e86f95b61fd40cc4e6605f2483e12336e647846dbebde4a07b","byteLength":126442,"rgbaSha256":"8548733a63232392717ad3fc8028ceded97a1b7fa4e0095340effd04b8c0a91f"},{"panelId":"page-021-panel-01","sourcePageSha256":"2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7","mediaSha256":"6aadb1ca8171915c2eb80c177b6d5dc43e759093955c82fe472969ee6c7a1e5d","originalSource":"publication/page-021-panel-01-cc6415f0a583.png","originalSha256":"cc6415f0a583925dbda2612262b41384f05d85e7675c04ce4a13efa98f77368b","originalByteLength":367607,"width":1600,"height":2000,"source":"publication-webp/protection-5a87a4d0351e83ad763dec55d8f60515b388a2eb464ac282955f5b9b77a2e49b.webp","sha256":"5a87a4d0351e83ad763dec55d8f60515b388a2eb464ac282955f5b9b77a2e49b","byteLength":219262,"rgbaSha256":"8f27fd45f9b7153f73a63e9468621435526d6334a710cf718112e49becf2efb0"},{"panelId":"page-022-panel-01","sourcePageSha256":"5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64","mediaSha256":"602b0cc5195cf9f3f100167190da398cd30e9431dcd94a6d41042f0162d7da12","originalSource":"publication/page-022-panel-01-0f522a28cd9b.png","originalSha256":"0f522a28cd9b3c31b77611ac27b2be889c77d7d45ace3802e243fef2e6f038be","originalByteLength":230650,"width":1600,"height":2000,"source":"publication-webp/protection-3df1deb702f5559a3ae3e70f37e93a148a7f6d3338cf997cd1ff94c9fb9b5f34.webp","sha256":"3df1deb702f5559a3ae3e70f37e93a148a7f6d3338cf997cd1ff94c9fb9b5f34","byteLength":117894,"rgbaSha256":"bb19fcc0265d82eff52d0178d0defb11b1184477309dd7636ce0ae4f3cc7b067"},{"panelId":"page-023-panel-01","sourcePageSha256":"f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334","mediaSha256":"6d107e3d373acd5acfab857f62c7854ec90c69ce930abe38f68234d196b2652a","originalSource":"publication/page-023-panel-01-19aaf2ad402a.png","originalSha256":"19aaf2ad402ac013068174d6cf0303b7438824ff66ffc73775cff4c2c189a435","originalByteLength":1347178,"width":1564,"height":1131,"source":"publication-webp/protection-f891e7fd313135c50d4a6812634c1ae7a934ea227381a0cdd24405b293d6157e.webp","sha256":"f891e7fd313135c50d4a6812634c1ae7a934ea227381a0cdd24405b293d6157e","byteLength":862180,"rgbaSha256":"6bce8f4660cb66ed64f8645b7cdd74678f2d2e9c8220d864d9df1ba60afac9c0"},{"panelId":"page-023-panel-02","sourcePageSha256":"f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334","mediaSha256":"9ed86aae5d5ef7dc07fa0a1618b6a04210c07e0007d99853eedfa572c6c9b729","originalSource":"publication/page-023-panel-02-b2652ce656f6.png","originalSha256":"b2652ce656f63f8880349598a65cacae78224acae9930a1fab9c0018fbebddd5","originalByteLength":795249,"width":1600,"height":859,"source":"publication-webp/protection-8f5e651113c59f9822af6ff2380b72343895603da970f19ca4895c1c0451e188.webp","sha256":"8f5e651113c59f9822af6ff2380b72343895603da970f19ca4895c1c0451e188","byteLength":503938,"rgbaSha256":"6036abebfeb68972ae594c2cbcc453c89bffcc5e2e1aff1ff333c726cbb7f209"},{"panelId":"page-024-panel-01","sourcePageSha256":"885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00","mediaSha256":"cb514202c8470a45fa8cd369a39a0c7b12d9d12b345e08ede4f9268ee9ef8bd9","originalSource":"publication/page-024-panel-01-315486ed25ef.png","originalSha256":"315486ed25efa040434c975b8ab9ca01aeda29c90e6256a735db59846d5cb2f0","originalByteLength":170436,"width":1600,"height":2000,"source":"publication-webp/protection-5a9b30970bb125020a98227fba2ae82fdda8318e759788a15582766f8cdf5f2f.webp","sha256":"5a9b30970bb125020a98227fba2ae82fdda8318e759788a15582766f8cdf5f2f","byteLength":94342,"rgbaSha256":"89c748a7a0eb21001686a6e46297674e787c6a95d44af7be3f144cdda3ef7348"},{"panelId":"page-025-panel-01","sourcePageSha256":"c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152","mediaSha256":"5ecaab4752bfa2ba1147dab68bc68f93d6de3431ca6eb0765826726ecce74c13","originalSource":"publication/page-025-panel-01-753fbb873866.png","originalSha256":"753fbb87386691f0c62583eb7eed85b3602422d60c022b539e1da892b39d67bd","originalByteLength":485823,"width":1600,"height":2000,"source":"publication-webp/protection-9ccdc15f6b2d1ddaf829b9467d1021fff4a19528c636823dfbb546c3f05035f4.webp","sha256":"9ccdc15f6b2d1ddaf829b9467d1021fff4a19528c636823dfbb546c3f05035f4","byteLength":307572,"rgbaSha256":"12ef7e3352436b82bc50310e234e3aea58b2dbda6392e563003a44e8b959a4d2"},{"panelId":"page-026-panel-01","sourcePageSha256":"433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c","mediaSha256":"cdb8accd93304beda858a5fa6157fc66efee14ce0f8f2982fc88c14219f2d689","originalSource":"publication/page-026-panel-01-c13dc1284042.png","originalSha256":"c13dc1284042efd48f59126c4458fdaf44bb64afbdc7915dfaee8eddae7a1709","originalByteLength":327157,"width":1600,"height":2000,"source":"publication-webp/protection-991ec6e23f61a841e1cdd7c7a5e6707286b85169269f496713c3a06bd8733d33.webp","sha256":"991ec6e23f61a841e1cdd7c7a5e6707286b85169269f496713c3a06bd8733d33","byteLength":177420,"rgbaSha256":"2c999a1ccbb9e3b38a68bef96d74696f5271e14297151e6e638c0ff5c62b89d1"},{"panelId":"page-027-panel-01","sourcePageSha256":"8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9","mediaSha256":"7672c3be4b07db5c0d6cb3dff294f474d2c124fa077052dfd2e9a39f719f6031","originalSource":"publication/page-027-panel-01-59cb8968ff8f.png","originalSha256":"59cb8968ff8f52b276206ad0396fa5079b545a38655b121bc184918aa8975bb3","originalByteLength":323670,"width":1600,"height":2000,"source":"publication-webp/protection-bbececcce6c885750c60df4892af5302784870b4f995e7b193ef9f42143af217.webp","sha256":"bbececcce6c885750c60df4892af5302784870b4f995e7b193ef9f42143af217","byteLength":214908,"rgbaSha256":"7111a770b952292c7cef734d5a02c5506a8727ac4c8586d82541ae0e6846bb31"},{"panelId":"page-028-panel-01","sourcePageSha256":"52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8","mediaSha256":"2c20c097f4c70ea7237d5316b485bbaf3f0bead0d596d84635350df2529d82e2","originalSource":"publication/page-028-panel-01-c7288336b873.png","originalSha256":"c7288336b873bf948e762b779e13718137293f76f5231903c045f86b665b2d37","originalByteLength":406545,"width":1600,"height":2000,"source":"publication-webp/protection-c14a9ca832036562965231a3df62a212ef55b395f95dd9e622c90384f399f053.webp","sha256":"c14a9ca832036562965231a3df62a212ef55b395f95dd9e622c90384f399f053","byteLength":278606,"rgbaSha256":"e183d900ea8ef7673118dbc91af7b1a5e2dbea3d4b10f9f2ea48c06583cfd3c1"},{"panelId":"page-029-panel-01","sourcePageSha256":"244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2","mediaSha256":"f00bd9a1a00fe24edf93e94943354bf795c0c7af9250291477d7092a3340c80d","originalSource":"publication/page-029-panel-01-7a59cabde82b.png","originalSha256":"7a59cabde82b74d6d7fd632b1cc8cddd33499728a49337e556ac7b7e0eb493cf","originalByteLength":651668,"width":1600,"height":708,"source":"publication-webp/protection-e90ec02c13d4e527b25ae43de89149000d64582afd63c834cb2fdc36f5f03c0c.webp","sha256":"e90ec02c13d4e527b25ae43de89149000d64582afd63c834cb2fdc36f5f03c0c","byteLength":399854,"rgbaSha256":"d55700ac47745203a753269ac8a77f50a4ddbee158cb6aeb94f4f8440de3c157"},{"panelId":"page-029-panel-02","sourcePageSha256":"244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2","mediaSha256":"441a6ecfb90f0bacbba3e603b8027a321c268f7981058f8d40fddeb3d6a10239","originalSource":"publication/page-029-panel-02-d9ffedde5a62.png","originalSha256":"d9ffedde5a62c77d3e35e6bfa9494f51d330676e7ca0d7cad1c6979d58caf74e","originalByteLength":348474,"width":1600,"height":1292,"source":"publication-webp/protection-b7ea44483c762cfc4039af8fd0b000ef5749c23d06929a4fbbe18ef45fdc8c9d.webp","sha256":"b7ea44483c762cfc4039af8fd0b000ef5749c23d06929a4fbbe18ef45fdc8c9d","byteLength":191544,"rgbaSha256":"86c786f7016187f0dca727b6006f257bf0088f09930e83d8922886349aac241a"},{"panelId":"page-030-panel-01","sourcePageSha256":"88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc","mediaSha256":"17d69e7937d0d42befd985840759a79f7a33b815429a16b5322a6f08346aa5fe","originalSource":"publication/page-030-panel-01-e4fb3630bb7f.png","originalSha256":"e4fb3630bb7ff5b93e127b715afdb081e20f1d761fe3c5c47cc66ed87e5e3a3d","originalByteLength":209129,"width":1600,"height":2000,"source":"publication-webp/protection-c9c067341da917e63bdf384367930cb3fa9e69c0b363149345f7e8a2078d654d.webp","sha256":"c9c067341da917e63bdf384367930cb3fa9e69c0b363149345f7e8a2078d654d","byteLength":107652,"rgbaSha256":"8c0fc04c3d99ea48c3ace563f54091a86dfcb0b7d3dd0431a73311358c59d333"},{"panelId":"page-031-panel-01","sourcePageSha256":"72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b","mediaSha256":"8c9a7454fb65ae4756cc685c5703b843d49d96c8b4e0196637d9bc8717fffd3b","originalSource":"publication/page-031-panel-01-1f1adc307e98.png","originalSha256":"1f1adc307e983f33c3e0a41a35f6072505ed12673ea0591c5f5e05fbd0fccde6","originalByteLength":425529,"width":1600,"height":2000,"source":"publication-webp/protection-2b0dd2e4a565ba1969a912f128fa6b3c84adb9be7b27cd68043755a8735bd550.webp","sha256":"2b0dd2e4a565ba1969a912f128fa6b3c84adb9be7b27cd68043755a8735bd550","byteLength":284598,"rgbaSha256":"3e7d62ed841c1154940642cf1610fb44b9f68d1588f521b0f459ae3de6c4c198"},{"panelId":"page-032-panel-01","sourcePageSha256":"3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365","mediaSha256":"9d0f1f9b2952ed4173bc6e900f07220ca5a7ca7edc7dc4470c66f38277f5bd54","originalSource":"publication/page-032-panel-01-76b12f5dd9a4.png","originalSha256":"76b12f5dd9a49aec346c6741a42f810f38abcf4c5e012559ec87cffff69384a1","originalByteLength":165300,"width":1600,"height":2000,"source":"publication-webp/protection-4057b5570852f1ea9a13173b9671fa7c6650c3cd1a8f49a78bf1d7a9c2c4f2b9.webp","sha256":"4057b5570852f1ea9a13173b9671fa7c6650c3cd1a8f49a78bf1d7a9c2c4f2b9","byteLength":87832,"rgbaSha256":"5052e3fad4d07de99ffa415edb5af9dbf5859ed6e4ae2e544c82b149c100c434"},{"panelId":"page-033-panel-01","sourcePageSha256":"6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff","mediaSha256":"8524b48dca5dd28f1cef1152dc7290842df578bc918b45be53352ffc8d5c58ca","originalSource":"publication/page-033-panel-01-2394702cf1aa.png","originalSha256":"2394702cf1aa91315d020d9ba39e9f01211d4a2dbfad7a61cf9387c6833cf962","originalByteLength":482314,"width":1600,"height":2000,"source":"publication-webp/protection-2f42008203a23956f5c3fe241d3c4eb54a1b8cca7d51dd171a98b6621c325aeb.webp","sha256":"2f42008203a23956f5c3fe241d3c4eb54a1b8cca7d51dd171a98b6621c325aeb","byteLength":301324,"rgbaSha256":"1c2296896d5ab54773ad0bd134dc8fa44c9e17cab31e1c81e536fd94235979b8"},{"panelId":"page-034-panel-01","sourcePageSha256":"6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c","mediaSha256":"56da6f23983bf42ad594983ed58d53e44c0f6a635dc4d3070a0136cdaacb2094","originalSource":"publication/page-034-panel-01-03fdff8ae9cd.png","originalSha256":"03fdff8ae9cdb1f545338561805eb61ad9a15e0f4b67a94ac8d7841217df9f8a","originalByteLength":1946828,"width":1600,"height":2000,"source":"publication-webp/protection-11bf0edf92f2a7f848bfca672d6ac00a7d91ea403eb1d776a3f5c5c40a9e6486.webp","sha256":"11bf0edf92f2a7f848bfca672d6ac00a7d91ea403eb1d776a3f5c5c40a9e6486","byteLength":1253456,"rgbaSha256":"96a6505c400cb9b0277f967dd96eec2f0b15f7d328b5465a03d7da3f2414e55a"},{"panelId":"page-035-panel-01","sourcePageSha256":"d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5","mediaSha256":"42d6ed2ca479e20975d84f7c4ffdb6e9fff5add0f5cf4fca8c831830af52fb9b","originalSource":"publication/page-035-panel-01-33c88362ee6e.png","originalSha256":"33c88362ee6e4319b03587f895cfe7c09b310cf3db85847f7bd3e653f31ac303","originalByteLength":492875,"width":1600,"height":2000,"source":"publication-webp/protection-1aaebcc877e32ed71f1e1656b1a7a9623dedb25b816149900435a54ef08a2926.webp","sha256":"1aaebcc877e32ed71f1e1656b1a7a9623dedb25b816149900435a54ef08a2926","byteLength":330308,"rgbaSha256":"0f507c122ce93d7f878fc91778eb16d50a1df2af789c6249e0e4f57207849ec6"}]};
  data.entries.forEach(Object.freeze);
  Object.freeze(data.entries);
  window.COMIC_PROTECTION_RESOURCES = Object.freeze(data);
})();

;
/* panel-player.js */
(() => {
  'use strict';
  const SHA = /^[a-f0-9]{64}$/i;
  const passed = value => value && value.status === 'passed' && Array.isArray(value.evidence) && value.evidence.length > 0;
  const positive = value => Number.isFinite(value) && value > 0;
  const localPath = value => typeof value === 'string' && !/^(?:[a-z]+:|[\\/])|(?:^|[\\/])\.\.(?:[\\/]|$)/i.test(value) && value.length > 0;
  function rectValid(rect, width, height) {
    return rect && Number.isFinite(rect.x) && Number.isFinite(rect.y) && rect.x >= 0 && rect.y >= 0 && positive(rect.width) && positive(rect.height) && rect.x + rect.width <= width && rect.y + rect.height <= height;
  }
  function taskIdentified(panel, page, verification, media) {
    const task = panel.task;
    if (!task) return false;
    if (task.identityKind !== 'provider-output-asset') return !!task.id;
    const receipt = verification.taskOutput || {};
    // A real output asset identifies its provider media; it is not a fabricated job ID.
    // The reviewed media record binds that original file to the final five-second file.
    return task.id === null && Number.isSafeInteger(task.outputAssetId) && task.outputAssetId > 0
      && SHA.test(task.outputMediaSha256 || '') && passed(receipt)
      && receipt.outputAssetId === task.outputAssetId && receipt.outputMediaSha256 === task.outputMediaSha256
      && receipt.sourcePageSha256 === page.sha256
      && verification.media.sourceMediaSha256 === task.outputMediaSha256
      && verification.media.mediaSha256 === media.sha256;
  }
  function legacyEligible(panel, page) {
    if (!panel || panel.quality !== 'passed' || panel.method !== 'lora' || !localPath(panel.video)) return false;
    const v = panel.verification || {}, media = panel.actualMedia || {}, mapping = panel.contentMapping || {};
    if (![v.weightLoad, v.media, v.spatial, v.bounds, v.textProtection, mapping].every(passed)) return false;
    if (v.bounds.sourcePageSha256 !== page.sha256 || v.spatial.sourcePageSha256 !== page.sha256 || v.textProtection.sourcePageSha256 !== page.sha256) return false;
    if (!panel.weight || !SHA.test(panel.weight.sha256 || '') || !SHA.test(media.sha256 || '') || !taskIdentified(panel, page, v, media)) return false;
    if (!positive(media.width) || !positive(media.height) || !positive(media.frameCount) || !positive(media.fps) || !positive(media.duration)) return false;
    if (Math.abs(media.duration - 5) > .02 || !rectValid(panel.bounds, page.width, page.height) || !rectValid(mapping.videoRect, media.width, media.height)) return false;
    const b = panel.bounds, r = mapping.videoRect;
    if (Math.abs((b.width / b.height) / (r.width / r.height) - 1) > .003) return false;
    if (panel.mask && panel.protectionOverlay) return false;
    if (panel.protectionOverlay) {
      const overlay = panel.protectionOverlay;
      return localPath(overlay.source) && /\.png$/i.test(overlay.source) && !/%/.test(overlay.source) && overlay.coordinateSpace === 'source-panel'
        && Number.isInteger(overlay.width) && Number.isInteger(overlay.height) && overlay.width === b.width && overlay.height === b.height
        && SHA.test(overlay.sha256 || '') && overlay.sourcePageSha256 === page.sha256
        && passed(v.mask) && v.mask.sourcePageSha256 === page.sha256 && v.mask.maskSha256 === overlay.sha256;
    }
    if (panel.mask) return localPath(panel.mask) && passed(v.mask) && v.mask.sourcePageSha256 === page.sha256;
    return v.textProtection.originalTextOverlap === false && v.textProtection.originalFrameOverlap === false;
  }
  function sourceBound(panel, page) {
    if (!panel || !localPath(panel.video) || !rectValid(panel.bounds, page.width, page.height)) return false;
    const m = panel.actualMedia || {}, overlay = panel.protectionOverlay || {};
    const mapping = panel.contentMapping || {};
    if (mapping.artworkRect && (!rectValid(mapping.artworkRect, panel.bounds.width, panel.bounds.height)
      || mapping.sourcePageSha256 !== page.sha256 || !Array.isArray(mapping.backgroundColor)
      || mapping.backgroundColor.length !== 3 || !mapping.backgroundColor.every(x => Number.isInteger(x) && x >= 0 && x <= 255))) return false;
    return [m.width, m.height, m.frameCount, m.fps, m.duration].every(positive) && SHA.test(m.sha256 || '')
      && localPath(overlay.source) && overlay.coordinateSpace === 'source-panel'
      && overlay.width === panel.bounds.width && overlay.height === panel.bounds.height
      && overlay.sourcePageSha256 === page.sha256 && SHA.test(overlay.sha256 || '');
  }
  function eligible(panel, page) {
    if (legacyEligible(panel, page)) return true;
    if (!sourceBound(panel, page) || panel.quality !== 'passed') return false;
    const v = panel.verification || {};
    return [v.media, v.spatial, v.bounds, v.textProtection, v.runtime].every(passed)
      && [v.media, v.spatial, v.bounds, v.textProtection, v.runtime].every(x => x.sourcePageSha256 === page.sha256 && x.mediaSha256 === panel.actualMedia.sha256);
  }
  function displayable(panel, page) {
    if (eligible(panel, page)) return true;
    if (!sourceBound(panel, page)) return false;
    if (panel.quality === 'review-candidate') {
      const a = panel.candidateSourceAudit || {};
      return a.status === 'passed-source-pixels-only' && a.sourcePageSha256 === page.sha256 && a.overlaySha256 === panel.protectionOverlay.sha256;
    }
    if (panel.quality === 'reused-await-runtime') {
      const a = panel.retimingAudit || {};
      return a.status === 'passed-frame-identical-retiming' && a.mediaSha256 === panel.actualMedia.sha256 && a.sourcePageSha256 === page.sha256;
    }
    return false;
  }
  const regionTitles = Object.freeze({upper:'上方派送邀请', middle:'中间派送邀请', lower:'下方派送邀请', gasp:'两人惊讶的一幕', stomp:'Mandy跺脚，Bernie的反应', cry:'Mandy哭喊，Bernie的反应', 'bicycle-memory':'骑车回忆', 'cake-memory':'蛋糕回忆', 'rain-memory':'雨中帐篷回忆', 'thoughtful-mandy':'Mandy 想一想'});
  const externalLayoutPanelIds = new Set(['page-008-panel-01', 'page-020-panel-01']);
  const requiresInteractionLayout = panel => !!panel && externalLayoutPanelIds.has(panel.id);
  function externalInteractionLayout(panel, page) {
    const config = window.COMIC_INTERACTION_LAYOUTS;
    if (!config || config.schemaVersion !== 1 || config.coordinateSpace !== 'source-panel' || !Array.isArray(config.layouts)) return null;
    const matches = config.layouts.filter(item => item && item.panelId === panel.id);
    if (matches.length !== 1) return null;
    const entry = matches[0], v = entry.verification, overlay = panel.protectionOverlay;
    const evidenceBound = items => Array.isArray(items) && items.length > 0 && items.every(item => item && localPath(item.file) && SHA.test(item.sha256 || ''));
    if (entry.coordinateSpace !== 'source-panel' || entry.sourcePageSha256 !== page.sha256
      || entry.sourcePanelSha256 !== panel.sourceCropSha256 || entry.mediaSha256 !== panel.actualMedia.sha256
      || entry.videoSource !== panel.video || entry.overlaySha256 !== overlay.sha256
      || !entry.sourceBounds || !['x','y','width','height'].every(key => entry.sourceBounds[key] === panel.bounds[key])
      || !passed(v) || v.sourcePageSha256 !== page.sha256 || v.mediaSha256 !== panel.actualMedia.sha256
      || v.overlaySha256 !== overlay.sha256 || !evidenceBound(v.evidence) || !evidenceBound(entry.producerLayoutEvidence)
      || !entry.producerLayoutEvidence.every(item => panel.verification.bounds.evidence.includes(item.file))) return null;
    return entry;
  }
  function interactionRegions(panel, page) {
    const bounds = panel && panel.verification && panel.verification.bounds;
    const external = eligible(panel, page) && requiresInteractionLayout(panel);
    const layout = external ? externalInteractionLayout(panel, page) : bounds && bounds.layout;
    if (!eligible(panel, page) || !passed(bounds) || bounds.sourcePageSha256 !== page.sha256
      || bounds.mediaSha256 !== panel.actualMedia.sha256 || !layout || layout.sourcePageSha256 !== page.sha256
      || !Array.isArray(external ? layout.regions : layout.subsceneRectangles)) return [];
    const regions = external ? layout.regions : layout.subsceneRectangles;
    if (regions.length < 2 || regions.length > 12) return [];
    const ids = new Set();
    for (const region of regions) {
      if (!region || typeof region.id !== 'string' || !/^[a-z0-9][a-z0-9_-]{0,63}$/i.test(region.id)
        || ids.has(region.id) || !rectValid(region.artworkRect, panel.bounds.width, panel.bounds.height)
        || external && (typeof region.title !== 'string' || !region.title.trim() || region.title.length > 80)) return [];
      ids.add(region.id);
    }
    for (let i = 0; i < regions.length; i++) {
      const a = regions[i].artworkRect;
      for (let j = i + 1; j < regions.length; j++) {
        const b = regions[j].artworkRect;
        if (a.x < b.x + b.width && b.x < a.x + a.width && a.y < b.y + b.height && b.y < a.y + a.height) return [];
      }
    }
    return regions.map(region => Object.freeze({id:region.id, title:external ? region.title : regionTitles[region.id] || '独立小画面', artworkRect:Object.freeze({...region.artworkRect})}))
      .sort((a, b) => a.artworkRect.y - b.artworkRect.y || a.artworkRect.x - b.artworkRect.x);
  }
  function protectionSources(panel, page) {
    const spec = panel.protectionOverlay, assets = window.COMIC_PROTECTION_RESOURCES;
    if (!spec || !assets || assets.schemaVersion !== 1 || assets.encoding !== 'webp-lossless-exact' || !Array.isArray(assets.entries)) return spec ? [spec.source] : [];
    const matches = assets.entries.filter(entry => entry && entry.panelId === panel.id);
    if (matches.length !== 1) return [spec.source];
    const entry = matches[0];
    if (entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== panel.actualMedia.sha256 || entry.originalSource !== spec.source || entry.originalSha256 !== spec.sha256
      || entry.width !== spec.width || entry.height !== spec.height || !SHA.test(entry.sha256 || '') || !SHA.test(entry.rgbaSha256 || '')
      || typeof entry.source !== 'string' || !/^publication-webp\/[a-z\d][a-z\d._-]*\.webp$/i.test(entry.source)
      || !(entry.source.endsWith(`-${entry.sha256.slice(0, 12)}.webp`) || entry.source.endsWith(`-${entry.sha256}.webp`))) return [spec.source];
    return [`${entry.source}?sha256=${entry.sha256}`, spec.source];
  }
  function createFixedProtectionOverlay(panel, page, layer) {
    if (!sourceBound(panel, page)) return null;
    const spec = panel.protectionOverlay, b = panel.bounds;
    const image = document.createElement('img');
    image.className = 'panel-protection-overlay'; image.alt = ''; image.draggable = false; image.setAttribute('aria-hidden', 'true');
    image.dataset.fixedSourceProtection = panel.id; image.width = spec.width; image.height = spec.height;
    Object.assign(image.style, {inset:'auto', left:`${b.x / page.width * 100}%`, top:`${b.y / page.height * 100}%`, width:`${b.width / page.width * 100}%`, height:`${b.height / page.height * 100}%`, zIndex:'2', opacity:'0'});
    const sources = protectionSources(panel, page);
    let sourceIndex = 0, disposed = false;
    image.fetchPriority = 'high'; image.decoding = 'async';
    const unavailable = () => {
      if (disposed) return;
      if (++sourceIndex < sources.length) image.src = sources[sourceIndex];
      else image.remove();
    };
    image.onload = () => { if (disposed) return; if (image.naturalWidth === spec.width && image.naturalHeight === spec.height) image.style.opacity = '1'; else unavailable(); };
    image.onerror = unavailable; layer.append(image); image.src = sources[0];
    return {pause() {}, reset() {}, destroy() { disposed = true; image.onload = null; image.onerror = null; image.removeAttribute('src'); image.remove(); }};
  }
  function create(panel, page, layer, controlsContainer, options = {}) {
    const backgroundOnly = options.backgroundOnly === true;
    const region = options.region ? interactionRegions(panel, page).find(item => item.id === options.region.id) : null;
    if (options.region && !region) throw new Error('Interaction region is not bound to the accepted source layout');
    const title = region ? `${panel.title || '漫画片段'} · ${region.title}` : panel.title || '漫画片段';
    const host = document.createElement('div'); host.className = 'panel-host is-fallback'; host.tabIndex = 0;
    host.style.opacity = '0';
    host.dataset.sourcePanelId = panel.id;
    if (region) { host.dataset.interactionRegion = region.id; host.dataset.interactionRect = JSON.stringify(region.artworkRect); }
    host.setAttribute('role', backgroundOnly ? 'presentation' : 'group');
    if (backgroundOnly) { host.dataset.backgroundOnly = 'true'; host.tabIndex = -1; host.style.pointerEvents = 'none'; host.setAttribute('aria-hidden', 'true'); }
    else host.setAttribute('aria-label', `${title}，左右拖动只转动这个小画面，双击或按 Home 还原原画`);
    const b = panel.bounds, r = panel.contentMapping.videoRect, m = panel.actualMedia;
    Object.assign(host.style, {left:`${b.x / page.width * 100}%`, top:`${b.y / page.height * 100}%`, width:`${b.width / page.width * 100}%`, height:`${b.height / page.height * 100}%`});
    if (region) {
      const q = region.artworkRect;
      // Keep the accepted full-panel video geometry; only this source-bound window receives input and is visible.
      host.style.clipPath = `inset(${q.y / b.height * 100}% ${(b.width - q.x - q.width) / b.width * 100}% ${(b.height - q.y - q.height) / b.height * 100}% ${q.x / b.width * 100}%)`;
    }
    const video = document.createElement('video'); video.className = 'panel-video'; video.muted = true; video.defaultMuted = true; video.playsInline = true; video.preload = 'none';
    // A source-bound frame cache can serve dragging without downloading the MP4.
    video.setAttribute('aria-hidden', 'true');
    video.tabIndex = -1; video.controls = false; video.dataset.sourcePanelId = panel.id;
    if (region) video.dataset.interactionRegion = region.id;
    if (backgroundOnly) video.dataset.backgroundOnly = 'true';
    Object.assign(video.style, {width:'100%', height:'100%', left:'0', top:'0', objectFit:'contain'});
    const artworkRect = panel.contentMapping.artworkRect;
    if (artworkRect) {
      const matte = document.createElement('div'); matte.className = 'panel-video-matte'; matte.setAttribute('aria-hidden', 'true');
      matte.style.background = `rgb(${panel.contentMapping.backgroundColor.join(',')})`; host.append(matte);
      Object.assign(video.style, {left:`${artworkRect.x / b.width * 100}%`, top:`${artworkRect.y / b.height * 100}%`, width:`${artworkRect.width / b.width * 100}%`, height:`${artworkRect.height / b.height * 100}%`});
    }
    // The mask is expressed in video coordinates. Its transparent parts expose printed text in the unchanged original page below.
    if (panel.mask) { video.style.maskImage = `url("${panel.mask.replace(/"/g, '%22')}")`; video.style.webkitMaskImage = video.style.maskImage; video.style.maskSize = '100% 100%'; video.style.webkitMaskSize = '100% 100%'; video.style.maskMode = 'alpha'; video.style.maskRepeat = 'no-repeat'; video.style.webkitMaskRepeat = 'no-repeat'; }
    const overlaySpec = panel.protectionOverlay;
    let overlayImage = null;
    host.append(video);
    if (overlaySpec) {
      overlayImage = document.createElement('img'); overlayImage.className = 'panel-protection-overlay'; overlayImage.alt = ''; overlayImage.draggable = false; overlayImage.hidden = true;
      overlayImage.width = overlaySpec.width; overlayImage.height = overlaySpec.height; overlayImage.setAttribute('aria-hidden', 'true'); host.append(overlayImage);
    }
    layer.append(host);
    const row = document.createElement('div'); row.className = 'panel-controls';
    const label = document.createElement('strong'); label.textContent = `${title}${panel.quality === 'review-candidate' ? ' · 候选待验收' : panel.quality === 'reused-await-runtime' ? ' · 原验收媒体，四秒复核中' : ''}`; row.dataset.panelId = panel.id; row.dataset.sourcePanelId = panel.id; row.dataset.quality = panel.quality;
    if (region) row.dataset.interactionRegion = region.id;
    const play = document.createElement('button'); play.type = 'button'; play.textContent = '播放';
    const resetButton = document.createElement('button'); resetButton.type = 'button'; resetButton.textContent = '复位';
    const slider = document.createElement('input'); slider.type = 'range'; slider.min = '0'; slider.max = '100'; slider.step = '.1'; slider.value = '0'; slider.setAttribute('aria-label', `${title}视频进度`);
    const progress = document.createElement('output'); progress.textContent = '0%';
    const notice = document.createElement('span'); notice.className = 'panel-notice'; notice.textContent = '正在准备画面…';
    const retry = document.createElement('button'); retry.type = 'button'; retry.textContent = '重新打开'; retry.hidden = true;
    row.append(label, play, resetButton, slider, progress, retry, notice);
    if (!backgroundOnly) controlsContainer.append(row);
    let disposed = false, metadata = false, decoded = false, loadFailed = false, seekFailed = false;
    let videoStarted = false, videoFailed = false, pendingPlay = false, playTarget = 0, videoMessage = '';
    let loadedFrames = 0, previewLoaded = 0, previewTotal = 0, previewFailed = 0, previewReady = false, previewActive = false;
    let frameLoadFailed = false, lastStatus = '', updatingAvailability = false;
    let backdropVisible = false, reportedActivity = false;
    let desired = null, issued = null, inFlight = false, timer = null, loadTimer = null, dragging = null, motion = null;
    let frameRenderer = null, frameMode = false, frameFailed = false, frameTime = 0, frameTargetPercent = null, frameRequestedAt = 0;
    let framePlaybackBlocked = false;
    let frameDraws = 0, frameChanges = 0, lastFrameIndex = -1, frameLatencyTotal = 0, frameLatencySamples = 0;
    let seekIssuedAt = 0, seekLatencyTotal = 0, seekCompletions = 0;
    let maskReady = !panel.mask && !overlaySpec, protectionLoader = null, protectionAttempt = 0, protectionTimer = null;
    function displayTime() { const time = frameMode ? frameTime : video.currentTime; return Number.isFinite(time) ? time : 0; }
    function cacheReady() { return !!(frameRenderer && !frameFailed && frameRenderer.ready); }
    function videoReady() { return videoStarted && metadata && decoded && !videoFailed; }
    function displayDuration() { return frameMode || !videoReady() ? m.duration : video.duration; }
    function protectedReady() { return !disposed && maskReady && !loadFailed; }
    function usable() { return protectedReady() && (cacheReady() || videoReady()); }
    function ranges() { const result = []; try { for (let i = 0; i < video.seekable.length; i++) result.push([video.seekable.start(i), video.seekable.end(i)]); } catch (_) {} return result; }
    function videoSeekReady() { return protectedReady() && videoReady() && !seekFailed && window.OrbitSeek.hasFullSeekRange(ranges(), video.duration); }
    function seekReady() { return protectedReady() && (cacheReady() || videoSeekReady()); }
    function publishStatus() {
      const state = loadFailed || !cacheReady() && (videoFailed || seekFailed) ? 'error' : seekReady() ? 'ready' : 'loading';
      const targetIndex = frameTargetPercent === null ? null : Math.min(m.frameCount - 1, Math.max(0, Math.floor(frameTargetPercent / 100 * m.frameCount + 1e-9)));
      const anglePending = !!(inFlight || desired !== null || !framePlaybackBlocked && frameRenderer && !frameFailed && targetIndex !== null && targetIndex !== lastFrameIndex);
      const detail = {panelId:panel.id, regionId:region ? region.id : null, interactionState:state, loadedFrames, totalFrames:m.frameCount, loadingFailed:frameLoadFailed, previewLoaded, previewTotal, previewFailed, previewReady, previewActive, anglePending};
      Object.assign(host.dataset, {interactionState:state, loadedFrames:String(loadedFrames), totalFrames:String(m.frameCount), loadingFailed:String(frameLoadFailed), previewLoaded:String(previewLoaded), previewTotal:String(previewTotal), previewFailed:String(previewFailed), previewReady:String(previewReady), previewActive:String(previewActive), anglePending:String(anglePending)});
      const status = JSON.stringify(detail);
      if (status === lastStatus) return;
      lastStatus = status;
      if (typeof CustomEvent === 'function') host.dispatchEvent(new CustomEvent('comic-panel-status', {bubbles:true, detail}));
    }
    function updateActual() {
      // At rest, expose the byte-identical original page below; only the chosen moving view covers it.
      const ready = usable();
      const actualTime = displayTime();
      const active = !backgroundOnly && ready && (actualTime > .002 || !video.paused);
      host.style.opacity = ready && (backgroundOnly ? backdropVisible && video.paused && actualTime === 0 : active) ? '1' : '0';
      video.style.visibility = frameMode ? 'hidden' : '';
      if (frameRenderer) frameRenderer.canvas.hidden = !frameMode;
      host.dataset.renderMode = frameMode ? 'frames' : 'video';
      host.dataset.displayTime = String(actualTime);
      if (!backgroundOnly && active !== reportedActivity) {
        reportedActivity = active;
        if (typeof options.onActivity === 'function') options.onActivity(active);
      }
      const duration = displayDuration();
      const value = Math.max(0, Math.min(100, actualTime / duration * 100));
      slider.value = String(value); progress.textContent = `${value.toFixed(1)}%`;
      slider.setAttribute('aria-valuetext', `${actualTime.toFixed(2)} 秒，共 ${duration.toFixed(2)} 秒`);
      play.textContent = pendingPlay ? '准备播放…' : video.paused ? '播放' : '暂停';
    }
    function updateAvailability() {
      if (disposed || updatingAvailability) return;
      updatingAvailability = true;
      try {
        const ready = usable();
        host.classList.toggle('is-fallback', !ready);
        play.disabled = !ready; resetButton.disabled = !ready; slider.disabled = !seekReady();
        host.tabIndex = !backgroundOnly && seekReady() ? 0 : -1;
        updateActual();
        if (ready) {
          notice.textContent = frameLoadFailed ? '部分环绕角度加载中断，已打开的画面仍可查看。请重新准备。' : videoMessage || (!seekReady() ? '当前浏览器尚不能拖动这段视频。可播放，或用本地预览入口重新打开。' : '');
          retry.hidden = !videoMessage && !frameLoadFailed;
        }
        if (videoSeekReady() && desired !== null && !inFlight) issueSeek();
        tryStartPlayback();
        publishStatus();
      } finally { updatingAvailability = false; }
    }
    function mediaPause() { video.pause(); updateActual(); }
    function cancelMotion() {
      if (motion) motion.cancel(); dragging = null;
      if (!frameFailed && frameRenderer) {
        frameTargetPercent = Math.max(0, Math.min(100, displayTime() / displayDuration() * 100));
        frameRequestedAt = 0;
        frameRenderer.setPercent(frameTargetPercent);
      }
    }
    function pause(clearQueued = true) { pendingPlay = false; framePlaybackBlocked = false; video.pause(); cancelMotion(); if (clearQueued) desired = null; updateAvailability(); }
    function failProtection(message) {
      loadFailed = true; maskReady = false; pause(false);
      clearTimeout(protectionTimer); notice.textContent = message; retry.hidden = false; updateAvailability();
    }
    function failVideo(message, seeking = false) {
      if (seeking) seekFailed = true; else videoFailed = true;
      pendingPlay = false; framePlaybackBlocked = false; inFlight = false; desired = null; issued = null;
      video.pause(); clearTimeout(timer); clearTimeout(loadTimer);
      videoMessage = cacheReady() ? '视频暂时无法播放，仍可拖动画面。可重新打开后再播放。' : message;
      if (cacheReady()) { frameMode = true; frameTime = frameRenderer.currentTime; }
      notice.textContent = videoMessage; retry.hidden = false; updateAvailability();
    }
    function loadingSlow(message) {
      // A slow network is not a failed asset. Keep the original visible until
      // the existing decode and protection checks actually finish.
      if (disposed || loadFailed || usable()) return;
      notice.textContent = message; retry.hidden = false; updateAvailability();
    }
    function issueSeek() {
      if (disposed || inFlight || desired === null || !videoSeekReady()) return;
      const target = desired;
      if (!window.OrbitSeek.canSeekTo(ranges(), video.duration, target)) return;
      desired = null; issued = target;
      if (Math.abs(video.currentTime - target) < .002 && !video.seeking) { issued = null; if (frameFailed) frameMode = false; updateActual(); tryStartPlayback(); return; }
      inFlight = true;
      timer = setTimeout(() => {
        if (disposed || !inFlight) return;
        if (desired === null) desired = issued;
        failVideo('这次定位尚未完成，进度显示的是实际位置。可重新打开后继续。', true);
      }, 3000);
      try { seekIssuedAt = performance.now(); video.currentTime = target; }
      catch (_) { if (desired === null) desired = issued; failVideo('暂时无法定位，已保留最后选择的进度。请重新打开。', true); }
    }
    function requestPercent(percent) {
      if (disposed || backgroundOnly || !protectedReady()) return;
      pendingPlay = false;
      mediaPause();
      frameTargetPercent = Math.max(0, Math.min(100, Number(percent)));
      framePlaybackBlocked = false;
      if (cacheReady()) {
        desired = null; issued = null; inFlight = false; clearTimeout(timer);
        frameRequestedAt = performance.now(); frameRenderer.setPercent(frameTargetPercent);
        updateAvailability(); return;
      }
      if (!videoReady()) { updateAvailability(); return; }
      const end = Math.max(0, video.duration - .001);
      desired = Math.max(0, Math.min(end, Number(percent) / 100 * video.duration));
      updateAvailability();
    }
    function reset() { cancelMotion(); requestPercent(0); }
    function setBackdropVisible(visible) {
      if (!backgroundOnly || disposed) return;
      backdropVisible = visible === true;
      video.pause();
      // This is an accepted front-layout backdrop, never a second linked orbit.
      if (videoReady() && video.currentTime !== 0) video.currentTime = 0;
      if (frameRenderer && !frameFailed) frameRenderer.reset();
      updateAvailability();
    }
    function loadProtection() {
      clearTimeout(protectionTimer);
      const attempt = ++protectionAttempt;
      maskReady = !panel.mask && !overlaySpec;
      if (overlayImage) overlayImage.hidden = true;
      if (maskReady) return;
      if (panel.mask && (!window.CSS || !(window.CSS.supports('mask-image', 'url("mask.png")') || window.CSS.supports('-webkit-mask-image', 'url("mask.png")')))) {
        failProtection('当前浏览器无法显示文字保护层，已保留原画。'); return;
      }
      const sources = overlaySpec ? protectionSources(panel, page) : [panel.mask];
      let sourceIndex = 0;
      const expectedWidth = overlaySpec ? overlaySpec.width : m.width;
      const expectedHeight = overlaySpec ? overlaySpec.height : m.height;
      const protection = overlayImage || new Image(); protectionLoader = protection;
      protection.fetchPriority = 'high'; protection.decoding = 'async';
      const unavailable = message => {
        if (disposed || attempt !== protectionAttempt) return;
        if (++sourceIndex < sources.length) protection.src = sources[sourceIndex];
        else failProtection(message);
      };
      protection.onload = () => {
        if (disposed || attempt !== protectionAttempt) return;
        clearTimeout(protectionTimer);
        if (protection.naturalWidth !== expectedWidth || protection.naturalHeight !== expectedHeight) { unavailable('保护层与原画不一致，已保留原画。'); return; }
        if (overlayImage) overlayImage.hidden = false;
        maskReady = true; updateAvailability();
      };
      protection.onerror = () => unavailable('文字与格框保护层未打开，已保留原画。请重新打开。');
      protectionTimer = setTimeout(() => { if (!disposed && attempt === protectionAttempt) loadingSlow('文字与格框保护层仍在加载，原画可继续阅读。'); }, 15000);
      protection.src = sources[0];
    }
    function startVideoLoad(force = false) {
      if (disposed || loadFailed || videoStarted && !force) return;
      clearTimeout(loadTimer); clearTimeout(timer);
      videoStarted = true; metadata = false; decoded = false; videoFailed = false; seekFailed = false; inFlight = false; issued = null; videoMessage = '';
      video.preload = 'auto'; video.src = panel.video;
      loadTimer = setTimeout(() => loadingSlow('视频仍在加载，原画可继续阅读。'), 15000);
      video.load();
    }
    function startLoad() {
      if (disposed) return;
      const retryVideo = videoFailed || seekFailed || frameLoadFailed;
      loadFailed = false; frameLoadFailed = false; pause();
      notice.textContent = '正在准备画面…'; retry.hidden = true; videoMessage = '';
      loadProtection();
      if (!frameRenderer || frameFailed || retryVideo) startVideoLoad(retryVideo);
      updateAvailability();
    }
    function tryStartPlayback() {
      if (!pendingPlay || !protectedReady() || !videoReady() || seekFailed || inFlight) return;
      if (Math.abs(video.currentTime - playTarget) >= .002 || video.seeking) {
        if (desired === null) desired = playTarget;
        if (videoSeekReady()) issueSeek();
        return;
      }
      pendingPlay = false; desired = null; framePlaybackBlocked = true; frameMode = false;
      video.play().catch(() => { if (!disposed) failVideo('暂时无法播放，请重新打开。'); });
      updateActual();
    }
    video.addEventListener('loadedmetadata', () => {
      if (disposed || !videoStarted || videoFailed) return;
      if (!Number.isFinite(video.duration) || Math.abs(video.duration - m.duration) > .04 || video.videoWidth !== m.width || video.videoHeight !== m.height) {
        failVideo('这段文件与验收记录不一致，已保留原画。'); return;
      }
      metadata = true; updateAvailability();
    });
    video.addEventListener('loadeddata', () => { if (!disposed && videoStarted && !videoFailed) { decoded = true; clearTimeout(loadTimer); updateAvailability(); } });
    for (const event of ['progress', 'canplay', 'durationchange']) video.addEventListener(event, updateAvailability);
    video.addEventListener('seeked', () => {
      if (disposed || !videoStarted || videoFailed) return;
      const expected = issued;
      clearTimeout(timer); inFlight = false; issued = null;
      if (expected !== null) {
        seekCompletions++; seekLatencyTotal += Math.max(0, performance.now() - seekIssuedAt);
        host.dataset.seekCompletions = String(seekCompletions);
        host.dataset.seekLatencyMean = String(seekLatencyTotal / seekCompletions);
      }
      if (frameFailed) frameMode = false;
      updateActual();
      if (expected !== null && Math.abs(video.currentTime - expected) > .08) {
        if (desired === null) desired = expected;
        failVideo('视频没有到达所选位置，进度显示的是实际位置。请重新打开。', true); return;
      }
      updateAvailability();
    });
    if (window.OrbitFrameCache && new URLSearchParams(location.search).get('frames') !== 'off') {
      frameRenderer = window.OrbitFrameCache.create(panel, page, {
        onReady(actual) {
          if (disposed || frameFailed || !frameRenderer) return;
          host.dataset.frameReady = 'true';
          if (actual && actual.preview) previewReady = true;
          else loadedFrames = Math.max(loadedFrames, 1);
          updateAvailability();
        },
        onProgress(actual) {
          if (disposed || frameFailed || !actual || actual.total !== m.frameCount || !Number.isInteger(actual.loaded) || actual.loaded < 0 || actual.loaded > actual.total) return;
          const failed = actual.failed === undefined ? 0 : actual.failed;
          if (!Number.isInteger(failed) || failed < 0 || failed > actual.total) return;
          loadedFrames = Math.max(loadedFrames, actual.loaded);
          if (Number.isInteger(actual.previewLoaded) && Number.isInteger(actual.previewTotal) && actual.previewLoaded >= 0 && actual.previewTotal >= actual.previewLoaded) {
            previewLoaded = actual.previewLoaded; previewTotal = actual.previewTotal;
            previewFailed = Number.isInteger(actual.previewFailed) && actual.previewFailed >= 0 ? actual.previewFailed : 0;
          }
          frameLoadFailed = loadedFrames < m.frameCount && failed > 0;
          updateAvailability();
        },
        onFrame(actual) {
          if (disposed || frameFailed || framePlaybackBlocked || !video.paused) return;
          if (!frameMode) { desired = null; issued = null; inFlight = false; clearTimeout(timer); }
          frameMode = true; frameTime = actual.currentTime;
          previewActive = actual.preview === true;
          if (previewActive) previewReady = true;
          frameDraws++; if (actual.index !== lastFrameIndex) frameChanges++;
          lastFrameIndex = actual.index;
          host.dataset.frameIndex = String(actual.index); host.dataset.frameDraws = String(frameDraws); host.dataset.frameChanges = String(frameChanges);
          if (frameRequestedAt) {
            const latency = Math.max(0, performance.now() - frameRequestedAt);
            frameLatencyTotal += latency; frameLatencySamples++;
            host.dataset.frameLatencyLast = String(latency); host.dataset.frameLatencyMean = String(frameLatencyTotal / frameLatencySamples);
            frameRequestedAt = 0;
          }
          updateAvailability();
        },
        onError() {
          if (disposed) return;
          frameFailed = true; frameLoadFailed = false; previewActive = false; previewReady = false; host.dataset.frameReady = 'fallback';
          // A late cache callback must not rewind an already playing MP4.
          if (!framePlaybackBlocked) desired = backgroundOnly ? 0 : Math.min(m.duration - .001, frameTargetPercent !== null ? frameTargetPercent / 100 * m.duration : displayTime());
          frameMode = false;
          startVideoLoad(); updateAvailability();
        }
      });
      if (frameRenderer) {
        const canvas = frameRenderer.canvas;
        canvas.className = 'panel-video panel-frame-canvas'; canvas.style.cssText = video.style.cssText; canvas.hidden = true;
        host.insertBefore(canvas, video);
      }
    }
    video.addEventListener('timeupdate', updateActual);
    for (const event of ['play', 'pause', 'ended']) video.addEventListener(event, updateActual);
    video.addEventListener('error', () => { if (!disposed && videoStarted) failVideo('这段视频暂时无法读取，已保留原画。请检查文件后重新打开。'); });
    if (!backgroundOnly) {
    host.dataset.motionState = 'idle';
    if (window.OrbitInertia && typeof window.OrbitInertia.create === 'function') {
      motion = window.OrbitInertia.create({onChange:requestPercent, onState:state => { host.dataset.motionState = state; }});
    }
    play.addEventListener('click', () => {
      if (!usable()) return;
      if (!video.paused || pendingPlay) pause();
      else {
        const at = displayTime(); cancelMotion(); desired = null; clearTimeout(timer); inFlight = false; issued = null;
        playTarget = Math.min(m.duration - .001, at); pendingPlay = true; framePlaybackBlocked = true;
        startVideoLoad(videoFailed || seekFailed); updateAvailability();
      }
    });
    resetButton.addEventListener('click', reset);
    host.addEventListener('dblclick', event => { event.preventDefault(); reset(); });
    slider.addEventListener('input', () => { const percent = slider.value; cancelMotion(); requestPercent(percent); });
    retry.addEventListener('click', startLoad);
    host.addEventListener('pointerdown', event => {
      if (!seekReady() || (event.pointerType === 'mouse' && event.button !== 0)) return;
      const width = host.getBoundingClientRect().width * (region ? region.artworkRect.width / b.width : 1);
      pause(); dragging = {id:event.pointerId, x:event.clientX, width, percent:displayTime() / displayDuration() * 100}; host.setPointerCapture(event.pointerId);
      if (motion) motion.begin(dragging.percent, event.clientX, performance.now());
    });
    host.addEventListener('pointermove', event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      if (motion) motion.move(event.clientX, dragging.width, performance.now());
      else requestPercent(dragging.percent + (event.clientX - dragging.x) / Math.max(1, dragging.width) * 100);
    });
    host.addEventListener('pointerup', event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      dragging = null;
      if (motion) motion.end(performance.now());
    });
    for (const event of ['pointercancel', 'lostpointercapture']) host.addEventListener(event, event => {
      if (!dragging || event.pointerId !== dragging.id) return;
      cancelMotion();
    });
    host.addEventListener('keydown', event => {
      if (!seekReady()) return;
      const actual = displayTime() / displayDuration() * 100;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); cancelMotion(); requestPercent(actual + (event.key === 'ArrowLeft' ? -2 : 2)); }
      else if (event.key === 'Home') { event.preventDefault(); reset(); }
    });
    }
    let observer = null;
    if ('IntersectionObserver' in window) { observer = new IntersectionObserver(entries => { if (!entries[0].isIntersecting) pause(); }); observer.observe(host); }
    startLoad();
    return {pause, reset, setBackdropVisible, destroy() { disposed = true; pendingPlay = false; protectionAttempt++; if (motion) motion.destroy(); if (frameRenderer) frameRenderer.destroy(); dragging = null; video.pause(); updateActual(); clearTimeout(timer); clearTimeout(loadTimer); clearTimeout(protectionTimer); if (protectionLoader) { protectionLoader.onload = null; protectionLoader.onerror = null; protectionLoader.removeAttribute('src'); } if (observer) observer.disconnect(); if (videoStarted) { video.removeAttribute('src'); video.load(); } host.remove(); row.remove(); }};
  }
  window.ComicPanelPlayer = Object.freeze({eligible, displayable, requiresInteractionLayout, interactionRegions, createFixedProtectionOverlay, create});
})();

;
/* page-frame-loader.js */
(() => {
  'use strict';
  const sha = value => typeof value === 'string' && /^[a-f0-9]{64}$/i.test(value);
  const relative = value => typeof value === 'string' && value.length > 0
    && !/^(?:[a-z]+:|[\/])|[:?#%\\\u0000-\u0020\u007f]/i.test(value)
    && value.split('/').every(part => part && part !== '.' && part !== '..');
  const positive = value => Number.isFinite(value) && value > 0;
  // The canonical local reader still ships its reviewed JPEG config as a
  // classic script. Keep that local config for page projections, not fetching.
  const legacy = !window.COMIC_FRAME_INDEX && window.COMIC_FRAME_SEQUENCES;
  const cache = new Map();
  let generation = 0, active = null;
  function cancelled() { const error = new Error('Page changed'); error.name = 'AbortError'; return error; }
  function indexEntry(page) {
    const index = window.COMIC_FRAME_INDEX;
    if (!page || !/^page-\d{3,}$/.test(page.id || '') || !sha(page.sha256) || !index || index.schemaVersion !== 1 || !Array.isArray(index.pages)) throw new Error('Page frame index unavailable');
    const sources = new Set();
    for (const entry of index.pages) {
      if (!entry || !sha(entry.sourcePageSha256) || !sha(entry.sha256) || !relative(entry.source)
        || !/^frame-config\/[^/]+\.json$/i.test(entry.source) || sources.has(entry.source)) throw new Error('Invalid page frame index');
      sources.add(entry.source);
    }
    // Two authored pages can repeat identical source pixels yet bind different
    // panels/media. The stable page ID and source SHA must both match.
    const entry = index.pages.find(item => item.source === `frame-config/${page.id}.json` && item.sourcePageSha256 === page.sha256);
    if (!entry) throw new Error('Current page frame index missing');
    return entry;
  }
  function validPacks(entry) {
    if (entry.packs === undefined) return true;
    if (!Array.isArray(entry.packs) || !entry.packs.length) return false;
    const covered = new Set(), sources = new Set();
    for (const pack of entry.packs) {
      if (!pack || !relative(pack.source) || !/\.orbf$/i.test(pack.source) || !sha(pack.sha256)
        || !Number.isSafeInteger(pack.byteLength) || !Array.isArray(pack.indices) || !pack.indices.length
        || pack.byteLength < 12 + pack.indices.length * 8 || sources.has(pack.source)) return false;
      sources.add(pack.source);
      for (const i of pack.indices) { if (!Number.isSafeInteger(i) || i < 0 || i >= entry.frameCount || covered.has(i)) return false; covered.add(i); }
      if (pack.frameBytes !== undefined || pack.frameSha256 !== undefined) {
        if (!Array.isArray(pack.frameBytes) || !Array.isArray(pack.frameSha256)
          || pack.frameBytes.length !== pack.indices.length || pack.frameSha256.length !== pack.indices.length
          || !pack.frameBytes.every(n => Number.isSafeInteger(n) && n >= 12 && n <= 0xffffffff) || !pack.frameSha256.every(sha)
          || pack.frameBytes.reduce((n, length) => n + length, 12 + pack.indices.length * 8) !== pack.byteLength) return false;
      }
    }
    return covered.size === entry.frameCount;
  }
  function validate(config, page) {
    const expected = (page.panels || []).filter(panel => panel.actualMedia && typeof panel.video === 'string');
    if (!config || config.schemaVersion !== 1 || !Array.isArray(config.entries) || config.entries.length !== expected.length) throw new Error('Invalid current page frame config');
    const seen = new Set();
    for (const entry of config.entries) {
      const panel = entry && expected.find(panel => panel.id === entry.panelId), media = panel && panel.actualMedia;
      if (!media || seen.has(entry.panelId) || entry.sourcePageSha256 !== page.sha256 || entry.mediaSha256 !== media.sha256
        || !sha(entry.mediaSha256) || entry.videoSource !== panel.video || !relative(entry.videoSource)
        || entry.sourceWidth !== media.width || entry.sourceHeight !== media.height || entry.duration !== media.duration
        || entry.frameCount !== media.frameCount || !Number.isSafeInteger(entry.frameCount) || entry.frameCount < 1
        || !Number.isSafeInteger(entry.width) || entry.width < 1 || !Number.isSafeInteger(entry.height) || entry.height < 1
        || !positive(media.width) || !positive(media.height) || !positive(media.duration)
        || entry.width > media.width || entry.height > media.height || Math.abs((entry.width / entry.height) / (media.width / media.height) - 1) > .003
        || !Array.isArray(entry.frames) || entry.frames.length !== entry.frameCount || !entry.frames.every(source => relative(source) && /\.(?:jpe?g|webp)$/i.test(source))
        || !validPacks(entry)) throw new Error('Current page frames do not match accepted media');
      seen.add(entry.panelId);
    }
    return config;
  }
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) { Object.values(value).forEach(freeze); Object.freeze(value); }
    return value;
  }
  async function ensure(page, signal) {
    const attempt = ++generation;
    if (active) active.abort();
    window.COMIC_FRAME_SEQUENCES = null;
    const controller = new AbortController(); active = controller;
    const abort = () => controller.abort();
    if (signal) { if (signal.aborted) abort(); else signal.addEventListener('abort', abort, {once:true}); }
    const assertCurrent = () => { if (attempt !== generation || controller.signal.aborted) throw cancelled(); };
    try {
      assertCurrent();
      if (!window.COMIC_FRAME_INDEX && legacy && legacy.schemaVersion === 1 && Array.isArray(legacy.entries)) {
        const ids = new Set((page.panels || []).map(panel => panel.id));
        const config = freeze(validate({schemaVersion:1, entries:legacy.entries.filter(entry => ids.has(entry.panelId) && entry.sourcePageSha256 === page.sha256)}, page));
        assertCurrent(); window.COMIC_FRAME_SEQUENCES = config;
        return config;
      }
      const entry = indexEntry(page), key = page.id + ':' + entry.source + ':' + page.sha256 + ':' + entry.sha256;
      let config = cache.get(key);
      if (config) { cache.delete(key); cache.set(key, config); validate(config, page); }
      else {
        if (!window.crypto || !window.crypto.subtle || typeof window.crypto.subtle.digest !== 'function') throw new Error('Verified frame loading unavailable');
        const response = await fetch(`${entry.source}?sha256=${entry.sha256.toLowerCase()}`, {signal:controller.signal, cache:'force-cache'});
        assertCurrent();
        if (!response.ok) throw new Error('Page frame config HTTP error');
        const bytes = await response.arrayBuffer(); assertCurrent();
        if (!bytes.byteLength || bytes.byteLength > 1024 * 1024) throw new Error('Invalid page frame config size');
        const digest = await window.crypto.subtle.digest('SHA-256', bytes); assertCurrent();
        const actualSHA = Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('');
        if (actualSHA !== entry.sha256.toLowerCase()) throw new Error('Page frame config SHA-256 mismatch');
        config = freeze(validate(JSON.parse(new TextDecoder('utf-8', {fatal:true}).decode(bytes)), page));
        assertCurrent(); cache.set(key, config);
        while (cache.size > 2) cache.delete(cache.keys().next().value);
      }
      assertCurrent(); window.COMIC_FRAME_SEQUENCES = config;
      return config;
    } finally {
      if (signal) signal.removeEventListener('abort', abort);
      if (active === controller) active = null;
    }
  }
  window.ComicPageFrames = Object.freeze({ensure});
})();

;
/* app.js */
(() => {
  'use strict';
  const book = window.COMIC_BOOK;
  if (!book || !Array.isArray(book.pages) || !book.pages.length) return;
  const $ = id => document.getElementById(id);
  const image = $('page-image');
  const stage = $('page-stage');
  const viewport = $('page-viewport');
  const inner = $('viewport-inner');
  const panelLayer = $('panel-layer');
  const panelControls = $('panel-control-list');
  const pages = book.pages;
  const readingPositionKey = 'just-cuz-birthday-episode-content-v2-page';
  $('page-number').max = String(pages.length);
  let current = 1, loaded = false, loadToken = 0, imageLoader = null;
  let frameConfigController = null;
  let zoom = 1, fitting = true, fitScale = 1, players = [];
  const dialogs = new Map();
  const chapterOf = page => book.chapters.find(ch => page >= ch.start && page <= ch.end);

  book.chapters.forEach(ch => {
    const option = document.createElement('option');
    option.value = ch.start;
    option.textContent = `${ch.title} · ${ch.start}–${ch.end} 页`;
    $('chapter-select').append(option);
    const section = document.createElement('section');
    const grid = document.createElement('div'); grid.className = 'page-grid';
    for (let number = ch.start; number <= ch.end; number++) {
      const page = pages[number - 1];
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'page-thumb'; button.dataset.page = number;
      button.setAttribute('aria-label', `打开第 ${number} 页`);
      button.textContent = String(number);
      button.addEventListener('click', () => { $('directory-dialog').close(); showPage(number); });
      grid.append(button);
    }
    section.append(grid); $('directory-content').append(section);
  });

  function dialogOpen(dialog, opener) {
    dialogs.set(dialog, opener || document.activeElement);
    if (!dialog.open) dialog.showModal();
  }
  for (const id of ['directory-dialog', 'original-dialog', 'panel-sources-dialog']) {
    const dialog = $(id);
    dialog.addEventListener('close', () => {
      const opener = dialogs.get(dialog);
      if (opener && opener.isConnected) opener.focus();
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  }
  $('open-directory').addEventListener('click', () => {
    document.querySelectorAll('.page-thumb').forEach(button => {
      if (Number(button.dataset.page) === current) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    dialogOpen($('directory-dialog'), $('open-directory'));
    const selected = document.querySelector(`.page-thumb[data-page="${current}"]`);
    if (selected) { selected.scrollIntoView({block:'nearest'}); selected.focus({preventScroll:true}); }
  });
  $('close-directory').addEventListener('click', () => $('directory-dialog').close());
  $('close-original').addEventListener('click', () => $('original-dialog').close());
  $('close-panel-sources').addEventListener('click', () => $('panel-sources-dialog').close());
  $('original-button').addEventListener('click', () => {
    players.forEach(player => player.pause());
    const page = pages[current - 1];
    $('original-title').textContent = `第 ${current} 页完整原画`;
    $('original-image').src = page.source;
    $('original-image').alt = `Just Cuz 第 ${current} 页完整原画，无视频覆盖`;
    $('original-size').textContent = `${page.width} × ${page.height} · 完整原页`;
    $('original-download').href = page.source;
    $('original-download').download = `Just-Cuz-第${current}页.jpg`;
    dialogOpen($('original-dialog'), $('original-button'));
  });

  function verifiedPanelSources(page) {
    const sources = Array.isArray(page.panelSources) ? page.panelSources : [];
    const seen = new Set();
    return sources.filter(source => {
      if (!source || source.quality !== 'source-verified' || typeof source.id !== 'string' || !source.id.trim() || typeof source.title !== 'string' || !source.title.trim()) return false;
      if (!/^[a-f\d]{64}$/i.test(page.sha256 || '') || source.sourcePageSha256 !== page.sha256) return false;
      if (typeof source.source !== 'string' || !/^(?:[^:/?#\\%]+\/)*[^:/?#\\%]+\.(?:png|jpe?g|webp)$/i.test(source.source) || source.source.split('/').some(part => part === '.' || part === '..')) return false;
      const bounds = source.bounds;
      if (!bounds || ![bounds.x, bounds.y, bounds.width, bounds.height, source.width, source.height].every(Number.isInteger)) return false;
      if (bounds.x < 0 || bounds.y < 0 || bounds.width <= 0 || bounds.height <= 0 || bounds.x + bounds.width > page.width || bounds.y + bounds.height > page.height) return false;
      if (source.width !== bounds.width || source.height !== bounds.height || seen.has(source.id)) return false;
      seen.add(source.id);
      return true;
    });
  }
  function updatePanelSourcesButton(page) {
    const count = verifiedPanelSources(page).length;
    $('panel-sources-button').hidden = !loaded || !count;
    $('panel-sources-button').textContent = count ? `分格原画（${count}）` : '分格原画';
  }
  $('panel-sources-button').addEventListener('click', () => {
    const page = pages[current - 1];
    const sources = verifiedPanelSources(page);
    if (!loaded || !sources.length) return;
    players.forEach(player => player.pause());
    $('panel-sources-page').textContent = `第 ${current} 页 · ${sources.length} 格原画`;
    const gallery = $('panel-sources-gallery');
    gallery.replaceChildren();
    sources.forEach((source, index) => {
      const card = document.createElement('figure'); card.className = 'panel-source-card';
      const caption = document.createElement('figcaption'); caption.className = 'panel-source-caption';
      const title = document.createElement('strong'); title.textContent = source.title;
      const state = document.createElement('span'); state.textContent = '原画裁切';
      caption.append(title, state);
      const wrap = document.createElement('div'); wrap.className = 'panel-source-image-wrap';
      const crop = document.createElement('img');
      crop.width = source.width; crop.height = source.height; crop.decoding = 'async'; crop.draggable = false; crop.hidden = true;
      crop.alt = `Just Cuz · ${source.title} · 原图裁切`;
      const notice = document.createElement('p'); notice.className = 'panel-source-loading'; notice.setAttribute('role', 'status');
      const retry = document.createElement('button'); retry.type = 'button'; retry.textContent = '重新打开'; retry.hidden = true;
      const footer = document.createElement('div'); footer.className = 'panel-source-footer';
      const pending = document.createElement('span'); const status = (page.panels || []).find(p => p.id === source.id); pending.textContent = status && status.quality === 'passed' ? '可以互动' : '保留完整原画';
      const save = document.createElement('a'); save.href = source.source; save.download = `Just-Cuz-第${current}页-第${index + 1}格.${source.source.split('.').pop().toLowerCase()}`; save.textContent = '保存分格原画'; save.hidden = true;
      footer.append(pending, save);
      function unavailable() {
        crop.hidden = true; save.hidden = true; notice.hidden = false; retry.hidden = false;
        notice.textContent = '这一格暂时没有打开，请重新尝试。';
      }
      function openCrop() {
        crop.hidden = true; save.hidden = true; retry.hidden = true; notice.hidden = false;
        notice.textContent = '正在打开原图裁切…';
        crop.src = source.source;
      }
      crop.onload = () => {
        if (crop.naturalWidth !== source.width || crop.naturalHeight !== source.height) { unavailable(); return; }
        crop.hidden = false; save.hidden = false; notice.hidden = true; retry.hidden = true;
      };
      crop.onerror = unavailable;
      retry.addEventListener('click', openCrop);
      wrap.append(crop, notice, retry); card.append(caption, wrap, footer); gallery.append(card);
      openCrop();
    });
    dialogOpen($('panel-sources-dialog'), $('panel-sources-button'));
  });

  function sizeStage() {
    const page = pages[current - 1];
    const availableW = Math.max(1, viewport.clientWidth - 28);
    const availableH = Math.max(1, viewport.clientHeight - 28);
    fitScale = Math.min(availableW / page.width, availableH / page.height);
    const scale = fitScale * zoom;
    const width = Math.max(1, Math.round(page.width * scale));
    const height = Math.max(1, Math.round(page.height * scale));
    stage.style.width = `${width}px`; stage.style.height = `${height}px`;
    inner.style.width = `${Math.max(viewport.clientWidth, width + 28)}px`;
    inner.style.height = `${Math.max(viewport.clientHeight, height + 28)}px`;
    $('zoom-level').textContent = fitting ? '适合整页' : `${Math.round(zoom * 100)}%`;
    $('zoom-out').disabled = zoom <= 1;
    $('zoom-in').disabled = zoom >= 5;
  }
  function setZoom(value, fit = false) {
    const oldX = (viewport.scrollLeft + viewport.clientWidth / 2) / Math.max(1, inner.offsetWidth);
    const oldY = (viewport.scrollTop + viewport.clientHeight / 2) / Math.max(1, inner.offsetHeight);
    zoom = Math.min(5, Math.max(1, value)); fitting = fit;
    sizeStage();
    if (fit) { viewport.scrollLeft = 0; viewport.scrollTop = 0; }
    else { viewport.scrollLeft = oldX * inner.offsetWidth - viewport.clientWidth / 2; viewport.scrollTop = oldY * inner.offsetHeight - viewport.clientHeight / 2; }
  }
  $('zoom-in').addEventListener('click', () => setZoom(zoom * 1.4));
  $('zoom-out').addEventListener('click', () => setZoom(zoom / 1.4, zoom / 1.4 <= 1));
  $('fit-page').addEventListener('click', () => setZoom(1, true));
  new ResizeObserver(() => sizeStage()).observe(viewport);

  let panelStatusQueued = false;
  function updatePanelStatus() {
    const hosts = Array.from(panelLayer.querySelectorAll('.panel-host')).filter(host => host.dataset.backgroundOnly !== 'true');
    const caption = $('page-caption'), retry = $('retry-interaction');
    if (!loaded || !hosts.length) return;
    if (retry) retry.hidden = true;
    const ready = hosts.filter(host => host.dataset.interactionState === 'ready').length;
    const failed = hosts.filter(host => host.dataset.interactionState === 'error').length;
    const interrupted = hosts.some(host => host.dataset.loadingFailed === 'true');
    const pendingAngle = hosts.some(host => host.dataset.interactionState === 'ready' && host.dataset.anglePending === 'true');
    const warming = hosts.some(host => host.dataset.renderMode === 'frames' && Number(host.dataset.totalFrames) > Number(host.dataset.loadedFrames || 0));
    panelLayer.setAttribute('aria-busy', String(ready + failed < hosts.length));
    caption.dataset.state = failed || interrupted ? 'error' : ready === hosts.length && !pendingAngle ? 'ready' : 'loading';
    if (failed) {
      caption.textContent = ready ? `${ready} 个画面可以拖动，其他画面请重新准备` : '互动暂未打开，原画仍可阅读';
      if (retry) retry.hidden = false;
    } else if (interrupted) {
      caption.textContent = '部分环绕角度加载中断，原画和已打开的角度仍可查看。请重新准备。';
      if (retry) retry.hidden = false;
    } else if (pendingAngle) caption.textContent = '正在打开这个角度…';
    else if (ready === hosts.length) caption.textContent = warming ? '可以拖动 · 其他角度继续准备' : '可以拖动 · 双击还原原画';
    else caption.textContent = ready ? `${ready} 个画面可以拖动，其余正在准备…` : '正在准备环绕画面，原画可以先读';
  }
  function queuePanelStatus() {
    if (panelStatusQueued) return;
    panelStatusQueued = true;
    Promise.resolve().then(() => { panelStatusQueued = false; updatePanelStatus(); });
  }
  panelLayer.addEventListener('comic-panel-status', queuePanelStatus);
  if ($('retry-interaction')) $('retry-interaction').addEventListener('click', () => showPage(current));

  function clearPlayers() {
    players.forEach(player => player.destroy()); players = []; panelLayer.replaceChildren(); panelControls.replaceChildren(); panelControls.hidden = true;
    $('reset-panels').hidden = true;
  }
  function mountPanels(page) {
    clearPlayers();
    const candidatePanels = Array.isArray(page.panels) ? page.panels : [];
    let interactionCount = 0;
    candidatePanels.forEach(panel => {
      if (!window.ComicPanelPlayer || !window.ComicPanelPlayer.displayable(panel, page)) return;
      const regions = window.ComicPanelPlayer.interactionRegions(panel, page);
      // A missing/mismatched explicit layout leaves the unchanged original visible.
      if (window.ComicPanelPlayer.requiresInteractionLayout(panel) && !regions.length) return;
      if (regions.length) {
        const needsFrontBackdrop = ['page-011-panel-01', 'page-014-panel-01', 'page-026-panel-01'].includes(panel.id);
        const activeChildren = new Set();
        const backdrop = needsFrontBackdrop ? window.ComicPanelPlayer.create(panel, page, panelLayer, panelControls, {backgroundOnly:true}) : null;
        if (backdrop) players.push(backdrop);
        regions.forEach(region => players.push(window.ComicPanelPlayer.create(panel, page, panelLayer, panelControls, {
          region,
          onActivity:backdrop ? active => {
            if (active) activeChildren.add(region.id); else activeChildren.delete(region.id);
            backdrop.setBackdropVisible(activeChildren.size > 0);
          } : undefined
        })));
        const fixedProtection = window.ComicPanelPlayer.createFixedProtectionOverlay(panel, page, panelLayer);
        if (fixedProtection) players.push(fixedProtection);
        interactionCount += regions.length;
      } else {
        players.push(window.ComicPanelPlayer.create(panel, page, panelLayer, panelControls));
        interactionCount++;
      }
    });
    candidatePanels.filter(panel => !window.ComicPanelPlayer.displayable(panel, page)).forEach(panel => {
      const row = document.createElement('div'); row.className = 'panel-controls pending-panel'; row.dataset.panelId = panel.id; row.dataset.quality = panel.quality;
      const title = document.createElement('strong'); title.textContent = `${panel.title} · 待制作`;
      const reason = document.createElement('span'); reason.textContent = panel.pendingReason || '等待通过逐格验收。'; row.append(title, reason); panelControls.append(row);
    });
    $('reset-panels').hidden = !players.length;
    $('reset-panels').textContent = '复位本页';
    panelControls.hidden = true; panelControls.inert = true; panelControls.setAttribute('aria-hidden', 'true');
    const done = candidatePanels.filter(p => p.quality === 'passed').length;
    const pendingPanel = candidatePanels.find(panel => !window.ComicPanelPlayer.displayable(panel, page));
    $('page-caption').textContent = interactionCount ? '拖动单格 · 双击还原视角' : pendingPanel && pendingPanel.pendingReason || '原画完整呈现';
    queuePanelStatus();
  }
  $('reset-panels').addEventListener('click', () => players.forEach(player => player.reset()));

  function showPage(number) {
    number = Math.trunc(Number(number));
    if (!Number.isFinite(number) || number < 1 || number > pages.length) return;
    current = number; loaded = false; const token = ++loadToken;
    if (frameConfigController) frameConfigController.abort();
    frameConfigController = new AbortController();
    const configSignal = frameConfigController.signal;
    if (imageLoader) { imageLoader.onload = null; imageLoader.onerror = null; imageLoader.removeAttribute('src'); }
    $('panel-sources-button').hidden = true;
    if ($('panel-sources-dialog').open) $('panel-sources-dialog').close();
    clearPlayers(); image.hidden = true;
    $('page-loading').hidden = false; $('page-error').hidden = true;
    $('page-number').value = current;
    $('current-page-label').textContent = `第 ${current} 页`;
    $('page-caption').textContent = '正在打开原页…';
    $('page-caption').dataset.state = 'loading';
    if ($('retry-interaction')) $('retry-interaction').hidden = true;
    $('page-progress').textContent = `第 ${current} / ${pages.length} 页`;
    $('prev-page').disabled = current <= 1; $('next-page').disabled = current >= pages.length;
    const chapter = chapterOf(current);
    if (chapter) $('chapter-select').value = chapter.start;
    zoom = 1; fitting = true; sizeStage(); viewport.scrollLeft = 0; viewport.scrollTop = 0;
    const page = pages[current - 1];
    // The small current-page configuration can travel alongside the high-priority
    // original image. No player or angle resource starts before the original is visible.
    const configReady = Promise.resolve().then(() => {
      if (token !== loadToken || configSignal.aborted) return null;
      if (!window.ComicPageFrames) throw new Error('Current page frame loader unavailable');
      return window.ComicPageFrames.ensure(page, configSignal);
    }).then(config => ({config}), error => ({error}));
    imageLoader = new Image();
    imageLoader.fetchPriority = 'high'; imageLoader.decoding = 'async';
    imageLoader.width = page.width; imageLoader.height = page.height;
    imageLoader.onload = () => {
      if (token !== loadToken) return;
      loaded = true; image.src = page.source; image.width = page.width; image.height = page.height;
      image.alt = `Just Cuz 第 ${current} 页完整原画`;
      image.hidden = false; $('page-loading').hidden = true;
      document.dispatchEvent(new CustomEvent('comic-page-original-ready', {detail:{readingPage:current, sourcePage:page.sourcePage, sourcePageSha256:page.sha256}}));
      $('page-caption').textContent = '正在准备本页互动，原画可以先读';
      panelLayer.setAttribute('aria-busy', 'true');
      configReady.then(result => {
        if (token !== loadToken || configSignal.aborted) return;
        if (result.error) throw result.error;
        if (result.config) mountPanels(page);
      }).catch(() => {
        if (token !== loadToken || configSignal.aborted) return;
        panelLayer.setAttribute('aria-busy', 'false');
        $('page-caption').dataset.state = 'error';
        $('page-caption').textContent = '互动暂未打开，原画仍可阅读。请重新准备。';
        if ($('retry-interaction')) $('retry-interaction').hidden = false;
      });
      updatePanelSourcesButton(page);
      try { localStorage.setItem(readingPositionKey, String(current)); } catch (_) {}
      try { history.replaceState(null, '', `#page=${current}`); } catch (_) {}
    };
    imageLoader.onerror = () => {
      if (token !== loadToken) return;
      frameConfigController.abort();
      $('page-loading').hidden = true; $('page-error').hidden = false;
      $('page-caption').textContent = '原页尚未打开';
    };
    imageLoader.src = page.source;
  }
  $('prev-page').addEventListener('click', () => showPage(current - 1));
  $('next-page').addEventListener('click', () => showPage(current + 1));
  $('page-jump').addEventListener('submit', event => {
    event.preventDefault(); const field = $('page-number');
    if (!field.reportValidity()) return;
    showPage(field.value);
  });
  $('chapter-select').addEventListener('change', event => showPage(event.target.value));
  $('retry-page').addEventListener('click', () => showPage(current));
  window.addEventListener('hashchange', () => {
    const match = location.hash.match(/^#page=(\d+)$/);
    if (match && Number(match[1]) !== current) showPage(Number(match[1]));
  });
  document.addEventListener('keydown', event => {
    if (document.querySelector('dialog[open]') || event.ctrlKey || event.altKey || event.metaKey || event.target.closest('input,select,textarea,button,.panel-host')) return;
    const actions = {ArrowLeft:() => showPage(current - 1), ArrowRight:() => showPage(current + 1), Home:() => showPage(1), End:() => showPage(pages.length), '+':() => setZoom(zoom * 1.4), '=':() => setZoom(zoom * 1.4), '-':() => setZoom(zoom / 1.4, zoom / 1.4 <= 1)};
    if (actions[event.key]) { event.preventDefault(); actions[event.key](); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) players.forEach(player => player.pause()); });
  window.addEventListener('pagehide', () => players.forEach(player => player.pause()));
  $('book-count').textContent = `${pages.length} 页故事`;
  const verifiedSourceCount = Number.isInteger(book.verifiedSourcePanelCount) && book.verifiedSourcePanelCount >= 0 ? book.verifiedSourcePanelCount : pages.reduce((total, page) => total + verifiedPanelSources(page).length, 0);
  const sourcePanelTotal = Number.isInteger(book.primaryPanelCount) && book.primaryPanelCount > 0 ? book.primaryPanelCount : Number.isInteger(book.panelSourceInventoryTotal) && book.panelSourceInventoryTotal > 0 ? book.panelSourceInventoryTotal : null;
  $('source-panel-count').textContent = '独立拖动';
  const accepted = pages.reduce((total, page) => total + (page.panels || []).filter(panel => window.ComicPanelPlayer && window.ComicPanelPlayer.eligible(panel, page)).length, 0);
  const interactionTotal = pages.reduce((total, page) => total + (page.panels || []).reduce((count, panel) => {
    if (!window.ComicPanelPlayer || !window.ComicPanelPlayer.eligible(panel, page)) return count;
    return count + (window.ComicPanelPlayer.interactionRegions(panel, page).length || 1);
  }, 0), 0);
  $('dynamic-count').textContent = '双击还原';
  const complete = book.complete === true && accepted === sourcePanelTotal;
  document.querySelector('.stage-badge').textContent = complete ? '一起转转看！' : '一起读故事！';
  $('dynamic-note').textContent = '每个画面都可以单独转动，双击回到原画。其他方向的画面参照原画补绘。';
  let first = 1;
  const match = location.hash.match(/^#page=(\d+)$/);
  if (match) first = Number(match[1]);
  else {
    try {
      const saved = localStorage.getItem(readingPositionKey);
      // Previous reader counted the collection cover; retain the same source page.
      first = saved !== null ? Number(saved) || 1 : Math.max(1, (Number(localStorage.getItem('just-cuz-birthday-episode-page')) || 2) - 1);
    } catch (_) {}
  }
  showPage(Math.min(pages.length, Math.max(1, first)));
})();

;
/* panel-loading.js */
(() => {
  'use strict';
  const layer = document.getElementById('panel-layer');
  if (!layer || window.ComicPanelLoading) return;
  const records = new Map(), panels = new Map();
  let queued = false, destroyed = false;
  const positive = value => Number.isFinite(value) && value > 0;
  const validRect = (rect, width, height) => rect && [rect.x, rect.y, rect.width, rect.height].every(Number.isFinite)
    && rect.x >= 0 && rect.y >= 0 && positive(rect.width) && positive(rect.height)
    && rect.x + rect.width <= width && rect.y + rect.height <= height;
  for (const page of window.COMIC_BOOK && window.COMIC_BOOK.pages || []) {
    for (const panel of page.panels || []) {
      if (!panel || typeof panel.id !== 'string') continue;
      // Ambiguous IDs cannot safely supply an individual picture's geometry.
      if (panels.has(panel.id)) panels.set(panel.id, null);
      else panels.set(panel.id, {page, panel});
    }
  }
  function geometry(host) {
    const source = panels.get(host.dataset.sourcePanelId);
    if (!source) return null;
    const {page, panel} = source, bounds = panel.bounds;
    if (!positive(page.width) || !positive(page.height) || !validRect(bounds, page.width, page.height)) return null;
    let rect = {x:0, y:0, width:bounds.width, height:bounds.height};
    if (host.dataset.interactionRegion || host.dataset.interactionRect) {
      try { rect = JSON.parse(host.dataset.interactionRect); } catch (_) { return null; }
      if (!validRect(rect, bounds.width, bounds.height)) return null;
    }
    return {
      left:`${(bounds.x + rect.x + rect.width / 2) / page.width * 100}%`,
      top:`${(bounds.y + rect.y + rect.height / 2) / page.height * 100}%`,
      width:`calc(${rect.width / page.width * 100}% - 16px)`,
      compact:rect.width / page.width < .4
    };
  }
  function videoFraction(video) {
    if (!video || !positive(video.duration)) return 0;
    let seconds = 0, lastEnd = 0;
    try {
      for (let i = 0; i < video.buffered.length; i++) {
        const start = Math.max(0, video.buffered.start(i), lastEnd);
        const end = Math.min(video.duration, video.buffered.end(i));
        if (Number.isFinite(start) && Number.isFinite(end) && end > start) seconds += end - start;
        if (Number.isFinite(end)) lastEnd = Math.max(lastEnd, end);
      }
    } catch (_) { return 0; }
    return Math.min(1, seconds / video.duration);
  }
  function update(host, record) {
    const data = host.dataset, loaded = Math.max(0, Number(data.loadedFrames) || 0), total = Number(data.totalFrames);
    const videoMode = data.renderMode === 'video';
    const interrupted = data.loadingFailed === 'true' && !(videoMode && data.interactionState === 'ready');
    // The player's ready state already verifies decode, protection and the full MP4 seek range.
    const complete = !interrupted && data.interactionState === 'ready' && (videoMode || positive(total) && loaded >= total);
    const previewReady = data.previewReady === 'true' && data.interactionState === 'ready';
    const previewPhase = data.frameReady !== 'fallback' && Number(data.previewTotal) > 0 && Number(data.previewFailed || 0) === 0 && !loaded
      && (!previewReady || Number(data.previewLoaded || 0) < Number(data.previewTotal));
    let fraction = previewPhase ? Number(data.previewLoaded || 0) / Number(data.previewTotal) : positive(total) ? loaded / total : 0;
    if (videoMode && !previewPhase && (!loaded || data.frameReady === 'fallback')) fraction = videoFraction(record.video);
    const percent = complete ? 100 : Math.min(99, Math.max(0, Math.floor(fraction * 100)));
    const state = data.interactionState === 'error' || interrupted ? 'error' : complete ? 'ready' : 'loading';
    const title = (host.getAttribute('aria-label') || '这个画面').split('，')[0];
    const label = state === 'error' ? '加载暂时中断' : previewPhase ? '环绕预览加载中' : previewReady ? '高清画面加载中' : '环绕画面加载中';
    const hint = state === 'error' ? '请点击页面上方「重新准备」'
      : previewPhase ? (previewReady ? '预览可先拖动，正在补齐全角度' : '先准备全角度小预览，再补充高清')
      : previewReady ? '预览可拖动，高清加载中'
      : percent === 99 ? '正在准备最后的画面，请稍候'
      : data.interactionState === 'ready' ? '可先拖动，完整视角仍在加载' : '完成后拖动更流畅，请稍候';
    const description = state === 'error' ? `${title}，画面加载 ${percent}%，暂时中断，请重新准备` : `${title}，${label.replace(/中$/, '')} ${percent}%，${hint}`;
    if (record.number.textContent !== `${percent}%`) record.number.textContent = `${percent}%`;
    if (record.label.textContent !== label) record.label.textContent = label;
    if (record.hint.textContent !== hint) record.hint.textContent = hint;
    if (record.badge.dataset.state !== state) record.badge.dataset.state = state;
    if (record.badge.getAttribute('aria-label') !== description) record.badge.setAttribute('aria-label', description);
    record.badge.title = description;
    record.badge.hidden = complete;
  }
  function remove(record) {
    if (record.video) for (const event of ['progress', 'loadedmetadata', 'durationchange']) record.video.removeEventListener(event, queue);
    record.badge.remove();
  }
  function sync() {
    if (destroyed) return;
    const hosts = new Set(Array.from(layer.querySelectorAll('.panel-host')).filter(host => host.parentNode === layer && host.dataset.backgroundOnly !== 'true'));
    for (const [host, record] of records) if (!hosts.has(host)) { remove(record); records.delete(host); }
    for (const host of hosts) {
      const point = geometry(host);
      if (!point) { if (records.has(host)) { remove(records.get(host)); records.delete(host); } continue; }
      let record = records.get(host);
      if (!record) {
        const badge = document.createElement('output');
        badge.className = 'panel-loading-percent';
        badge.setAttribute('aria-live', 'off');
        badge.dataset.sourcePanelId = host.dataset.sourcePanelId;
        if (host.dataset.interactionRegion) badge.dataset.interactionRegion = host.dataset.interactionRegion;
        const label = document.createElement('span'), number = document.createElement('strong'), hint = document.createElement('span');
        label.className = 'panel-loading-label'; number.className = 'panel-loading-number'; hint.className = 'panel-loading-hint';
        badge.append(label, number, hint);
        const video = host.querySelector('.panel-video');
        record = {badge, video, label, number, hint}; records.set(host, record);
        if (video) for (const event of ['progress', 'loadedmetadata', 'durationchange']) video.addEventListener(event, queue);
        // A direct layer child stays visible while the source-bound player has opacity:0 or is clipped.
        layer.append(badge);
      }
      Object.assign(record.badge.style, {left:point.left, top:point.top, width:point.width});
      record.badge.dataset.compact = String(point.compact);
      update(host, record);
    }
  }
  function queue() {
    if (queued || destroyed) return;
    queued = true;
    Promise.resolve().then(() => { queued = false; sync(); });
  }
  const observer = new MutationObserver(changes => {
    // Only host insertion/removal schedules work. Our own output nodes cannot cause an observer loop.
    if (changes.some(change => [...change.addedNodes, ...change.removedNodes].some(node => node.nodeType === 1 && node.classList.contains('panel-host')))) queue();
  });
  observer.observe(layer, {childList:true});
  layer.addEventListener('comic-panel-status', queue);
  const api = Object.freeze({refresh:queue, destroy() {
    destroyed = true; observer.disconnect(); layer.removeEventListener('comic-panel-status', queue);
    for (const record of records.values()) remove(record);
    records.clear();
    if (window.ComicPanelLoading === api) delete window.ComicPanelLoading;
  }});
  window.ComicPanelLoading = api;
  queue();
})();

;
/* reader-decor.js */
(() => {
  'use strict';
  let scheduled = false, complete = false;
  function currentPageReady() {
    const hosts = Array.from(document.querySelectorAll('.panel-host')).filter(host => host.dataset.backgroundOnly !== 'true');
    return hosts.length > 0 && hosts.every(host => host.dataset.interactionState === 'ready'
      && host.dataset.anglePending !== 'true' && (host.dataset.renderMode !== 'frames'
        || Number(host.dataset.loadedFrames) === Number(host.dataset.totalFrames)));
  }
  function prepareDecor() {
    if (complete || scheduled || navigator.connection && navigator.connection.saveData) return;
    if (!currentPageReady()) return;
    scheduled = true;
    const paint = () => {
      scheduled = false;
      if (!currentPageReady()) return;
      complete = true;
      document.body.classList.add('reader-art-ready');
    };
    if (typeof requestIdleCallback === 'function') requestIdleCallback(paint, {timeout:1500});
    else setTimeout(paint, 300);
  }
  document.addEventListener('comic-panel-status', () => Promise.resolve().then(prepareDecor));
  prepareDecor();
})();

;
/* music.js */
(() => {
  'use strict';
  const audio = document.getElementById('background-music');
  const toggle = document.getElementById('music-toggle');
  const volume = document.getElementById('music-volume');
  const status = document.getElementById('music-status');
  if (!audio || !toggle || !volume || !status) return;
  const preferenceKey = 'just-cuz-episode1-music';
  const volumeKey = 'just-cuz-episode1-music-volume';
  let wanted = true, blocked = false, failed = false, starting = false;
  try {
    wanted = localStorage.getItem(preferenceKey) !== 'off';
    const saved = localStorage.getItem(volumeKey);
    if (saved !== null && Number.isFinite(Number(saved))) volume.value = String(Math.min(100, Math.max(0, Number(saved))));
  } catch (_) {}
  audio.loop = true;
  audio.volume = Number(volume.value) / 100;
  function remember(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
  function render() {
    const playing = !audio.paused && !failed;
    toggle.textContent = playing ? '♫ 音乐已开启' : blocked ? '♫ 点击开启音乐' : '♫ 开启音乐';
    toggle.setAttribute('aria-label', playing ? '暂停背景音乐' : '开启背景音乐');
    toggle.setAttribute('aria-pressed', String(playing));
    status.textContent = failed ? '音乐暂时无法打开' : playing ? (audio.volume === 0 ? '音量为零' : '循环播放中') : blocked ? '点一下页面即可播放' : '音乐已暂停';
    volume.setAttribute('aria-valuetext', `${Math.round(audio.volume * 100)}%`);
  }
  async function start() {
    if (starting || failed || !wanted) return;
    starting = true;
    try {
      await audio.play();
      blocked = false;
    } catch (error) {
      blocked = error && error.name === 'NotAllowedError';
      failed = !blocked && !(error && error.name === 'AbortError');
    } finally { starting = false; render(); }
  }
  toggle.addEventListener('click', () => {
    if (!audio.paused) {
      wanted = false; blocked = false; audio.pause(); remember(preferenceKey, 'off'); render();
    } else {
      wanted = true; failed = false; remember(preferenceKey, 'on'); start();
    }
  });
  volume.addEventListener('input', () => {
    audio.volume = Number(volume.value) / 100;
    remember(volumeKey, volume.value);
    render();
  });
  function firstInteraction(event) {
    if (!event.isTrusted || event.target.closest('.music-controls') || !wanted || !blocked || failed) return;
    start();
  }
  // Audible autoplay can be denied by the browser. Retry only during a real reading gesture.
  document.addEventListener('pointerdown', firstInteraction, {capture:true});
  document.addEventListener('keydown', firstInteraction, {capture:true});
  audio.addEventListener('play', render);
  audio.addEventListener('pause', render);
  audio.addEventListener('volumechange', render);
  audio.addEventListener('error', () => { failed = true; blocked = false; render(); });
  render();
  if (wanted) start();
})();

