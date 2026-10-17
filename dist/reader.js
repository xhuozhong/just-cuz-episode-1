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
window.COMIC_FRAME_INDEX = Object.freeze({"schemaVersion":1,"pages":[{"sourcePageSha256":"b4127143f65a2790de7021cdee0e6ced448f0d0bb71d7e66f92bcef650517724","source":"frame-config/page-002.json","sha256":"b2b6b1512c02a7f20bb62dd7282dfa55232ea4b4086f4c79a528260bffe22100"},{"sourcePageSha256":"d2abb879bd7271f8465cc8ab0540b1ab1019bdf995e02ac4e69bddc870a1f235","source":"frame-config/page-003.json","sha256":"bfffd6e35239c642dced8765db68faa600e07175c6b28d92d5141549c4fc95d9"},{"sourcePageSha256":"3d8b7535c5bd7aedb508d2632b005910c188f14f746ba19cfd39cf1f1e6db823","source":"frame-config/page-004.json","sha256":"3c99cea8800d154cb90811f3b328595bc54f32eac1d9972515cc191579ca1059"},{"sourcePageSha256":"1a0cf95e756558bb78063be628a7f45e39e0fcb96a2c1840c842ade390aa419f","source":"frame-config/page-005.json","sha256":"2d27dcb27aae76845e2456c96a8e6fccb899afec3364cc3497967c759b534bea"},{"sourcePageSha256":"e8be9fcc042278e4ab2170b7b013226caee025f9db681fc202065c64893cb696","source":"frame-config/page-006.json","sha256":"6b466144fed354b7a103a6d0450b3b66a61361246fb229a144ae1698d5c003e5"},{"sourcePageSha256":"b1238ff07e4cbb9a5d5474e4beea6a6f8b35833499550309f57e6afe81dfbc41","source":"frame-config/page-007.json","sha256":"58f0ba34d149a83913483e14391b5a18ab755d0cdd1e3060b2845cb0796ea468"},{"sourcePageSha256":"cf937b6784caf26771c0b2346a4bb1cd3effb797b915e8c7214199fc2191398d","source":"frame-config/page-008.json","sha256":"e9f8bcb63509ba0f28dc7105b31300acd44b11d1d31fd7def0ae402634eb49b3"},{"sourcePageSha256":"5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1","source":"frame-config/page-009.json","sha256":"c672e547f7485495480b0111c4f515152ccf92bb57ada763ee8eb4090dbfa053"},{"sourcePageSha256":"9646e485789e337cc0f21f96ab212dd7bb46eaa4b93666bbc3b3b7a86a8ba070","source":"frame-config/page-010.json","sha256":"0f4445d860dce855849fdac0a658c4195b19fc919714d9b5cb5cd06b28ec6ce4"},{"sourcePageSha256":"d1e38bcf348b8a1d5e7360e980191ce116c50d660e13b69ff58e561f8e3e0ed4","source":"frame-config/page-011.json","sha256":"bca8df23bd618500799065d105ded92bcab1fe50158d46c147ee31af933de599"},{"sourcePageSha256":"399588d1d1dc6df20d20ef21da5e262101fa210c2717642beb111b8c78d06caa","source":"frame-config/page-012.json","sha256":"555099eb0da29ac9afec4886b2a34a9273ef9a6937fea1d74b6ed71d9759bd21"},{"sourcePageSha256":"d0f3c3861ad1cf09a11d687939811900bec9636ec9a9a478e9888b518939dafb","source":"frame-config/page-013.json","sha256":"a3072ee5c4127bcaf37ce75cc11277271a22a126ad0402e7acb6a5bdf93aecdb"},{"sourcePageSha256":"d54451a154ee9fecacced539013ed6ae5c56f41533d0d487e80d4bdf280b0030","source":"frame-config/page-014.json","sha256":"20768507e5f7afbbcf1c2e2c878e7cd1b6f480d21abda1bd9b08b291b3235a44"},{"sourcePageSha256":"5898120a6752a1e9c6da051403666242e5867628f67dd15725c578846958ffe1","source":"frame-config/page-015.json","sha256":"fd0c91bc1db199f31de7e79dfd4d884ae8e6053b611dfeffbdabc9eadcd6399b"},{"sourcePageSha256":"f03270316c1babf9a6e06ca5384122aea1c4dc286c4d3330a734f96e85f37ef3","source":"frame-config/page-016.json","sha256":"82ea54ae3f07ad380a2659b8bc4f494a91bc47c9bbdc8683e3d8477f87ead905"},{"sourcePageSha256":"dc7f3f269ef5f429e6c852c62b3e9b32db37333659a71971c424d8c0f1643d11","source":"frame-config/page-017.json","sha256":"b53bd26792a302d494640471f371c932f4036a3547dbb22cfb66427d26fdd93b"},{"sourcePageSha256":"28fcbdebca3dc4f8f2ddbb55266e1c8ed18466db3f1f91561a374bc71942ad87","source":"frame-config/page-018.json","sha256":"267447f0ae86da00057e79a2f08f856a0dc241d1fa890e7017b1d095f0b0e162"},{"sourcePageSha256":"192a5d0335141ceeeac3a3ecfafecca018836c428e1e0cc7d6da04dcf86cdf63","source":"frame-config/page-019.json","sha256":"8c17cb80c7f670c639e08cdd9eb1dde5297771e81a0addbd302382b477092cdd"},{"sourcePageSha256":"3f6e7a41c84c3659bb611ef463e688f208506bcd2ce8542d858116cc64e4061d","source":"frame-config/page-020.json","sha256":"e6f35e6c9d37c3cc113438637582fc2791f935d870e790ed0aaa046ad0dc48cd"},{"sourcePageSha256":"2f22c8f6ad2d1a1dfcb5f397ff003175e3d4369bba91787130d65185f3d386f7","source":"frame-config/page-021.json","sha256":"7e53c92ddfd97b5a4822929a7f589e46c889fbced792521b7171cea78ca23bf1"},{"sourcePageSha256":"5a38acd0aa191531fcdd75b979e9b105c0d78a6241df34b38bbd4f6217916a64","source":"frame-config/page-022.json","sha256":"924b775b36cde5d9316c5b8946f0b3eb818802da02e323a9f8e92e6296e5a1a8"},{"sourcePageSha256":"f990ba8c6f80ec0e3eafcf863a191e58fe67caf584fb1ef91f7e68b2aa45f334","source":"frame-config/page-023.json","sha256":"c9a61031cf8b1bd8e42dc6e5c325627ef8da61df417ce1e9a7606e97850a3fdc"},{"sourcePageSha256":"885f278eab0c73f439fcc645a1740c616c0fa02e021dc2f8943134c0ab176c00","source":"frame-config/page-024.json","sha256":"fc419e538b908fdca5398fc0127af6e76a6a9331ebb839f8697d372da7f3f2f4"},{"sourcePageSha256":"c1c27db4206884d4f535e01a572a5ff6a27081d9d1e5e813e144fb92ca849152","source":"frame-config/page-025.json","sha256":"948a0159078c97e749be4f5ac4faaf49bfe7b5e50a3387add49d7dbffbab0320"},{"sourcePageSha256":"433517bca3a12ca97d682bb316ac9e8ce920553bf3a43b83fef32ce0ff79d80c","source":"frame-config/page-026.json","sha256":"f2b36ab1101088abd1814988bf59a1e9544ca7de487c4d55c488a132f4b207bc"},{"sourcePageSha256":"8bd95fb3a1c5743e10941779a773effcba4ce4b46c35f9dcaeef8afcc8ab5ef9","source":"frame-config/page-027.json","sha256":"639b27487f1a4461b3d1295eece59a9f174685aaba63f6ce3dabf9ed8a2c85bd"},{"sourcePageSha256":"52af737b4422a4d8f957f08cd9b082352461a2c4c70a8166fad8f521a5d936b8","source":"frame-config/page-028.json","sha256":"2dd3f1a3cc786395037f4fe76db50d3d627d7ecfc10fcba4f11e46b82dc12a5d"},{"sourcePageSha256":"244d4056452a6c71db40ae5902ced6c8f79c3e60547d5b29406ca941c58a65c2","source":"frame-config/page-029.json","sha256":"a4e091a124aedc33573bc9bc304328414680bf8ed1061cbaf31a125814b941c4"},{"sourcePageSha256":"88fa5702dae64d1590ffdbffa425651a17f1fdc994641e88e96aa03213fc6fbc","source":"frame-config/page-030.json","sha256":"1d105aeccf6160398c728556b264d38f34d2cfe2d513b3b3aa026f17daf7e953"},{"sourcePageSha256":"72c9233a78318aebd868b85afc810a4b5c88c8f1c7ae993703651ce0b930909b","source":"frame-config/page-031.json","sha256":"dfe023e0b5fc8d6d740c4900426101b76d156831fdfdc41a368226984dbfdb5b"},{"sourcePageSha256":"3e356f31b92da31bf6eb235188f8c72ea38e02239f52fa5060d88a4db0fdc365","source":"frame-config/page-032.json","sha256":"367eaa7c8e4d32446457c3b8a19801a1ab1edfe94f758aebb2cc0bee573c6143"},{"sourcePageSha256":"6b1c5cc8e98bd9035e3ded0855f165b7c745e9ba3be7bc52c01146847ac18eff","source":"frame-config/page-033.json","sha256":"7e9835ba5bfb78d9136df540673cbd551f7669d80f606a15385cf0a62ff53e38"},{"sourcePageSha256":"6d2bce1343bbad77cea279d32cfa8437809e5ff91f28209e37c4b7b5752d009c","source":"frame-config/page-034.json","sha256":"ffd51016b706ea39a5689181d4c1779b97f776e425cd5140ee9c413daf9dda92"},{"sourcePageSha256":"d2ae2625b99bf326adedf6528804ac19af9e17dd22561576aad3bc3a37a239e5","source":"frame-config/page-035.json","sha256":"5a105197af57e2f044d458850761a88ec808ca4df44f1d4f3ed3892a55f106c9"}]});

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
  const keyFor = (store, index) => `${store.id}:${index}`;
  function peek(store, index) {
    const key = keyFor(store, index), entry = lru.get(key);
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
  function scheduleProgress(consumer) {
    if (consumer.disposed || consumer.progressScheduled) return;
    consumer.progressScheduled = true;
    defer(() => {
      consumer.progressScheduled = false;
      if (!consumer.disposed && !consumer.store.disposed && typeof consumer.options.onProgress === 'function') {
        consumer.options.onProgress({loaded:consumer.store.blobs.size, total:consumer.store.sequence.frameCount});
      }
    });
  }
  function enqueueRequest(store, key, priority, index, pack) {
    const existing = store.requests.get(key);
    if (existing) { existing.priority = Math.min(existing.priority, priority); return existing.promise; }
    let resolve, reject;
    const promise = new Promise((ok, fail) => { resolve = ok; reject = fail; });
    const request = {key, index, pack, priority, promise, resolve, reject, started:false, controller:null};
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
  function publishBlob(store, index, blob, generation) {
    if (!current(store, generation)) throw new Error('Frame store disposed');
    store.blobs.set(index, blob);
    const waiter = store.frameWaiters.get(index);
    if (waiter) { store.frameWaiters.delete(index); waiter.resolve(blob); }
    for (const consumer of store.consumers) scheduleProgress(consumer);
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
    try {
      for (;;) {
        const chunk = await reader.read();
        if (!current(store, generation)) throw new Error('Frame store disposed');
        if (chunk.done) break;
        if (!(chunk.value instanceof Uint8Array) || received + chunk.value.byteLength > pack.byteLength) throw new Error('Frame pack byte length mismatch');
        bytes.set(chunk.value, received); received += chunk.value.byteLength;
        // The entire table is bound before even the first payload is published.
        if (!rows && received >= tableLength) rows = packTable(pack, bytes.subarray(0, received));
        while (rows && next < rows.length && received >= rows[next].offset + rows[next].length) {
          const row = rows[next], payload = bytes.subarray(row.offset, row.offset + row.length);
          if (!webpPayload(payload)) throw new Error('Invalid frame pack WebP payload');
          if (await digest(store, payload) !== pack.frameSha256[next]) throw new Error('Frame payload SHA-256 mismatch');
          publishBlob(store, row.index, new Blob([payload], {type:'image/webp'}), generation); next++;
        }
      }
      if (received !== pack.byteLength || !rows || next !== rows.length) throw new Error('Truncated frame pack');
      if (await digest(store, bytes) !== pack.sha256) throw new Error('Frame pack SHA-256 mismatch');
      if (!current(store, generation)) throw new Error('Frame store disposed');
      complete = true;
    } finally {
      request.reader = null;
      if (!complete) { try { void Promise.resolve(reader.cancel()).catch(() => {}); } catch (_) {} }
      try { reader.releaseLock(); } catch (_) {}
    }
  }
  function nextFetch() {
    let choice = null;
    for (const store of stores.values()) {
      for (const request of store.requests.values()) {
        if (!request.started && (!choice || request.priority < choice.request.priority)) choice = {store, request};
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
        if (request.pack) init.cache = 'no-cache';
        return fetch(request.pack ? request.pack.source : store.sequence.frames[request.index], init);
      }).then(response => {
        if (!current(store, generation)) throw new Error('Frame store disposed');
        if (!response.ok) throw new Error(`Frame ${request.pack ? 'pack' : 'image'} HTTP ${response.status}`);
        if (request.pack && request.pack.frameBytes && response.body && typeof response.body.getReader === 'function') return streamPack(store, request, response, generation);
        return request.pack ? response.arrayBuffer().then(buffer => unpack(store, request.pack, buffer)) : response.blob();
      }).then(result => {
        if (!current(store, generation)) throw new Error('Frame store disposed');
        if (request.pack) {
          if (result) for (const [index, blob] of result) publishBlob(store, index, blob, generation);
        } else {
          if (!result || result.size === 0) throw new Error('Frame image is empty');
          store.blobs.set(request.index, result);
        }
        request.resolve();
        for (const consumer of store.consumers) scheduleProgress(consumer);
      }).catch(error => {
        if (current(store, generation)) {
          // Independently verified payloads remain usable even if a later row or
          // the final pack hash fails; never publish any unverified remainder.
          for (const index of request.pack ? request.pack.indices : [request.index]) {
            if (store.blobs.has(index)) continue;
            store.errors.set(index, error);
            const waiter = store.frameWaiters.get(index);
            if (waiter) { store.frameWaiters.delete(index); waiter.reject(error); }
          }
          for (const consumer of store.consumers) if (store.errors.has(consumer.target)) scheduleRender(consumer);
        }
        request.reject(error);
      }).finally(() => {
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
  function nextDecode() {
    // Derive demand from live consumers instead of accumulating stale seek promises.
    for (const store of stores.values()) {
      for (const consumer of store.consumers) {
        const index = consumer.target;
        if (consumer.actualIndex !== index && !lru.has(keyFor(store, index)) && !store.pending.has(index) && !store.errors.has(index)
          && (!store.sequence.packs || store.blobs.has(index))) return {store, index, priority:0};
      }
    }
    for (const store of stores.values()) {
      for (const consumer of store.consumers) {
        for (const index of neighbors(consumer)) {
          if (consumer.prefetched.has(index)) continue;
          // Network waiters must not occupy the four bitmap-decode slots: a
          // freshly verified demanded frame can arrive before its neighbors.
          if (store.sequence.packs && !store.blobs.has(index)) continue;
          consumer.prefetched.add(index);
          if (!lru.has(keyFor(store, index)) && !store.pending.has(index) && !store.errors.has(index)) return {store, index, priority:1};
        }
      }
    }
    return null;
  }
  function pumpDecodes() {
    while (decodePending < MAX_DECODE_PENDING) {
      const next = nextDecode();
      if (!next) break;
      const {store, index, priority} = next, generation = store.generation;
      // Reserve capacity before createImageBitmap, so even its late result never
      // makes the live decoded bitmap count exceed24.
      while (lru.size + decodePending >= MAX_BITMAPS) evictOldest();
      store.pending.add(index); decodePending++;
      requestBlob(store, index, priority).then(blob => {
        if (!current(store, generation)) return null;
        return createImageBitmap(blob);
      }).then(bitmap => {
        if (!bitmap) return;
        if (!current(store, generation)) { bitmap.close(); return; }
        if (bitmap.width !== store.sequence.width || bitmap.height !== store.sequence.height) {
          bitmap.close(); throw new Error('Frame dimensions do not match the bound media');
        }
        lru.set(keyFor(store, index), {store, index, bitmap});
        for (const consumer of store.consumers) if (consumer.target === index) scheduleRender(consumer);
      }).catch(error => {
        if (!current(store, generation)) return;
        store.errors.set(index, error);
        for (const consumer of store.consumers) if (consumer.target === index) scheduleRender(consumer);
      }).finally(() => {
        store.pending.delete(index); decodePending--; schedulePump();
      });
    }
  }
  function scheduleRender(consumer) {
    if (consumer.disposed || consumer.renderScheduled) return;
    consumer.renderScheduled = true;
    defer(() => {
      consumer.renderScheduled = false;
      if (consumer.disposed || consumer.store.disposed) return;
      const index = consumer.target, bitmap = peek(consumer.store, index);
      if (!bitmap) {
        const error = consumer.store.errors.get(index);
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
      consumer.actualIndex = index;
      const sequence = consumer.store.sequence, firstReady = !consumer.ready;
      consumer.ready = true;
      if (firstReady && typeof consumer.options.onReady === 'function') consumer.options.onReady({frameCount:sequence.frameCount, width:sequence.width, height:sequence.height, sourceWidth:sequence.sourceWidth, sourceHeight:sequence.sourceHeight, duration:sequence.duration});
      if (!consumer.disposed && consumer.target === index && typeof consumer.options.onFrame === 'function') consumer.options.onFrame({index, currentTime:index / sequence.frameCount * sequence.duration, duration:sequence.duration, percent:index / sequence.frameCount * 100});
      schedulePump();
    });
  }
  function disposeStore(store) {
    store.disposed = true; store.generation++;
    if (stores.get(store.key) === store) stores.delete(store.key);
    for (const [key, entry] of lru) if (entry.store === store) { entry.bitmap.close(); lru.delete(key); }
    for (const request of store.requests.values()) {
      if (request.controller) request.controller.abort();
      if (request.reader) { try { void Promise.resolve(request.reader.cancel()).catch(() => {}); } catch (_) {} }
      request.reject(new Error('Frame store disposed'));
    }
    for (const waiter of store.frameWaiters.values()) waiter.reject(new Error('Frame store disposed'));
    store.frameWaiters.clear();
    store.requests.clear(); store.blobs.clear(); store.errors.clear(); store.pending.clear();
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
    const key = JSON.stringify([sequence.mediaSha256, sequence.videoSource, sequence.frameCount, sequence.sourceWidth, sequence.sourceHeight, sequence.width, sequence.height, sequence.duration, sequence.frames, sequence.packs]);
    let store = stores.get(key);
    if (!store) {
      const packByIndex = sequence.packs ? new Array(sequence.frameCount) : null;
      if (packByIndex) for (const pack of sequence.packs) for (const index of pack.indices) packByIndex[index] = pack;
      store = {key, id:++serial, sequence, packByIndex, subtle:sequence.packs ? window.crypto.subtle : null, generation:0, disposed:false, consumers:new Set(), blobs:new Map(), frameWaiters:new Map(), requests:new Map(), pending:new Set(), errors:new Map()};
      stores.set(key, store);
      // Compressed images are small and reusable; decode only the requested/nearby frames.
      if (!sequence.packs) for (let index = 0; index < sequence.frameCount; index++) void requestBlob(store, index, 2).catch(() => {});
    }
    const consumer = {store, canvas, context, options, target:0, actualIndex:-1, ready:false, disposed:false, direction:0, version:0, errorVersion:-1, prefetched:new Set(), renderScheduled:false, progressScheduled:false};
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
  function createFixedProtectionOverlay(panel, page, layer) {
    if (!sourceBound(panel, page)) return null;
    const spec = panel.protectionOverlay, b = panel.bounds;
    const image = document.createElement('img');
    image.className = 'panel-protection-overlay'; image.alt = ''; image.draggable = false; image.setAttribute('aria-hidden', 'true');
    image.dataset.fixedSourceProtection = panel.id; image.width = spec.width; image.height = spec.height;
    Object.assign(image.style, {inset:'auto', left:`${b.x / page.width * 100}%`, top:`${b.y / page.height * 100}%`, width:`${b.width / page.width * 100}%`, height:`${b.height / page.height * 100}%`, zIndex:'2', opacity:'0'});
    image.onload = () => { if (image.naturalWidth === spec.width && image.naturalHeight === spec.height) image.style.opacity = '1'; else image.remove(); };
    image.onerror = () => image.remove(); layer.append(image); image.src = spec.source;
    return {pause() {}, reset() {}, destroy() { image.onload = null; image.onerror = null; image.remove(); }};
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
    let loadedFrames = 0, lastStatus = '', updatingAvailability = false;
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
      const detail = {panelId:panel.id, regionId:region ? region.id : null, interactionState:state, loadedFrames, totalFrames:m.frameCount, anglePending};
      Object.assign(host.dataset, {interactionState:state, loadedFrames:String(loadedFrames), totalFrames:String(m.frameCount), anglePending:String(anglePending)});
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
          notice.textContent = videoMessage || (!seekReady() ? '当前浏览器尚不能拖动这段视频。可播放，或用本地预览入口重新打开。' : '');
          retry.hidden = !videoMessage;
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
      const source = overlaySpec ? overlaySpec.source : panel.mask;
      const expectedWidth = overlaySpec ? overlaySpec.width : m.width;
      const expectedHeight = overlaySpec ? overlaySpec.height : m.height;
      const protection = overlayImage || new Image(); protectionLoader = protection;
      protection.onload = () => {
        if (disposed || attempt !== protectionAttempt) return;
        clearTimeout(protectionTimer);
        if (protection.naturalWidth !== expectedWidth || protection.naturalHeight !== expectedHeight) { failProtection('保护层与原画不一致，已保留原画。'); return; }
        if (overlayImage) overlayImage.hidden = false;
        maskReady = true; updateAvailability();
      };
      protection.onerror = () => { if (!disposed && attempt === protectionAttempt) failProtection('文字与格框保护层未打开，已保留原画。请重新打开。'); };
      protectionTimer = setTimeout(() => { if (!disposed && attempt === protectionAttempt) loadingSlow('文字与格框保护层仍在加载，原画可继续阅读。'); }, 15000);
      protection.src = source;
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
      const retryVideo = videoFailed || seekFailed;
      loadFailed = false; pause();
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
        onReady() {
          if (disposed || frameFailed || !frameRenderer) return;
          host.dataset.frameReady = 'true';
          loadedFrames = Math.max(loadedFrames, 1);
          updateAvailability();
        },
        onProgress(actual) {
          if (disposed || frameFailed || !actual || actual.total !== m.frameCount || !Number.isInteger(actual.loaded) || actual.loaded < 0 || actual.loaded > actual.total) return;
          loadedFrames = Math.max(loadedFrames, actual.loaded); updateAvailability();
        },
        onFrame(actual) {
          if (disposed || frameFailed || framePlaybackBlocked || !video.paused) return;
          if (!frameMode) { desired = null; issued = null; inFlight = false; clearTimeout(timer); }
          frameMode = true; frameTime = actual.currentTime;
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
          frameFailed = true; host.dataset.frameReady = 'fallback';
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
    return {pause, reset, setBackdropVisible, destroy() { disposed = true; pendingPlay = false; protectionAttempt++; if (motion) motion.destroy(); if (frameRenderer) frameRenderer.destroy(); dragging = null; video.pause(); updateActual(); clearTimeout(timer); clearTimeout(loadTimer); clearTimeout(protectionTimer); if (protectionLoader) { protectionLoader.onload = null; protectionLoader.onerror = null; } if (observer) observer.disconnect(); if (videoStarted) { video.removeAttribute('src'); video.load(); } host.remove(); row.remove(); }};
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
        const response = await fetch(entry.source, {signal:controller.signal, cache:'no-cache'});
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
    const pendingAngle = hosts.some(host => host.dataset.interactionState === 'ready' && host.dataset.anglePending === 'true');
    const warming = hosts.some(host => host.dataset.renderMode === 'frames' && Number(host.dataset.totalFrames) > Number(host.dataset.loadedFrames || 0));
    panelLayer.setAttribute('aria-busy', String(ready + failed < hosts.length));
    caption.dataset.state = failed ? 'error' : ready === hosts.length && !pendingAngle ? 'ready' : 'loading';
    if (failed) {
      caption.textContent = ready ? `${ready} 个画面可以拖动，其他画面请重新准备` : '互动暂未打开，原画仍可阅读';
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
      Promise.resolve().then(() => {
        if (token !== loadToken || configSignal.aborted) return null;
        if (!window.ComicPageFrames) throw new Error('Current page frame loader unavailable');
        return window.ComicPageFrames.ensure(page, configSignal);
      }).then(config => {
        if (!config || token !== loadToken || configSignal.aborted) return;
        mountPanels(page);
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

