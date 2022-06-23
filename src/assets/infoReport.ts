export const DataReport: any = [
  {
    "total": 569,
    "p": 1,
    "ps": 100,
    "paging": {
        "pageIndex": 1,
        "pageSize": 100,
        "total": 569
    },
    "effortTotal": 5805,
    "issues": [
        {
            "key": "AYFehfA6b_-37Ufde_5B",
            "rule": "typescript:S107",
            "severity": "MAJOR",
            "component": "angularTest:src/app/app.component.ts",
            "project": "angularTest",
            "line": 38,
            "hash": "9cf7e7ab1a5bd8082a91e93f51b260b1",
            "textRange": {
                "startLine": 38,
                "endLine": 38,
                "startOffset": 1,
                "endOffset": 12
            },
            "flows": [],
            "status": "OPEN",
            "message": "Constructor has too many parameters (11). Maximum allowed is 7.",
            "effort": "20min",
            "debt": "20min",
            "author": "hernandez.ricardo@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-11T16:14:30+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehexUb_-37Ufde_1d",
            "rule": "typescript:S4144",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/guards/auth.guard.service.ts",
            "project": "angularTest",
            "line": 76,
            "hash": "9cf7e7ab1a5bd8082a91e93f51b260b1",
            "textRange": {
                "startLine": 76,
                "endLine": 76,
                "startOffset": 1,
                "endOffset": 12
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/guards/auth.guard.service.ts",
                            "textRange": {
                                "startLine": 43,
                                "endLine": 43,
                                "startOffset": 1,
                                "endOffset": 12
                            },
                            "msg": "Original implementation"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Update this function so that its implementation is not identical to the one on line 43.",
            "effort": "15min",
            "debt": "15min",
            "author": "luis.tabares@neoris.com",
            "tags": [
                "confusing",
                "duplicate",
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-04-18T21:56:34+0000",
            "updateDate": "2022-06-13T23:36:24+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe2Sb_-37Ufde_2j",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
            "project": "angularTest",
            "line": 65,
            "hash": "ed384bc5c6b1102385eaa80b24435dd0",
            "textRange": {
                "startLine": 65,
                "endLine": 65,
                "startOffset": 14,
                "endOffset": 16
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 71,
                                "endLine": 71,
                                "startOffset": 7,
                                "endOffset": 8
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 79,
                                "endLine": 79,
                                "startOffset": 26,
                                "endOffset": 28
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 80,
                                "endLine": 80,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 82,
                                "endLine": 82,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 85,
                                "endLine": 85,
                                "startOffset": 36,
                                "endOffset": 38
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 88,
                                "endLine": 88,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 91,
                                "endLine": 91,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 94,
                                "endLine": 94,
                                "startOffset": 46,
                                "endOffset": 48
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 97,
                                "endLine": 97,
                                "startOffset": 38,
                                "endOffset": 40
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 103,
                                "endLine": 103,
                                "startOffset": 21,
                                "endOffset": 23
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 111,
                                "endLine": 111,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 120,
                                "endLine": 120,
                                "startOffset": 6,
                                "endOffset": 9
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 122,
                                "endLine": 122,
                                "startOffset": 62,
                                "endOffset": 64
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 127,
                                "endLine": 127,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/redux/effects/quote.effects.ts",
                            "textRange": {
                                "startLine": 127,
                                "endLine": 127,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed.",
            "effort": "7min",
            "debt": "7min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-08-09T16:28:03+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe00b_-37Ufde_2J",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/redux/reducers/catalog.reducer.ts",
            "project": "angularTest",
            "line": 117,
            "hash": "ad6e3d6022370749061faf3c22aad048",
            "textRange": {
                "startLine": 117,
                "endLine": 117,
                "startOffset": 64,
                "endOffset": 74
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"entityName\" or rename it to \"_entityName\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-08-12T21:12:06+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehe1Ub_-37Ufde_2W",
            "rule": "typescript:S1854",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/redux/selectors/quote.selectors.ts",
            "project": "angularTest",
            "line": 33,
            "hash": "8a68543862ac560af562e8f17134fa19",
            "textRange": {
                "startLine": 33,
                "endLine": 33,
                "startOffset": 5,
                "endOffset": 31
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove this useless assignment to variable \"resultControls\".",
            "effort": "15min",
            "debt": "15min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "cwe",
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-06-15T12:54:44+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe1gb_-37Ufde_2Z",
            "rule": "typescript:S1854",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/redux/selectors/search.selectors.ts",
            "project": "angularTest",
            "line": 17,
            "hash": "8a68543862ac560af562e8f17134fa19",
            "textRange": {
                "startLine": 17,
                "endLine": 17,
                "startOffset": 6,
                "endOffset": 32
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove this useless assignment to variable \"resultControls\".",
            "effort": "15min",
            "debt": "15min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "cwe",
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-05T07:48:22+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheypb_-37Ufde_1w",
            "rule": "typescript:S107",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/services/catalog.service.ts",
            "project": "angularTest",
            "line": 23,
            "hash": "9cf7e7ab1a5bd8082a91e93f51b260b1",
            "textRange": {
                "startLine": 23,
                "endLine": 23,
                "startOffset": 1,
                "endOffset": 12
            },
            "flows": [],
            "status": "OPEN",
            "message": "Constructor has too many parameters (8). Maximum allowed is 7.",
            "effort": "20min",
            "debt": "20min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-04-14T07:24:49+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheypb_-37Ufde_1x",
            "rule": "typescript:S4144",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/services/catalog.service.ts",
            "project": "angularTest",
            "line": 63,
            "hash": "edeb1051b61ffd174e2d966a99f42c91",
            "textRange": {
                "startLine": 63,
                "endLine": 63,
                "startOffset": 12,
                "endOffset": 14
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/services/catalog.service.ts",
                            "textRange": {
                                "startLine": 48,
                                "endLine": 48,
                                "startOffset": 12,
                                "endOffset": 14
                            },
                            "msg": "Original implementation"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Update this function so that its implementation is not identical to the one on line 48.",
            "effort": "15min",
            "debt": "15min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "confusing",
                "duplicate",
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-06-28T04:49:28+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheypb_-37Ufde_1y",
            "rule": "typescript:S1854",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/services/catalog.service.ts",
            "project": "angularTest",
            "line": 84,
            "hash": "0514b5ffc768eab024a2a38d81e048ea",
            "textRange": {
                "startLine": 84,
                "endLine": 84,
                "startOffset": 8,
                "endOffset": 12
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove this useless assignment to variable \"name\".",
            "effort": "15min",
            "debt": "15min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "cwe",
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-06-15T12:54:44+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheyNb_-37Ufde_1m",
            "rule": "typescript:S1186",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/core/services/loader.service.ts",
            "project": "angularTest",
            "line": 10,
            "hash": "16a47861159046dc7590ae9341dad244",
            "textRange": {
                "startLine": 10,
                "endLine": 10,
                "startOffset": 15,
                "endOffset": 17
            },
            "flows": [],
            "status": "OPEN",
            "message": "Unexpected empty constructor.",
            "effort": "5min",
            "debt": "5min",
            "author": "hernandez.ricardo@neoris.com",
            "tags": [
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-03T23:54:14+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFeheycb_-37Ufde_1v",
            "rule": "typescript:S107",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/services/quotation.service.ts",
            "project": "angularTest",
            "line": 30,
            "hash": "9cf7e7ab1a5bd8082a91e93f51b260b1",
            "textRange": {
                "startLine": 30,
                "endLine": 30,
                "startOffset": 1,
                "endOffset": 12
            },
            "flows": [],
            "status": "OPEN",
            "message": "Constructor has too many parameters (8). Maximum allowed is 7.",
            "effort": "20min",
            "debt": "20min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-05T19:29:18+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe4Db_-37Ufde_3A",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/core/util/controls-utils.ts",
            "project": "angularTest",
            "line": 1,
            "hash": "36b327a2d4c83d0cee5e63b0da3df1fb",
            "textRange": {
                "startLine": 1,
                "endLine": 1,
                "startOffset": 57,
                "endOffset": 59
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 18,
                                "endLine": 18,
                                "startOffset": 1,
                                "endOffset": 3
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 34,
                                "endLine": 34,
                                "startOffset": 1,
                                "endOffset": 3
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 34,
                                "endLine": 34,
                                "startOffset": 67,
                                "endOffset": 69
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 35,
                                "endLine": 35,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/controls-utils.ts",
                            "textRange": {
                                "startLine": 35,
                                "endLine": 35,
                                "startOffset": 26,
                                "endOffset": 28
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed.",
            "effort": "12min",
            "debt": "12min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-02-08T22:15:18+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe4Db_-37Ufde_3C",
            "rule": "typescript:S6325",
            "severity": "MINOR",
            "component": "angularTest:src/app/core/util/controls-utils.ts",
            "project": "angularTest",
            "line": 32,
            "hash": "31c863dfa174fc7a8bb357ce087a6832",
            "textRange": {
                "startLine": 32,
                "endLine": 32,
                "startOffset": 9,
                "endOffset": 25
            },
            "flows": [],
            "status": "OPEN",
            "message": "Use a regular expression literal instead of the 'RegExp' constructor.",
            "effort": "1min",
            "debt": "1min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "regex"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-21T04:21:22+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehe3eb_-37Ufde_2y",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/core/util/filter.ts",
            "project": "angularTest",
            "line": 4,
            "hash": "f0a51bc10dade1e9c9712646bea6de18",
            "textRange": {
                "startLine": 4,
                "endLine": 4,
                "startOffset": 88,
                "endOffset": 90
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/filter.ts",
                            "textRange": {
                                "startLine": 6,
                                "endLine": 6,
                                "startOffset": 1,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/filter.ts",
                            "textRange": {
                                "startLine": 8,
                                "endLine": 8,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/filter.ts",
                            "textRange": {
                                "startLine": 12,
                                "endLine": 12,
                                "startOffset": 3,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/filter.ts",
                            "textRange": {
                                "startLine": 16,
                                "endLine": 16,
                                "startOffset": 3,
                                "endOffset": 6
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/filter.ts",
                            "textRange": {
                                "startLine": 17,
                                "endLine": 17,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/filter.ts",
                            "textRange": {
                                "startLine": 23,
                                "endLine": 23,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/filter.ts",
                            "textRange": {
                                "startLine": 24,
                                "endLine": 24,
                                "startOffset": 4,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/filter.ts",
                            "textRange": {
                                "startLine": 26,
                                "endLine": 26,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed.",
            "effort": "8min",
            "debt": "8min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-20T22:57:33+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe3mb_-37Ufde_20",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/core/util/focus-control.ts",
            "project": "angularTest",
            "line": 3,
            "hash": "9430b43df138595b605ce01b2d107f67",
            "textRange": {
                "startLine": 3,
                "endLine": 3,
                "startOffset": 97,
                "endOffset": 99
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 15,
                                "endLine": 15,
                                "startOffset": 1,
                                "endOffset": 3
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 15,
                                "endLine": 15,
                                "startOffset": 18,
                                "endOffset": 20
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 6,
                                "endLine": 6,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 7,
                                "endLine": 7,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 18,
                                "endLine": 18,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 18,
                                "endLine": 18,
                                "startOffset": 23,
                                "endOffset": 25
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 20,
                                "endLine": 20,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 24,
                                "endLine": 24,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed.",
            "effort": "9min",
            "debt": "9min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-03-30T00:38:30+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe3mb_-37Ufde_21",
            "rule": "typescript:S4144",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/util/focus-control.ts",
            "project": "angularTest",
            "line": 35,
            "hash": "f315e63f83d1235e27874f24c5d4c639",
            "textRange": {
                "startLine": 35,
                "endLine": 35,
                "startOffset": 29,
                "endOffset": 31
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 5,
                                "endLine": 5,
                                "startOffset": 47,
                                "endOffset": 49
                            },
                            "msg": "Original implementation"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Update this function so that its implementation is not identical to the one on line 5.",
            "effort": "15min",
            "debt": "15min",
            "author": "joseph.aramburo@chubb.com",
            "tags": [
                "confusing",
                "duplicate",
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-12-06T14:38:37+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe3mb_-37Ufde_22",
            "rule": "typescript:S4144",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/util/focus-control.ts",
            "project": "angularTest",
            "line": 59,
            "hash": "e1f09a9e85fd135f056dd6c054f5b8bd",
            "textRange": {
                "startLine": 59,
                "endLine": 59,
                "startOffset": 105,
                "endOffset": 107
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 33,
                                "endLine": 33,
                                "startOffset": 111,
                                "endOffset": 113
                            },
                            "msg": "Original implementation"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Update this function so that its implementation is not identical to the one on line 33.",
            "effort": "15min",
            "debt": "15min",
            "author": "joseph.aramburo@chubb.com",
            "tags": [
                "confusing",
                "duplicate",
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-12-06T14:38:37+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe3mb_-37Ufde_23",
            "rule": "typescript:S4144",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/util/focus-control.ts",
            "project": "angularTest",
            "line": 61,
            "hash": "f315e63f83d1235e27874f24c5d4c639",
            "textRange": {
                "startLine": 61,
                "endLine": 61,
                "startOffset": 29,
                "endOffset": 31
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 5,
                                "endLine": 5,
                                "startOffset": 47,
                                "endOffset": 49
                            },
                            "msg": "Original implementation"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Update this function so that its implementation is not identical to the one on line 5.",
            "effort": "15min",
            "debt": "15min",
            "author": "joseph.aramburo@josepharamburo",
            "tags": [
                "confusing",
                "duplicate",
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-11-04T15:12:19+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe3mb_-37Ufde_24",
            "rule": "typescript:S4144",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/util/focus-control.ts",
            "project": "angularTest",
            "line": 73,
            "hash": "6046477b71cca2a00f04a4276e6f64f6",
            "textRange": {
                "startLine": 73,
                "endLine": 73,
                "startOffset": 33,
                "endOffset": 35
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 47,
                                "endLine": 47,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "Original implementation"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Update this function so that its implementation is not identical to the one on line 47.",
            "effort": "15min",
            "debt": "15min",
            "author": "joseph.aramburo@josepharamburo",
            "tags": [
                "confusing",
                "duplicate",
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-11-04T15:12:19+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe3mb_-37Ufde_25",
            "rule": "typescript:S4144",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/util/focus-control.ts",
            "project": "angularTest",
            "line": 103,
            "hash": "6046477b71cca2a00f04a4276e6f64f6",
            "textRange": {
                "startLine": 103,
                "endLine": 103,
                "startOffset": 33,
                "endOffset": 35
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/focus-control.ts",
                            "textRange": {
                                "startLine": 47,
                                "endLine": 47,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "Original implementation"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Update this function so that its implementation is not identical to the one on line 47.",
            "effort": "15min",
            "debt": "15min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "confusing",
                "duplicate",
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-04-23T07:06:27+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe3zb_-37Ufde_27",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/core/util/form-utils.ts",
            "project": "angularTest",
            "line": 42,
            "hash": "3fa6889acb4c56bea663b7abe9cba6be",
            "textRange": {
                "startLine": 42,
                "endLine": 42,
                "startOffset": 167,
                "endOffset": 169
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 52,
                                "endLine": 52,
                                "startOffset": 1,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 56,
                                "endLine": 56,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 57,
                                "endLine": 57,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 61,
                                "endLine": 61,
                                "startOffset": 3,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 59,
                                "endLine": 59,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 59,
                                "endLine": 59,
                                "startOffset": 81,
                                "endOffset": 83
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 66,
                                "endLine": 66,
                                "startOffset": 4,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 67,
                                "endLine": 67,
                                "startOffset": 32,
                                "endOffset": 33
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 74,
                                "endLine": 74,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 74,
                                "endLine": 74,
                                "startOffset": 32,
                                "endOffset": 34
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 74,
                                "endLine": 74,
                                "startOffset": 32,
                                "endOffset": 34
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 75,
                                "endLine": 75,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 75,
                                "endLine": 75,
                                "startOffset": 71,
                                "endOffset": 73
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 76,
                                "endLine": 76,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 76,
                                "endLine": 76,
                                "startOffset": 57,
                                "endOffset": 59
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 81,
                                "endLine": 81,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 81,
                                "endLine": 81,
                                "startOffset": 56,
                                "endOffset": 58
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 84,
                                "endLine": 84,
                                "startOffset": 40,
                                "endOffset": 41
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 85,
                                "endLine": 85,
                                "startOffset": 63,
                                "endOffset": 65
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 88,
                                "endLine": 88,
                                "startOffset": 7,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 46,
                                "endLine": 46,
                                "startOffset": 88,
                                "endOffset": 89
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 46,
                                "endLine": 46,
                                "startOffset": 88,
                                "endOffset": 89
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 49,
                                "endLine": 49,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 49,
                                "endLine": 49,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 49,
                                "endLine": 49,
                                "startOffset": 50,
                                "endOffset": 51
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 57,
                                "endLine": 57,
                                "startOffset": 77,
                                "endOffset": 78
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 57,
                                "endLine": 57,
                                "startOffset": 77,
                                "endOffset": 78
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 57,
                                "endLine": 57,
                                "startOffset": 77,
                                "endOffset": 78
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 58,
                                "endLine": 58,
                                "startOffset": 32,
                                "endOffset": 33
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 61 to the 15 allowed.",
            "effort": "51min",
            "debt": "51min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-08-05T00:36:33+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe3zb_-37Ufde_29",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/core/util/form-utils.ts",
            "project": "angularTest",
            "line": 93,
            "hash": "702cab880f9e17cf765d2adb99213830",
            "textRange": {
                "startLine": 93,
                "endLine": 93,
                "startOffset": 66,
                "endOffset": 68
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 97,
                                "endLine": 97,
                                "startOffset": 1,
                                "endOffset": 3
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 98,
                                "endLine": 98,
                                "startOffset": 22,
                                "endOffset": 24
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 103,
                                "endLine": 103,
                                "startOffset": 6,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 104,
                                "endLine": 104,
                                "startOffset": 2,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 106,
                                "endLine": 106,
                                "startOffset": 32,
                                "endOffset": 33
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 109,
                                "endLine": 109,
                                "startOffset": 25,
                                "endOffset": 27
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 109,
                                "endLine": 109,
                                "startOffset": 58,
                                "endOffset": 60
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 113,
                                "endLine": 113,
                                "startOffset": 37,
                                "endOffset": 38
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 114,
                                "endLine": 114,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 100,
                                "endLine": 100,
                                "startOffset": 43,
                                "endOffset": 44
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 100,
                                "endLine": 100,
                                "startOffset": 43,
                                "endOffset": 44
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 100,
                                "endLine": 100,
                                "startOffset": 43,
                                "endOffset": 44
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/core/util/form-utils.ts",
                            "textRange": {
                                "startLine": 101,
                                "endLine": 101,
                                "startOffset": 29,
                                "endOffset": 30
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed.",
            "effort": "7min",
            "debt": "7min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-08-06T21:33:36+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe3Xb_-37Ufde_2x",
            "rule": "typescript:S3358",
            "severity": "MAJOR",
            "component": "angularTest:src/app/core/util/format.ts",
            "project": "angularTest",
            "line": 55,
            "hash": "7bcdf109e5ca2034653d40b3dcf500c3",
            "textRange": {
                "startLine": 55,
                "endLine": 55,
                "startOffset": 34,
                "endOffset": 68
            },
            "flows": [],
            "status": "OPEN",
            "message": "Extract this nested ternary operation into an independent statement.",
            "effort": "5min",
            "debt": "5min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "confusing"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-06-17T22:31:38+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe9zb_-37Ufde_4I",
            "rule": "typescript:S1301",
            "severity": "MINOR",
            "component": "angularTest:src/app/domain/use-cases/quotation.ts",
            "project": "angularTest",
            "line": 22,
            "hash": "2bee3be94628ab537b2f610eca8c33bd",
            "textRange": {
                "startLine": 22,
                "endLine": 22,
                "startOffset": 3,
                "endOffset": 9
            },
            "flows": [],
            "status": "OPEN",
            "message": "\"switch\" statements should have at least 3 \"case\" clauses",
            "effort": "5min",
            "debt": "5min",
            "author": "jesus.caballero@chubb.com",
            "tags": [
                "bad-practice"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-07-12T20:38:47+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe9zb_-37Ufde_4J",
            "rule": "typescript:S1301",
            "severity": "MINOR",
            "component": "angularTest:src/app/domain/use-cases/quotation.ts",
            "project": "angularTest",
            "line": 36,
            "hash": "2bee3be94628ab537b2f610eca8c33bd",
            "textRange": {
                "startLine": 36,
                "endLine": 36,
                "startOffset": 3,
                "endOffset": 9
            },
            "flows": [],
            "status": "OPEN",
            "message": "\"switch\" statements should have at least 3 \"case\" clauses",
            "effort": "5min",
            "debt": "5min",
            "author": "jesus.caballero@chubb.com",
            "tags": [
                "bad-practice"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-07-12T20:38:47+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFtoNIgb_-37UfdgbM1",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/domain/use-cases/quotation.ts",
            "project": "angularTest",
            "line": 52,
            "hash": "3ab559c5da71ea797167444c522a60d0",
            "textRange": {
                "startLine": 52,
                "endLine": 52,
                "startOffset": 34,
                "endOffset": 48
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"quotation\" or rename it to \"_quotation\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-dguerrero@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-16T17:46:11+0000",
            "updateDate": "2022-06-16T17:46:11+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFtoNIgb_-37UfdgbM3",
            "rule": "typescript:S108",
            "severity": "MAJOR",
            "component": "angularTest:src/app/domain/use-cases/quotation.ts",
            "project": "angularTest",
            "line": 54,
            "hash": "2bee3be94628ab537b2f610eca8c33bd",
            "textRange": {
                "startLine": 54,
                "endLine": 56,
                "startOffset": 2,
                "endOffset": 3
            },
            "flows": [],
            "status": "OPEN",
            "message": "Empty switch statement.",
            "effort": "5min",
            "debt": "5min",
            "author": "joseph.aramburo@chubb.com",
            "tags": [
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-16T17:46:11+0000",
            "updateDate": "2022-06-16T17:46:11+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFtoNIgb_-37UfdgbM2",
            "rule": "typescript:S1301",
            "severity": "MINOR",
            "component": "angularTest:src/app/domain/use-cases/quotation.ts",
            "project": "angularTest",
            "line": 54,
            "hash": "2bee3be94628ab537b2f610eca8c33bd",
            "textRange": {
                "startLine": 54,
                "endLine": 54,
                "startOffset": 2,
                "endOffset": 8
            },
            "flows": [],
            "status": "OPEN",
            "message": "\"switch\" statements should have at least 3 \"case\" clauses",
            "effort": "5min",
            "debt": "5min",
            "author": "e-dguerrero@neoris.com",
            "tags": [
                "bad-practice"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-16T17:46:11+0000",
            "updateDate": "2022-06-16T17:46:11+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe97b_-37Ufde_4K",
            "rule": "typescript:S1788",
            "severity": "MAJOR",
            "component": "angularTest:src/app/domain/use-cases/user.ts",
            "project": "angularTest",
            "line": 15,
            "hash": "ae15c3901ed30eba3370b687d6f6a013",
            "textRange": {
                "startLine": 15,
                "endLine": 15,
                "startOffset": 14,
                "endOffset": 30
            },
            "flows": [],
            "status": "OPEN",
            "message": "Default parameters should be last.",
            "effort": "20min",
            "debt": "20min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "es2015"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-04-30T03:29:41+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe97b_-37Ufde_4M",
            "rule": "typescript:S1788",
            "severity": "MAJOR",
            "component": "angularTest:src/app/domain/use-cases/user.ts",
            "project": "angularTest",
            "line": 22,
            "hash": "8df99ba3d52db9700eba4d1d8a91424b",
            "textRange": {
                "startLine": 22,
                "endLine": 22,
                "startOffset": 14,
                "endOffset": 30
            },
            "flows": [],
            "status": "OPEN",
            "message": "Default parameters should be last.",
            "effort": "20min",
            "debt": "20min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "es2015"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-04-30T03:29:41+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFp-Rdgb_-37UfdgGVa",
            "rule": "typescript:S1788",
            "severity": "MAJOR",
            "component": "angularTest:src/app/domain/use-cases/user.ts",
            "project": "angularTest",
            "line": 41,
            "hash": "a9b875d1c91ca081bb0543983d7c4091",
            "textRange": {
                "startLine": 41,
                "endLine": 41,
                "startOffset": 18,
                "endOffset": 34
            },
            "flows": [],
            "status": "OPEN",
            "message": "Default parameters should be last.",
            "effort": "20min",
            "debt": "20min",
            "author": "jose.cruzh@neoris.com",
            "tags": [
                "es2015"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-16T00:43:42+0000",
            "updateDate": "2022-06-16T17:10:22+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehfAtb_-37Ufde_41",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
            "project": "angularTest",
            "line": 26,
            "hash": "191b5076864ea190eec0ab0c707c1c62",
            "textRange": {
                "startLine": 26,
                "endLine": 26,
                "startOffset": 1,
                "endOffset": 10
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 28,
                                "endLine": 28,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 73,
                                "endLine": 73,
                                "startOffset": 4,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 28,
                                "endLine": 28,
                                "startOffset": 83,
                                "endOffset": 85
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 31,
                                "endLine": 31,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 31,
                                "endLine": 31,
                                "startOffset": 98,
                                "endOffset": 100
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 33,
                                "endLine": 33,
                                "startOffset": 93,
                                "endOffset": 95
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 34,
                                "endLine": 34,
                                "startOffset": 101,
                                "endOffset": 103
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 35,
                                "endLine": 35,
                                "startOffset": 71,
                                "endOffset": 73
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 37,
                                "endLine": 37,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 37,
                                "endLine": 37,
                                "startOffset": 21,
                                "endOffset": 23
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 42,
                                "endLine": 42,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 42,
                                "endLine": 42,
                                "startOffset": 21,
                                "endOffset": 23
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 49,
                                "endLine": 49,
                                "startOffset": 49,
                                "endOffset": 51
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 58,
                                "endLine": 58,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/api.interceptor.ts",
                            "textRange": {
                                "startLine": 60,
                                "endLine": 60,
                                "startOffset": 50,
                                "endOffset": 52
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed.",
            "effort": "11min",
            "debt": "11min",
            "author": "joseph.aramburo@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-04-18T23:41:01+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehfADb_-37Ufde_4s",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
            "project": "angularTest",
            "line": 24,
            "hash": "4003c121df96367e74b75c19de652dd2",
            "textRange": {
                "startLine": 24,
                "endLine": 24,
                "startOffset": 20,
                "endOffset": 22
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 25,
                                "endLine": 25,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 28,
                                "endLine": 28,
                                "startOffset": 6,
                                "endOffset": 10
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 30,
                                "endLine": 30,
                                "startOffset": 46,
                                "endOffset": 47
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 34,
                                "endLine": 34,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 52,
                                "endLine": 52,
                                "startOffset": 7,
                                "endOffset": 11
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 35,
                                "endLine": 35,
                                "startOffset": 6,
                                "endOffset": 8
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 38,
                                "endLine": 38,
                                "startOffset": 8,
                                "endOffset": 12
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 35,
                                "endLine": 35,
                                "startOffset": 29,
                                "endOffset": 31
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 36,
                                "endLine": 36,
                                "startOffset": 7,
                                "endOffset": 9
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 36,
                                "endLine": 36,
                                "startOffset": 58,
                                "endOffset": 60
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 39,
                                "endLine": 39,
                                "startOffset": 7,
                                "endOffset": 13
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 41,
                                "endLine": 41,
                                "startOffset": 48,
                                "endOffset": 50
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
                            "textRange": {
                                "startLine": 45,
                                "endLine": 45,
                                "startOffset": 48,
                                "endOffset": 50
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed.",
            "effort": "13min",
            "debt": "13min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-05-18T18:31:43+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehfAmb_-37Ufde_4w",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
            "project": "angularTest",
            "line": 43,
            "hash": "0830997ddf72fb215261ab6c1cd35770",
            "textRange": {
                "startLine": 43,
                "endLine": 43,
                "startOffset": 1,
                "endOffset": 15
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 45,
                                "endLine": 45,
                                "startOffset": 22,
                                "endOffset": 24
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 46,
                                "endLine": 46,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 47,
                                "endLine": 47,
                                "startOffset": 30,
                                "endOffset": 32
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 48,
                                "endLine": 48,
                                "startOffset": 22,
                                "endOffset": 24
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 49,
                                "endLine": 49,
                                "startOffset": 28,
                                "endOffset": 30
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 51,
                                "endLine": 51,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 52,
                                "endLine": 52,
                                "startOffset": 49,
                                "endOffset": 51
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 53,
                                "endLine": 53,
                                "startOffset": 51,
                                "endOffset": 53
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 54,
                                "endLine": 54,
                                "startOffset": 39,
                                "endOffset": 41
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 55,
                                "endLine": 55,
                                "startOffset": 29,
                                "endOffset": 31
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 56,
                                "endLine": 56,
                                "startOffset": 41,
                                "endOffset": 43
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 57,
                                "endLine": 57,
                                "startOffset": 29,
                                "endOffset": 31
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 58,
                                "endLine": 58,
                                "startOffset": 39,
                                "endOffset": 41
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 59,
                                "endLine": 59,
                                "startOffset": 23,
                                "endOffset": 25
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 60,
                                "endLine": 60,
                                "startOffset": 41,
                                "endOffset": 43
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 61,
                                "endLine": 61,
                                "startOffset": 21,
                                "endOffset": 23
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 63,
                                "endLine": 63,
                                "startOffset": 28,
                                "endOffset": 30
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 64,
                                "endLine": 64,
                                "startOffset": 38,
                                "endOffset": 40
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 65,
                                "endLine": 65,
                                "startOffset": 26,
                                "endOffset": 28
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 66,
                                "endLine": 66,
                                "startOffset": 26,
                                "endOffset": 28
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 67,
                                "endLine": 67,
                                "startOffset": 20,
                                "endOffset": 22
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 68,
                                "endLine": 68,
                                "startOffset": 32,
                                "endOffset": 34
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 69,
                                "endLine": 69,
                                "startOffset": 20,
                                "endOffset": 22
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 70,
                                "endLine": 70,
                                "startOffset": 28,
                                "endOffset": 30
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 71,
                                "endLine": 71,
                                "startOffset": 26,
                                "endOffset": 28
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 72,
                                "endLine": 72,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 73,
                                "endLine": 73,
                                "startOffset": 28,
                                "endOffset": 30
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 74,
                                "endLine": 74,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 75,
                                "endLine": 75,
                                "startOffset": 32,
                                "endOffset": 34
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 76,
                                "endLine": 76,
                                "startOffset": 38,
                                "endOffset": 40
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 77,
                                "endLine": 77,
                                "startOffset": 28,
                                "endOffset": 30
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 78,
                                "endLine": 78,
                                "startOffset": 24,
                                "endOffset": 26
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 79,
                                "endLine": 79,
                                "startOffset": 50,
                                "endOffset": 52
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 80,
                                "endLine": 80,
                                "startOffset": 44,
                                "endOffset": 46
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 84,
                                "endLine": 84,
                                "startOffset": 6,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 88,
                                "endLine": 88,
                                "startOffset": 6,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 97,
                                "endLine": 97,
                                "startOffset": 31,
                                "endOffset": 32
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 99,
                                "endLine": 99,
                                "startOffset": 36,
                                "endOffset": 38
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 100,
                                "endLine": 100,
                                "startOffset": 20,
                                "endOffset": 22
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 101,
                                "endLine": 101,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 102,
                                "endLine": 102,
                                "startOffset": 44,
                                "endOffset": 46
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 104,
                                "endLine": 104,
                                "startOffset": 31,
                                "endOffset": 33
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 105,
                                "endLine": 105,
                                "startOffset": 17,
                                "endOffset": 18
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 107,
                                "endLine": 107,
                                "startOffset": 5,
                                "endOffset": 6
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 110,
                                "endLine": 110,
                                "startOffset": 31,
                                "endOffset": 32
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 111,
                                "endLine": 111,
                                "startOffset": 41,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 113,
                                "endLine": 113,
                                "startOffset": 32,
                                "endOffset": 33
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 114,
                                "endLine": 114,
                                "startOffset": 57,
                                "endOffset": 59
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 115,
                                "endLine": 115,
                                "startOffset": 39,
                                "endOffset": 41
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 117,
                                "endLine": 117,
                                "startOffset": 28,
                                "endOffset": 30
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 118,
                                "endLine": 118,
                                "startOffset": 26,
                                "endOffset": 28
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 119,
                                "endLine": 119,
                                "startOffset": 38,
                                "endOffset": 40
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 120,
                                "endLine": 120,
                                "startOffset": 66,
                                "endOffset": 68
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 121,
                                "endLine": 121,
                                "startOffset": 42,
                                "endOffset": 44
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 122,
                                "endLine": 122,
                                "startOffset": 60,
                                "endOffset": 62
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 125,
                                "endLine": 125,
                                "startOffset": 5,
                                "endOffset": 6
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 129,
                                "endLine": 129,
                                "startOffset": 5,
                                "endOffset": 6
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 132,
                                "endLine": 132,
                                "startOffset": 43,
                                "endOffset": 45
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 133,
                                "endLine": 133,
                                "startOffset": 57,
                                "endOffset": 59
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 134,
                                "endLine": 134,
                                "startOffset": 53,
                                "endOffset": 55
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 135,
                                "endLine": 135,
                                "startOffset": 45,
                                "endOffset": 47
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 136,
                                "endLine": 136,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 137,
                                "endLine": 137,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 138,
                                "endLine": 138,
                                "startOffset": 51,
                                "endOffset": 53
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 139,
                                "endLine": 139,
                                "startOffset": 37,
                                "endOffset": 39
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 140,
                                "endLine": 140,
                                "startOffset": 43,
                                "endOffset": 45
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 141,
                                "endLine": 141,
                                "startOffset": 53,
                                "endOffset": 55
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 142,
                                "endLine": 142,
                                "startOffset": 23,
                                "endOffset": 25
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 143,
                                "endLine": 143,
                                "startOffset": 27,
                                "endOffset": 29
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 145,
                                "endLine": 145,
                                "startOffset": 32,
                                "endOffset": 33
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 146,
                                "endLine": 146,
                                "startOffset": 39,
                                "endOffset": 41
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 149,
                                "endLine": 149,
                                "startOffset": 31,
                                "endOffset": 33
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 150,
                                "endLine": 150,
                                "startOffset": 37,
                                "endOffset": 39
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 151,
                                "endLine": 151,
                                "startOffset": 21,
                                "endOffset": 23
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 152,
                                "endLine": 152,
                                "startOffset": 29,
                                "endOffset": 31
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 153,
                                "endLine": 153,
                                "startOffset": 41,
                                "endOffset": 43
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 156,
                                "endLine": 156,
                                "startOffset": 49,
                                "endOffset": 51
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 157,
                                "endLine": 157,
                                "startOffset": 49,
                                "endOffset": 51
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 158,
                                "endLine": 158,
                                "startOffset": 27,
                                "endOffset": 29
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 159,
                                "endLine": 159,
                                "startOffset": 49,
                                "endOffset": 51
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 160,
                                "endLine": 160,
                                "startOffset": 51,
                                "endOffset": 53
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 162,
                                "endLine": 162,
                                "startOffset": 43,
                                "endOffset": 44
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 165,
                                "endLine": 165,
                                "startOffset": 31,
                                "endOffset": 32
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 167,
                                "endLine": 167,
                                "startOffset": 31,
                                "endOffset": 32
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 84 to the 15 allowed.",
            "effort": "1h14min",
            "debt": "1h14min",
            "author": "jose.cruz5@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-05-24T00:13:04+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehfAmb_-37Ufde_4x",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
            "project": "angularTest",
            "line": 191,
            "hash": "817bcf97c9e4e28e05e2eee3c1e91588",
            "textRange": {
                "startLine": 191,
                "endLine": 191,
                "startOffset": 1,
                "endOffset": 10
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 194,
                                "endLine": 194,
                                "startOffset": 48,
                                "endOffset": 50
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 197,
                                "endLine": 197,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 198,
                                "endLine": 198,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 201,
                                "endLine": 201,
                                "startOffset": 6,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 205,
                                "endLine": 205,
                                "startOffset": 6,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 209,
                                "endLine": 209,
                                "startOffset": 36,
                                "endOffset": 38
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 210,
                                "endLine": 210,
                                "startOffset": 48,
                                "endOffset": 50
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 211,
                                "endLine": 211,
                                "startOffset": 42,
                                "endOffset": 44
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 212,
                                "endLine": 212,
                                "startOffset": 42,
                                "endOffset": 44
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 213,
                                "endLine": 213,
                                "startOffset": 42,
                                "endOffset": 44
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 214,
                                "endLine": 214,
                                "startOffset": 38,
                                "endOffset": 40
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 219,
                                "endLine": 219,
                                "startOffset": 6,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 223,
                                "endLine": 223,
                                "startOffset": 6,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 227,
                                "endLine": 227,
                                "startOffset": 6,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 230,
                                "endLine": 230,
                                "startOffset": 57,
                                "endOffset": 59
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 231,
                                "endLine": 231,
                                "startOffset": 66,
                                "endOffset": 68
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 232,
                                "endLine": 232,
                                "startOffset": 48,
                                "endOffset": 50
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 233,
                                "endLine": 233,
                                "startOffset": 78,
                                "endOffset": 80
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 236,
                                "endLine": 236,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 237,
                                "endLine": 237,
                                "startOffset": 48,
                                "endOffset": 50
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 238,
                                "endLine": 238,
                                "startOffset": 56,
                                "endOffset": 58
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 239,
                                "endLine": 239,
                                "startOffset": 56,
                                "endOffset": 58
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 240,
                                "endLine": 240,
                                "startOffset": 62,
                                "endOffset": 64
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 241,
                                "endLine": 241,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 242,
                                "endLine": 242,
                                "startOffset": 60,
                                "endOffset": 62
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 243,
                                "endLine": 243,
                                "startOffset": 26,
                                "endOffset": 28
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 246,
                                "endLine": 246,
                                "startOffset": 50,
                                "endOffset": 52
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 247,
                                "endLine": 247,
                                "startOffset": 44,
                                "endOffset": 46
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 248,
                                "endLine": 248,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 249,
                                "endLine": 249,
                                "startOffset": 60,
                                "endOffset": 62
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 250,
                                "endLine": 250,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 251,
                                "endLine": 251,
                                "startOffset": 44,
                                "endOffset": 46
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 252,
                                "endLine": 252,
                                "startOffset": 36,
                                "endOffset": 38
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 253,
                                "endLine": 253,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 254,
                                "endLine": 254,
                                "startOffset": 42,
                                "endOffset": 44
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 257,
                                "endLine": 257,
                                "startOffset": 46,
                                "endOffset": 48
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 258,
                                "endLine": 258,
                                "startOffset": 58,
                                "endOffset": 60
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 259,
                                "endLine": 259,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 260,
                                "endLine": 260,
                                "startOffset": 40,
                                "endOffset": 42
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 261,
                                "endLine": 261,
                                "startOffset": 56,
                                "endOffset": 58
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 262,
                                "endLine": 262,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 263,
                                "endLine": 263,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 264,
                                "endLine": 264,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 265,
                                "endLine": 265,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 266,
                                "endLine": 266,
                                "startOffset": 34,
                                "endOffset": 36
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 267,
                                "endLine": 267,
                                "startOffset": 56,
                                "endOffset": 58
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 268,
                                "endLine": 268,
                                "startOffset": 56,
                                "endOffset": 58
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 269,
                                "endLine": 269,
                                "startOffset": 56,
                                "endOffset": 58
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 270,
                                "endLine": 270,
                                "startOffset": 56,
                                "endOffset": 58
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 271,
                                "endLine": 271,
                                "startOffset": 56,
                                "endOffset": 58
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 272,
                                "endLine": 272,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 273,
                                "endLine": 273,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 274,
                                "endLine": 274,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 275,
                                "endLine": 275,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 276,
                                "endLine": 276,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 277,
                                "endLine": 277,
                                "startOffset": 46,
                                "endOffset": 48
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 278,
                                "endLine": 278,
                                "startOffset": 52,
                                "endOffset": 54
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 279,
                                "endLine": 279,
                                "startOffset": 46,
                                "endOffset": 48
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
                            "textRange": {
                                "startLine": 280,
                                "endLine": 280,
                                "startOffset": 54,
                                "endOffset": 56
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 59 to the 15 allowed.",
            "effort": "49min",
            "debt": "49min",
            "author": "jose.cruz5@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-05-24T00:13:04+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehfAPb_-37Ufde_4v",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
            "project": "angularTest",
            "line": 20,
            "hash": "a98dcd0ab4b7b0240351b73272f9dc2b",
            "textRange": {
                "startLine": 20,
                "endLine": 20,
                "startOffset": 1,
                "endOffset": 6
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
                            "textRange": {
                                "startLine": 23,
                                "endLine": 23,
                                "startOffset": 2,
                                "endOffset": 5
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
                            "textRange": {
                                "startLine": 24,
                                "endLine": 24,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
                            "textRange": {
                                "startLine": 27,
                                "endLine": 27,
                                "startOffset": 29,
                                "endOffset": 31
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
                            "textRange": {
                                "startLine": 28,
                                "endLine": 28,
                                "startOffset": 37,
                                "endOffset": 39
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
                            "textRange": {
                                "startLine": 29,
                                "endLine": 29,
                                "startOffset": 30,
                                "endOffset": 32
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
                            "textRange": {
                                "startLine": 33,
                                "endLine": 33,
                                "startOffset": 10,
                                "endOffset": 12
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
                            "textRange": {
                                "startLine": 36,
                                "endLine": 36,
                                "startOffset": 38,
                                "endOffset": 39
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
                            "textRange": {
                                "startLine": 37,
                                "endLine": 37,
                                "startOffset": 44,
                                "endOffset": 45
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
                            "textRange": {
                                "startLine": 38,
                                "endLine": 38,
                                "startOffset": 46,
                                "endOffset": 47
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed.",
            "effort": "6min",
            "debt": "6min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-11T01:33:01+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe_Pb_-37Ufde_4d",
            "rule": "typescript:S4624",
            "severity": "MAJOR",
            "component": "angularTest:src/app/infrastructure/repositories/api/api-repository.ts",
            "project": "angularTest",
            "line": 24,
            "hash": "9d36aabd7ef9a03e9c7ded56d1540814",
            "textRange": {
                "startLine": 24,
                "endLine": 24,
                "startOffset": 42,
                "endOffset": 50
            },
            "flows": [],
            "status": "OPEN",
            "message": "Refactor this code to not use nested template literals.",
            "effort": "10min",
            "debt": "10min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "brain-overload",
                "confusing"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-03-17T22:40:29+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehe_Pb_-37Ufde_4e",
            "rule": "typescript:S3358",
            "severity": "MAJOR",
            "component": "angularTest:src/app/infrastructure/repositories/api/api-repository.ts",
            "project": "angularTest",
            "line": 31,
            "hash": "f1c31f7b126d2b8fa51a5f64db4883bc",
            "textRange": {
                "startLine": 31,
                "endLine": 33,
                "startOffset": 9,
                "endOffset": 40
            },
            "flows": [],
            "status": "OPEN",
            "message": "Extract this nested ternary operation into an independent statement.",
            "effort": "5min",
            "debt": "5min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "confusing"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-04-30T03:29:41+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehfBQb_-37Ufde_5I",
            "rule": "typescript:S107",
            "severity": "MAJOR",
            "component": "angularTest:src/app/layout/header/header.component.ts",
            "project": "angularTest",
            "line": 37,
            "hash": "9cf7e7ab1a5bd8082a91e93f51b260b1",
            "textRange": {
                "startLine": 37,
                "endLine": 37,
                "startOffset": 1,
                "endOffset": 12
            },
            "flows": [],
            "status": "OPEN",
            "message": "Constructor has too many parameters (11). Maximum allowed is 7.",
            "effort": "20min",
            "debt": "20min",
            "author": "hernandez.ricardo@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-04-29T23:36:25+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehfBIb_-37Ufde_5E",
            "rule": "typescript:S1186",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/layout/sidebar/sidebar.component.ts",
            "project": "angularTest",
            "line": 97,
            "hash": "16a47861159046dc7590ae9341dad244",
            "textRange": {
                "startLine": 97,
                "endLine": 97,
                "startOffset": 15,
                "endOffset": 17
            },
            "flows": [],
            "status": "OPEN",
            "message": "Unexpected empty constructor.",
            "effort": "5min",
            "debt": "5min",
            "author": "hernandez.ricardo@neoris.com",
            "tags": [
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-04-16T18:24:04+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehemsb_-37Ufde_yb",
            "rule": "typescript:S107",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
            "project": "angularTest",
            "line": 59,
            "hash": "9cf7e7ab1a5bd8082a91e93f51b260b1",
            "textRange": {
                "startLine": 59,
                "endLine": 59,
                "startOffset": 1,
                "endOffset": 12
            },
            "flows": [],
            "status": "OPEN",
            "message": "Constructor has too many parameters (8). Maximum allowed is 7.",
            "effort": "20min",
            "debt": "20min",
            "author": "jesus.caballero@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-03-26T18:55:57+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemsb_-37Ufde_yd",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
            "project": "angularTest",
            "line": 249,
            "hash": "f242c94b57744999567b98146914c245",
            "textRange": {
                "startLine": 249,
                "endLine": 249,
                "startOffset": 1,
                "endOffset": 27
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 250,
                                "endLine": 250,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 257,
                                "endLine": 257,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 265,
                                "endLine": 265,
                                "startOffset": 4,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 272,
                                "endLine": 272,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 280,
                                "endLine": 280,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 272,
                                "endLine": 272,
                                "startOffset": 36,
                                "endOffset": 38
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 275,
                                "endLine": 275,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 277,
                                "endLine": 277,
                                "startOffset": 6,
                                "endOffset": 10
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 281,
                                "endLine": 281,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 283,
                                "endLine": 283,
                                "startOffset": 6,
                                "endOffset": 10
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 284,
                                "endLine": 284,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed.",
            "effort": "9min",
            "debt": "9min",
            "author": "susana.vega@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-12-01T20:18:38+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemsb_-37Ufde_ye",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
            "project": "angularTest",
            "line": 308,
            "hash": "13c9d69dd445ce8de1cf7f6e6f73467b",
            "textRange": {
                "startLine": 308,
                "endLine": 308,
                "startOffset": 1,
                "endOffset": 21
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 310,
                                "endLine": 310,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 312,
                                "endLine": 312,
                                "startOffset": 9,
                                "endOffset": 11
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 326,
                                "endLine": 326,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 331,
                                "endLine": 331,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 331,
                                "endLine": 331,
                                "startOffset": 57,
                                "endOffset": 59
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 333,
                                "endLine": 333,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 335,
                                "endLine": 335,
                                "startOffset": 7,
                                "endOffset": 11
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 342,
                                "endLine": 342,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 342,
                                "endLine": 342,
                                "startOffset": 29,
                                "endOffset": 31
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 316,
                                "endLine": 316,
                                "startOffset": 5,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 353,
                                "endLine": 353,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 353,
                                "endLine": 353,
                                "startOffset": 21,
                                "endOffset": 23
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 356,
                                "endLine": 356,
                                "startOffset": 8,
                                "endOffset": 9
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed.",
            "effort": "17min",
            "debt": "17min",
            "author": "susana.vega@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-12-02T20:30:55+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemsb_-37Ufde_yf",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
            "project": "angularTest",
            "line": 368,
            "hash": "577cdb8bfa872742d1721a2071a9b05f",
            "textRange": {
                "startLine": 368,
                "endLine": 368,
                "startOffset": 1,
                "endOffset": 35
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 369,
                                "endLine": 369,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 370,
                                "endLine": 370,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 390,
                                "endLine": 390,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 374,
                                "endLine": 374,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 374,
                                "endLine": 374,
                                "startOffset": 16,
                                "endOffset": 18
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 383,
                                "endLine": 383,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 379,
                                "endLine": 379,
                                "startOffset": 31,
                                "endOffset": 32
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 394,
                                "endLine": 394,
                                "startOffset": 30,
                                "endOffset": 31
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed.",
            "effort": "11min",
            "debt": "11min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-25T14:37:58+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemsb_-37Ufde_yg",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
            "project": "angularTest",
            "line": 401,
            "hash": "b2fb1d99dda98b7e77e405290a8fe65f",
            "textRange": {
                "startLine": 401,
                "endLine": 401,
                "startOffset": 1,
                "endOffset": 30
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 407,
                                "endLine": 407,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 408,
                                "endLine": 408,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 439,
                                "endLine": 439,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 409,
                                "endLine": 409,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 409,
                                "endLine": 409,
                                "startOffset": 26,
                                "endOffset": 28
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 411,
                                "endLine": 411,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 411,
                                "endLine": 411,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 416,
                                "endLine": 416,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 423,
                                "endLine": 423,
                                "startOffset": 6,
                                "endOffset": 8
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 423,
                                "endLine": 423,
                                "startOffset": 32,
                                "endOffset": 34
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 433,
                                "endLine": 433,
                                "startOffset": 9,
                                "endOffset": 10
                            },
                            "msg": "+6 (incl. 5 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 441,
                                "endLine": 441,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
                            "textRange": {
                                "startLine": 442,
                                "endLine": 442,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed.",
            "effort": "20min",
            "debt": "20min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-25T14:37:58+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemXb_-37Ufde_yW",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
            "project": "angularTest",
            "line": 34,
            "hash": "98d99c2fafbffd35d47706bbeddadeb8",
            "textRange": {
                "startLine": 34,
                "endLine": 34,
                "startOffset": 22,
                "endOffset": 24
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
                            "textRange": {
                                "startLine": 37,
                                "endLine": 37,
                                "startOffset": 6,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
                            "textRange": {
                                "startLine": 38,
                                "endLine": 38,
                                "startOffset": 7,
                                "endOffset": 10
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
                            "textRange": {
                                "startLine": 40,
                                "endLine": 40,
                                "startOffset": 8,
                                "endOffset": 10
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
                            "textRange": {
                                "startLine": 41,
                                "endLine": 41,
                                "startOffset": 9,
                                "endOffset": 11
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
                            "textRange": {
                                "startLine": 41,
                                "endLine": 41,
                                "startOffset": 53,
                                "endOffset": 55
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
                            "textRange": {
                                "startLine": 43,
                                "endLine": 43,
                                "startOffset": 16,
                                "endOffset": 18
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
                            "textRange": {
                                "startLine": 43,
                                "endLine": 43,
                                "startOffset": 39,
                                "endOffset": 41
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
                            "textRange": {
                                "startLine": 49,
                                "endLine": 49,
                                "startOffset": 8,
                                "endOffset": 10
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
                            "textRange": {
                                "startLine": 54,
                                "endLine": 54,
                                "startOffset": 7,
                                "endOffset": 12
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed.",
            "effort": "7min",
            "debt": "7min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-01-20T17:57:43+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemXb_-37Ufde_yX",
            "rule": "typescript:S4138",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
            "project": "angularTest",
            "line": 38,
            "hash": "ff5a83a2961d95e3ff14c3ae9daccfc1",
            "textRange": {
                "startLine": 38,
                "endLine": 52,
                "startOffset": 7,
                "endOffset": 8
            },
            "flows": [],
            "status": "OPEN",
            "message": "Expected a `for-of` loop instead of a `for` loop with this simple iteration.",
            "effort": "5min",
            "debt": "5min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-01-20T17:57:43+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehemXb_-37Ufde_yY",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
            "project": "angularTest",
            "line": 63,
            "hash": "036be73796ce4361279703913fc2fa3d",
            "textRange": {
                "startLine": 63,
                "endLine": 63,
                "startOffset": 43,
                "endOffset": 47
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"lang\" or rename it to \"_lang\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-01-20T16:53:20+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehemXb_-37Ufde_yZ",
            "rule": "typescript:S4138",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
            "project": "angularTest",
            "line": 65,
            "hash": "ff5a83a2961d95e3ff14c3ae9daccfc1",
            "textRange": {
                "startLine": 65,
                "endLine": 74,
                "startOffset": 4,
                "endOffset": 5
            },
            "flows": [],
            "status": "OPEN",
            "message": "Expected a `for-of` loop instead of a `for` loop with this simple iteration.",
            "effort": "5min",
            "debt": "5min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-01-20T16:53:20+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehenDb_-37Ufde_yn",
            "rule": "typescript:S107",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/naic-lob-risk-type/naic-lob-risk-type.component.ts",
            "project": "angularTest",
            "line": 76,
            "hash": "9cf7e7ab1a5bd8082a91e93f51b260b1",
            "textRange": {
                "startLine": 76,
                "endLine": 76,
                "startOffset": 2,
                "endOffset": 13
            },
            "flows": [],
            "status": "OPEN",
            "message": "Constructor has too many parameters (11). Maximum allowed is 7.",
            "effort": "20min",
            "debt": "20min",
            "author": "jose.cruzh@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-01-14T07:29:46+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehenDb_-37Ufde_yo",
            "rule": "typescript:S3358",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/naic-lob-risk-type/naic-lob-risk-type.component.ts",
            "project": "angularTest",
            "line": 136,
            "hash": "cfb9bb0126c813bfc952559fb3e9b5a4",
            "textRange": {
                "startLine": 136,
                "endLine": 136,
                "startOffset": 40,
                "endOffset": 65
            },
            "flows": [],
            "status": "OPEN",
            "message": "Extract this nested ternary operation into an independent statement.",
            "effort": "5min",
            "debt": "5min",
            "author": "jose.cruzh@neoris.com",
            "tags": [
                "confusing"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-01-19T02:04:36+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehenDb_-37Ufde_yp",
            "rule": "typescript:S3358",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/naic-lob-risk-type/naic-lob-risk-type.component.ts",
            "project": "angularTest",
            "line": 140,
            "hash": "7055de4896edcdd7df19e2ba6d3eecb4",
            "textRange": {
                "startLine": 140,
                "endLine": 140,
                "startOffset": 40,
                "endOffset": 65
            },
            "flows": [],
            "status": "OPEN",
            "message": "Extract this nested ternary operation into an independent statement.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-lajara@neoris.com",
            "tags": [
                "confusing"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-01-26T00:17:16+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehenDb_-37Ufde_yr",
            "rule": "typescript:S4043",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/naic-lob-risk-type/naic-lob-risk-type.component.ts",
            "project": "angularTest",
            "line": 210,
            "hash": "cf94353c92ef62c07f1ad82e67690387",
            "textRange": {
                "startLine": 210,
                "endLine": 210,
                "startOffset": 23,
                "endOffset": 56
            },
            "flows": [],
            "status": "OPEN",
            "message": "Move this array \"sort\" operation to a separate statement.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-lajara@neoris.com",
            "tags": [],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-01-26T00:17:16+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemCb_-37Ufde_xz",
            "rule": "typescript:S101",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 53,
            "hash": "146c2e0f8dfffe4c029d1b8ae28fe578",
            "textRange": {
                "startLine": 53,
                "endLine": 53,
                "startOffset": 17,
                "endOffset": 43
            },
            "flows": [],
            "status": "OPEN",
            "message": "Rename interface \"selectedCoveragesInterface\" to match the regular expression ^[A-Z][a-zA-Z0-9]*$.",
            "effort": "5min",
            "debt": "5min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "convention"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-25T14:44:34+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemCb_-37Ufde_x0",
            "rule": "typescript:S107",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 177,
            "hash": "37458eec92994279fd1f3ac7691ed487",
            "textRange": {
                "startLine": 177,
                "endLine": 177,
                "startOffset": 3,
                "endOffset": 14
            },
            "flows": [],
            "status": "OPEN",
            "message": "Constructor has too many parameters (18). Maximum allowed is 7.",
            "effort": "20min",
            "debt": "20min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-18T15:42:46+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemCb_-37Ufde_x1",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 354,
            "hash": "2e4bbac648be5659482324eb36c165da",
            "textRange": {
                "startLine": 354,
                "endLine": 354,
                "startOffset": 1,
                "endOffset": 16
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 375,
                                "endLine": 375,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 432,
                                "endLine": 432,
                                "startOffset": 4,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 379,
                                "endLine": 379,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 381,
                                "endLine": 381,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 384,
                                "endLine": 384,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 391,
                                "endLine": 391,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 394,
                                "endLine": 394,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 398,
                                "endLine": 398,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 405,
                                "endLine": 405,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 407,
                                "endLine": 407,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 411,
                                "endLine": 411,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 418,
                                "endLine": 418,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 420,
                                "endLine": 420,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 422,
                                "endLine": 422,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 426,
                                "endLine": 426,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 427,
                                "endLine": 427,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed.",
            "effort": "20min",
            "debt": "20min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-18T15:42:46+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemCb_-37Ufde_x4",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 450,
            "hash": "fa68f4d43e5a8021363647ec7f67c49e",
            "textRange": {
                "startLine": 450,
                "endLine": 450,
                "startOffset": 1,
                "endOffset": 15
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 452,
                                "endLine": 452,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 487,
                                "endLine": 487,
                                "startOffset": 4,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 463,
                                "endLine": 463,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 466,
                                "endLine": 466,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 469,
                                "endLine": 469,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 469,
                                "endLine": 469,
                                "startOffset": 47,
                                "endOffset": 49
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 473,
                                "endLine": 473,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 475,
                                "endLine": 475,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 475,
                                "endLine": 475,
                                "startOffset": 47,
                                "endOffset": 49
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 480,
                                "endLine": 480,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed.",
            "effort": "10min",
            "debt": "10min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-18T15:42:46+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemCb_-37Ufde_x8",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 559,
            "hash": "e2addcf05f0e5b13001de11433a26bf7",
            "textRange": {
                "startLine": 559,
                "endLine": 559,
                "startOffset": 1,
                "endOffset": 27
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 561,
                                "endLine": 561,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 591,
                                "endLine": 591,
                                "startOffset": 4,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 561,
                                "endLine": 561,
                                "startOffset": 39,
                                "endOffset": 41
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 569,
                                "endLine": 569,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 571,
                                "endLine": 571,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 573,
                                "endLine": 573,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 577,
                                "endLine": 577,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 581,
                                "endLine": 581,
                                "startOffset": 11,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 582,
                                "endLine": 582,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 586,
                                "endLine": 586,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed.",
            "effort": "8min",
            "debt": "8min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-18T15:42:46+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemCb_-37Ufde_x-",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 609,
            "hash": "33f852eeee6791971ee69a582253732a",
            "textRange": {
                "startLine": 609,
                "endLine": 609,
                "startOffset": 1,
                "endOffset": 25
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 610,
                                "endLine": 610,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 627,
                                "endLine": 627,
                                "startOffset": 4,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 611,
                                "endLine": 611,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 615,
                                "endLine": 615,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 629,
                                "endLine": 629,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 633,
                                "endLine": 633,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 635,
                                "endLine": 635,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 640,
                                "endLine": 640,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 652,
                                "endLine": 652,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 654,
                                "endLine": 654,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 659,
                                "endLine": 659,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 661,
                                "endLine": 661,
                                "startOffset": 3,
                                "endOffset": 6
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 662,
                                "endLine": 662,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 664,
                                "endLine": 664,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 669,
                                "endLine": 669,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed.",
            "effort": "20min",
            "debt": "20min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-25T14:44:34+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemCb_-37Ufde_yB",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 680,
            "hash": "285341dbbf504fb449be54666391d7e4",
            "textRange": {
                "startLine": 680,
                "endLine": 680,
                "startOffset": 1,
                "endOffset": 19
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 681,
                                "endLine": 681,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 709,
                                "endLine": 709,
                                "startOffset": 4,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 682,
                                "endLine": 682,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 684,
                                "endLine": 684,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 689,
                                "endLine": 689,
                                "startOffset": 6,
                                "endOffset": 10
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 690,
                                "endLine": 690,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 695,
                                "endLine": 695,
                                "startOffset": 7,
                                "endOffset": 11
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 690,
                                "endLine": 690,
                                "startOffset": 55,
                                "endOffset": 57
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 710,
                                "endLine": 710,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 712,
                                "endLine": 712,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 713,
                                "endLine": 713,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 715,
                                "endLine": 715,
                                "startOffset": 6,
                                "endOffset": 8
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 718,
                                "endLine": 718,
                                "startOffset": 6,
                                "endOffset": 8
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 726,
                                "endLine": 726,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 728,
                                "endLine": 728,
                                "startOffset": 3,
                                "endOffset": 6
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 729,
                                "endLine": 729,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 731,
                                "endLine": 731,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 736,
                                "endLine": 736,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 746,
                                "endLine": 746,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 750,
                                "endLine": 750,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 769,
                                "endLine": 769,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 752,
                                "endLine": 752,
                                "startOffset": 4,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 757,
                                "endLine": 757,
                                "startOffset": 4,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 758,
                                "endLine": 758,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 760,
                                "endLine": 760,
                                "startOffset": 6,
                                "endOffset": 8
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 765,
                                "endLine": 765,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 770,
                                "endLine": 770,
                                "startOffset": 4,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 773,
                                "endLine": 773,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 777,
                                "endLine": 777,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 796,
                                "endLine": 796,
                                "startOffset": 7,
                                "endOffset": 11
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 778,
                                "endLine": 778,
                                "startOffset": 6,
                                "endOffset": 8
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 778,
                                "endLine": 778,
                                "startOffset": 45,
                                "endOffset": 47
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 792,
                                "endLine": 792,
                                "startOffset": 7,
                                "endOffset": 9
                            },
                            "msg": "+6 (incl. 5 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 93 to the 15 allowed.",
            "effort": "1h23min",
            "debt": "1h23min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-26T23:16:04+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemCb_-37Ufde_yL",
            "rule": "typescript:S1186",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 874,
            "hash": "28c36e9d97589b522e6229b30258bf0b",
            "textRange": {
                "startLine": 874,
                "endLine": 876,
                "startOffset": 39,
                "endOffset": 5
            },
            "flows": [],
            "status": "OPEN",
            "message": "Unexpected empty arrow function.",
            "effort": "5min",
            "debt": "5min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-25T14:44:34+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehemCb_-37Ufde_yO",
            "rule": "typescript:S1186",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 884,
            "hash": "28c36e9d97589b522e6229b30258bf0b",
            "textRange": {
                "startLine": 884,
                "endLine": 886,
                "startOffset": 39,
                "endOffset": 5
            },
            "flows": [],
            "status": "OPEN",
            "message": "Unexpected empty arrow function.",
            "effort": "5min",
            "debt": "5min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-18T15:42:46+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehemCb_-37Ufde_yQ",
            "rule": "typescript:S1186",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 945,
            "hash": "28c36e9d97589b522e6229b30258bf0b",
            "textRange": {
                "startLine": 945,
                "endLine": 947,
                "startOffset": 36,
                "endOffset": 3
            },
            "flows": [],
            "status": "OPEN",
            "message": "Unexpected empty arrow function.",
            "effort": "5min",
            "debt": "5min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-25T14:44:34+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehemCb_-37Ufde_yR",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 950,
            "hash": "623402e37b06c71da677ceff9a89dd62",
            "textRange": {
                "startLine": 950,
                "endLine": 950,
                "startOffset": 1,
                "endOffset": 14
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1023,
                                "endLine": 1023,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1025,
                                "endLine": 1025,
                                "startOffset": 4,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1029,
                                "endLine": 1029,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1031,
                                "endLine": 1031,
                                "startOffset": 4,
                                "endOffset": 8
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1032,
                                "endLine": 1032,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1034,
                                "endLine": 1034,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1038,
                                "endLine": 1038,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 996,
                                "endLine": 996,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 997,
                                "endLine": 997,
                                "startOffset": 4,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1003,
                                "endLine": 1003,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1004,
                                "endLine": 1004,
                                "startOffset": 4,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1005,
                                "endLine": 1005,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
                            "textRange": {
                                "startLine": 1006,
                                "endLine": 1006,
                                "startOffset": 6,
                                "endOffset": 9
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed.",
            "effort": "17min",
            "debt": "17min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-26T16:28:42+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehemCb_-37Ufde_yT",
            "rule": "typescript:S4138",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 1006,
            "hash": "a527ec68f23ae823e5ffeeb1eb4a748b",
            "textRange": {
                "startLine": 1006,
                "endLine": 1014,
                "startOffset": 6,
                "endOffset": 7
            },
            "flows": [],
            "status": "OPEN",
            "message": "Expected a `for-of` loop instead of a `for` loop with this simple iteration.",
            "effort": "5min",
            "debt": "5min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-25T14:44:34+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehemCb_-37Ufde_yV",
            "rule": "typescript:S4138",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "project": "angularTest",
            "line": 1055,
            "hash": "be3bc8a715cba5860e3a7ed535c55808",
            "textRange": {
                "startLine": 1055,
                "endLine": 1059,
                "startOffset": 3,
                "endOffset": 4
            },
            "flows": [],
            "status": "OPEN",
            "message": "Expected a `for-of` loop instead of a `for` loop with this simple iteration.",
            "effort": "5min",
            "debt": "5min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-10-25T14:44:34+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehenOb_-37Ufde_yy",
            "rule": "typescript:S4138",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/roles/roles.component.ts",
            "project": "angularTest",
            "line": 199,
            "hash": "e5a9f4200f546e80916bef190468e2dc",
            "textRange": {
                "startLine": 199,
                "endLine": 207,
                "startOffset": 4,
                "endOffset": 5
            },
            "flows": [],
            "status": "OPEN",
            "message": "Expected a `for-of` loop instead of a `for` loop with this simple iteration.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-lajara@neoris.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-03-28T22:09:57+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehenOb_-37Ufde_yz",
            "rule": "typescript:S4138",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/roles/roles.component.ts",
            "project": "angularTest",
            "line": 260,
            "hash": "6f7ed1d93e32557e4e8d1891e7be1740",
            "textRange": {
                "startLine": 260,
                "endLine": 263,
                "startOffset": 4,
                "endOffset": 5
            },
            "flows": [],
            "status": "OPEN",
            "message": "Expected a `for-of` loop instead of a `for` loop with this simple iteration.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-lajara@neoris.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-03-25T07:10:05+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehenOb_-37Ufde_y0",
            "rule": "typescript:S4138",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/roles/roles.component.ts",
            "project": "angularTest",
            "line": 283,
            "hash": "6f7ed1d93e32557e4e8d1891e7be1740",
            "textRange": {
                "startLine": 283,
                "endLine": 286,
                "startOffset": 4,
                "endOffset": 5
            },
            "flows": [],
            "status": "OPEN",
            "message": "Expected a `for-of` loop instead of a `for` loop with this simple iteration.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-lajara@neoris.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-03-25T07:10:05+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFtgEisb_-37UfdgQxM",
            "rule": "typescript:S1186",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/roles/roles.component.ts",
            "project": "angularTest",
            "line": 309,
            "hash": "28c36e9d97589b522e6229b30258bf0b",
            "textRange": {
                "startLine": 309,
                "endLine": 310,
                "startOffset": 40,
                "endOffset": 7
            },
            "flows": [],
            "status": "OPEN",
            "message": "Unexpected empty arrow function.",
            "effort": "5min",
            "debt": "5min",
            "author": "jose.cruzh@neoris.com",
            "tags": [
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-16T17:10:22+0000",
            "updateDate": "2022-06-16T17:10:22+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFtgEisb_-37UfdgQxN",
            "rule": "typescript:S1186",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/maintenance/catalogs/roles/roles.component.ts",
            "project": "angularTest",
            "line": 318,
            "hash": "28c36e9d97589b522e6229b30258bf0b",
            "textRange": {
                "startLine": 318,
                "endLine": 319,
                "startOffset": 40,
                "endOffset": 7
            },
            "flows": [],
            "status": "OPEN",
            "message": "Unexpected empty arrow function.",
            "effort": "5min",
            "debt": "5min",
            "author": "jose.cruzh@neoris.com",
            "tags": [
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-16T17:10:22+0000",
            "updateDate": "2022-06-16T17:10:22+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehenOb_-37Ufde_y8",
            "rule": "typescript:S1488",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/maintenance/catalogs/roles/roles.component.ts",
            "project": "angularTest",
            "line": 333,
            "hash": "5b6fd9d1a2b6ebecdbe75b6a34812a77",
            "textRange": {
                "startLine": 333,
                "endLine": 352,
                "startOffset": 20,
                "endOffset": 5
            },
            "flows": [],
            "status": "OPEN",
            "message": "Immediately return this expression instead of assigning it to the temporary variable \"saveRoles\".",
            "effort": "2min",
            "debt": "2min",
            "author": "e-lajara@neoris.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-03-25T07:10:05+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehekKb_-37Ufde_xe",
            "rule": "typescript:S4144",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/translations/catalog-translation/catalog-translation.component.ts",
            "project": "angularTest",
            "line": 152,
            "hash": "58d1acbbe4cf5e8eb6f01eb032774549",
            "textRange": {
                "startLine": 152,
                "endLine": 152,
                "startOffset": 14,
                "endOffset": 16
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/translations/catalog-translation/catalog-translation.component.ts",
                            "textRange": {
                                "startLine": 144,
                                "endLine": 144,
                                "startOffset": 15,
                                "endOffset": 17
                            },
                            "msg": "Original implementation"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Update this function so that its implementation is not identical to the one on line 144.",
            "effort": "15min",
            "debt": "15min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "confusing",
                "duplicate",
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-10T04:17:53+0000",
            "updateDate": "2022-06-17T15:47:37+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehekKb_-37Ufde_xf",
            "rule": "typescript:S125",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/translations/catalog-translation/catalog-translation.component.ts",
            "project": "angularTest",
            "line": 162,
            "hash": "161fdd4ea5629f5e41693d7bc4840e26",
            "textRange": {
                "startLine": 162,
                "endLine": 162,
                "startOffset": 2,
                "endOffset": 29
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove this commented out code.",
            "effort": "5min",
            "debt": "5min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-10T04:17:53+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFehekRb_-37Ufde_xg",
            "rule": "typescript:S4144",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/translations/label-translation/label-translation.component.ts",
            "project": "angularTest",
            "line": 151,
            "hash": "58d1acbbe4cf5e8eb6f01eb032774549",
            "textRange": {
                "startLine": 151,
                "endLine": 151,
                "startOffset": 14,
                "endOffset": 16
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/maintenance/translations/label-translation/label-translation.component.ts",
                            "textRange": {
                                "startLine": 143,
                                "endLine": 143,
                                "startOffset": 15,
                                "endOffset": 17
                            },
                            "msg": "Original implementation"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Update this function so that its implementation is not identical to the one on line 143.",
            "effort": "15min",
            "debt": "15min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "confusing",
                "duplicate",
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-07T17:24:44+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFehekRb_-37Ufde_xh",
            "rule": "typescript:S125",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/maintenance/translations/label-translation/label-translation.component.ts",
            "project": "angularTest",
            "line": 161,
            "hash": "161fdd4ea5629f5e41693d7bc4840e26",
            "textRange": {
                "startLine": 161,
                "endLine": 161,
                "startOffset": 2,
                "endOffset": 29
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove this commented out code.",
            "effort": "5min",
            "debt": "5min",
            "author": "josiel.hernandez@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-05-05T09:00:06+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFeheV1b_-37Ufde_tQ",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
            "project": "angularTest",
            "line": 39,
            "hash": "22c1a674e1bbcb1efc3ae3cabe48ebca",
            "textRange": {
                "startLine": 39,
                "endLine": 39,
                "startOffset": 1,
                "endOffset": 35
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 40,
                                "endLine": 40,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 50,
                                "endLine": 50,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 52,
                                "endLine": 52,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 58,
                                "endLine": 58,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 60,
                                "endLine": 60,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 45,
                                "endLine": 45,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 45,
                                "endLine": 45,
                                "startOffset": 19,
                                "endOffset": 21
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 46,
                                "endLine": 46,
                                "startOffset": 89,
                                "endOffset": 90
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 46,
                                "endLine": 46,
                                "startOffset": 58,
                                "endOffset": 60
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed.",
            "effort": "10min",
            "debt": "10min",
            "author": "maik.muniz@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-05-17T20:29:18+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheV1b_-37Ufde_tT",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
            "project": "angularTest",
            "line": 86,
            "hash": "7ea396987e739ef60ae49b2b77c59b0c",
            "textRange": {
                "startLine": 86,
                "endLine": 86,
                "startOffset": 71,
                "endOffset": 73
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 90,
                                "endLine": 90,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 104,
                                "endLine": 104,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 91,
                                "endLine": 91,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 91,
                                "endLine": 91,
                                "startOffset": 19,
                                "endOffset": 21
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 93,
                                "endLine": 93,
                                "startOffset": 33,
                                "endOffset": 34
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 94,
                                "endLine": 94,
                                "startOffset": 38,
                                "endOffset": 39
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 98,
                                "endLine": 98,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 105,
                                "endLine": 105,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 105,
                                "endLine": 105,
                                "startOffset": 19,
                                "endOffset": 21
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 107,
                                "endLine": 107,
                                "startOffset": 33,
                                "endOffset": 34
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 108,
                                "endLine": 108,
                                "startOffset": 38,
                                "endOffset": 39
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 111,
                                "endLine": 111,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 112,
                                "endLine": 112,
                                "startOffset": 25,
                                "endOffset": 26
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 113,
                                "endLine": 113,
                                "startOffset": 28,
                                "endOffset": 29
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
                            "textRange": {
                                "startLine": 114,
                                "endLine": 114,
                                "startOffset": 27,
                                "endOffset": 28
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed.",
            "effort": "28min",
            "debt": "28min",
            "author": "jose.cruzh@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-04-08T22:35:32+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheVRb_-37Ufde_tF",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
            "project": "angularTest",
            "line": 89,
            "hash": "cda20b68810402738313bc0a721d119b",
            "textRange": {
                "startLine": 89,
                "endLine": 89,
                "startOffset": 4,
                "endOffset": 16
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 90,
                                "endLine": 90,
                                "startOffset": 82,
                                "endOffset": 84
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 91,
                                "endLine": 91,
                                "startOffset": 96,
                                "endOffset": 98
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 92,
                                "endLine": 92,
                                "startOffset": 94,
                                "endOffset": 96
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 93,
                                "endLine": 93,
                                "startOffset": 78,
                                "endOffset": 80
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 94,
                                "endLine": 94,
                                "startOffset": 74,
                                "endOffset": 76
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 95,
                                "endLine": 95,
                                "startOffset": 60,
                                "endOffset": 62
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 96,
                                "endLine": 96,
                                "startOffset": 78,
                                "endOffset": 80
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 97,
                                "endLine": 97,
                                "startOffset": 62,
                                "endOffset": 64
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 98,
                                "endLine": 98,
                                "startOffset": 8,
                                "endOffset": 10
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 100,
                                "endLine": 100,
                                "startOffset": 9,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 101,
                                "endLine": 101,
                                "startOffset": 86,
                                "endOffset": 88
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 103,
                                "endLine": 103,
                                "startOffset": 100,
                                "endOffset": 102
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 104,
                                "endLine": 104,
                                "startOffset": 90,
                                "endOffset": 92
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 104,
                                "endLine": 104,
                                "startOffset": 131,
                                "endOffset": 132
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 104,
                                "endLine": 104,
                                "startOffset": 113,
                                "endOffset": 115
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 105,
                                "endLine": 105,
                                "startOffset": 68,
                                "endOffset": 70
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 106,
                                "endLine": 106,
                                "startOffset": 64,
                                "endOffset": 66
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 107,
                                "endLine": 107,
                                "startOffset": 82,
                                "endOffset": 84
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 108,
                                "endLine": 108,
                                "startOffset": 86,
                                "endOffset": 88
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
                            "textRange": {
                                "startLine": 109,
                                "endLine": 109,
                                "startOffset": 82,
                                "endOffset": 84
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed.",
            "effort": "10min",
            "debt": "10min",
            "author": "joseph.aramburo@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-03-29T20:41:09+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheVRb_-37Ufde_tG",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
            "project": "angularTest",
            "line": 120,
            "hash": "3c42b2ef9857567e8111aa5a2e2b3555",
            "textRange": {
                "startLine": 120,
                "endLine": 120,
                "startOffset": 44,
                "endOffset": 60
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"whoCall\" or rename it to \"_whoCall\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "joseph.aramburo@chubb.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-03-29T20:41:09+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFeheVRb_-37Ufde_tH",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
            "project": "angularTest",
            "line": 149,
            "hash": "b74730318c5640ee2409862e8fb20929",
            "textRange": {
                "startLine": 149,
                "endLine": 149,
                "startOffset": 16,
                "endOffset": 41
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"error\" or rename it to \"_error\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "joseph.aramburo@chubb.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-03-29T20:41:09+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFeheWCb_-37Ufde_tW",
            "rule": "typescript:S5869",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/constants/const-patterns.ts",
            "project": "angularTest",
            "line": 2,
            "hash": "382ca1a32495e1e0d89bfc5bae91a6bd",
            "textRange": {
                "startLine": 2,
                "endLine": 2,
                "startOffset": 59,
                "endOffset": 61
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/constants/const-patterns.ts",
                            "textRange": {
                                "startLine": 2,
                                "endLine": 2,
                                "startOffset": 61,
                                "endOffset": 62
                            },
                            "msg": "Additional duplicate"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Remove duplicates in this character class.",
            "effort": "5min",
            "debt": "5min",
            "author": "joseph.aramburo@josepharamburo",
            "tags": [
                "regex"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-11-09T19:33:02+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10R",
            "rule": "typescript:S1128",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 3,
            "hash": "d1fd4bb8cd2327d26bd1d97f2e6eaef1",
            "textRange": {
                "startLine": 3,
                "endLine": 3,
                "startOffset": 97,
                "endOffset": 109
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove this unused import of 'ComponentRef'.",
            "effort": "2min",
            "debt": "2min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "es2015",
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFeheY6b_-37Ufde_tZ",
            "rule": "typescript:S107",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 204,
            "hash": "9cf7e7ab1a5bd8082a91e93f51b260b1",
            "textRange": {
                "startLine": 204,
                "endLine": 204,
                "startOffset": 1,
                "endOffset": 12
            },
            "flows": [],
            "status": "OPEN",
            "message": "Constructor has too many parameters (35). Maximum allowed is 7.",
            "effort": "20min",
            "debt": "20min",
            "author": "joseph.aramburo@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-08-16T23:53:44+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheY6b_-37Ufde_ta",
            "rule": "typescript:S1874",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 229,
            "hash": "e079cbf6546739f35e15d0906503b7fe",
            "textRange": {
                "startLine": 229,
                "endLine": 229,
                "startOffset": 15,
                "endOffset": 39
            },
            "flows": [],
            "status": "OPEN",
            "message": "'ComponentFactoryResolver' is deprecated. Angular no longer requires Component factories. Please use other APIs where\r\nComponent class can be used directly.",
            "effort": "15min",
            "debt": "15min",
            "author": "joseph.aramburo@chubb.com",
            "tags": [
                "cwe",
                "obsolete"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-03-29T20:41:09+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheY6b_-37Ufde_tb",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 311,
            "hash": "eb0b1c7245babb8e369fd11f7e238b1b",
            "textRange": {
                "startLine": 311,
                "endLine": 311,
                "startOffset": 1,
                "endOffset": 9
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 316,
                                "endLine": 316,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 316,
                                "endLine": 316,
                                "startOffset": 35,
                                "endOffset": 37
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 320,
                                "endLine": 320,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 327,
                                "endLine": 327,
                                "startOffset": 9,
                                "endOffset": 11
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 413,
                                "endLine": 413,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 432,
                                "endLine": 432,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 463,
                                "endLine": 463,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 463,
                                "endLine": 463,
                                "startOffset": 33,
                                "endOffset": 35
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 464,
                                "endLine": 464,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 466,
                                "endLine": 466,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 473,
                                "endLine": 473,
                                "startOffset": 2,
                                "endOffset": 4
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 363,
                                "endLine": 363,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 367,
                                "endLine": 367,
                                "startOffset": 50,
                                "endOffset": 51
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 368,
                                "endLine": 368,
                                "startOffset": 26,
                                "endOffset": 27
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 376,
                                "endLine": 376,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 376,
                                "endLine": 376,
                                "startOffset": 43,
                                "endOffset": 45
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 377,
                                "endLine": 377,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 391,
                                "endLine": 391,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 391,
                                "endLine": 391,
                                "startOffset": 43,
                                "endOffset": 45
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 392,
                                "endLine": 392,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 407,
                                "endLine": 407,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 407,
                                "endLine": 407,
                                "startOffset": 18,
                                "endOffset": 20
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 420,
                                "endLine": 420,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 424,
                                "endLine": 424,
                                "startOffset": 5,
                                "endOffset": 9
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 420,
                                "endLine": 420,
                                "startOffset": 50,
                                "endOffset": 52
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 439,
                                "endLine": 439,
                                "startOffset": 35,
                                "endOffset": 36
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 443,
                                "endLine": 443,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 451,
                                "endLine": 451,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 456,
                                "endLine": 456,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 55 to the 15 allowed.",
            "effort": "45min",
            "debt": "45min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-04-21T06:39:12+0000",
            "updateDate": "2022-06-21T19:11:46+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10T",
            "rule": "typescript:S1186",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 332,
            "hash": "6f4cb82bca316ec6256a23847d37d362",
            "textRange": {
                "startLine": 332,
                "endLine": 333,
                "startOffset": 32,
                "endOffset": 3
            },
            "flows": [],
            "status": "OPEN",
            "message": "Unexpected empty arrow function.",
            "effort": "5min",
            "debt": "5min",
            "author": "joseph.aramburo@josepharamburo",
            "tags": [
                "suspicious"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10S",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 332,
            "hash": "6f4cb82bca316ec6256a23847d37d362",
            "textRange": {
                "startLine": 332,
                "endLine": 332,
                "startOffset": 25,
                "endOffset": 28
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"res\" or rename it to \"_res\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "joseph.aramburo@josepharamburo",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10U",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 333,
            "hash": "7e18d1d1eec75b79f7568317c762217a",
            "textRange": {
                "startLine": 333,
                "endLine": 333,
                "startOffset": 11,
                "endOffset": 16
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"error\" or rename it to \"_error\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "joseph.aramburo@josepharamburo",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFeheY6b_-37Ufde_tf",
            "rule": "typescript:S1125",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 376,
            "hash": "e811f64c0fdecc9789e8ecf81c5596c4",
            "textRange": {
                "startLine": 376,
                "endLine": 376,
                "startOffset": 60,
                "endOffset": 65
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unnecessary boolean literal.",
            "effort": "5min",
            "debt": "5min",
            "author": "salome.nunez@outlook.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-09-27T13:01:30+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFeheY6b_-37Ufde_tg",
            "rule": "typescript:S1125",
            "severity": "MINOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 391,
            "hash": "e811f64c0fdecc9789e8ecf81c5596c4",
            "textRange": {
                "startLine": 391,
                "endLine": 391,
                "startOffset": 60,
                "endOffset": 65
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unnecessary boolean literal.",
            "effort": "5min",
            "debt": "5min",
            "author": "salome.nunez@outlook.com",
            "tags": [
                "clumsy"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2021-09-27T13:01:30+0000",
            "updateDate": "2022-06-13T19:21:01+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10V",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 404,
            "hash": "f0eae9593f8118a0421232d2e02435c2",
            "textRange": {
                "startLine": 404,
                "endLine": 404,
                "startOffset": 64,
                "endOffset": 67
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"res\" or rename it to \"_res\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "javier.maldonado@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10W",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 467,
            "hash": "631456d0e3aefb06b8700f11fc7dd959",
            "textRange": {
                "startLine": 467,
                "endLine": 467,
                "startOffset": 38,
                "endOffset": 41
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"res\" or rename it to \"_res\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10X",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 488,
            "hash": "c8df7fed786cc2dfc5236b642f8cf2e6",
            "textRange": {
                "startLine": 488,
                "endLine": 488,
                "startOffset": 22,
                "endOffset": 45
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"riskData\" or rename it to \"_riskData\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10Y",
            "rule": "typescript:S3504",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 574,
            "hash": "3ab5993a99d83ade3b46b516fd9debfb",
            "textRange": {
                "startLine": 574,
                "endLine": 574,
                "startOffset": 3,
                "endOffset": 60
            },
            "flows": [],
            "status": "OPEN",
            "message": "Unexpected var, use let or const instead.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "bad-practice",
                "es2015"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10Z",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 584,
            "hash": "b74730318c5640ee2409862e8fb20929",
            "textRange": {
                "startLine": 584,
                "endLine": 584,
                "startOffset": 7,
                "endOffset": 31
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"error\" or rename it to \"_error\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10a",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 676,
            "hash": "0f2ca925fe50fb3aeddf92f470f0179e",
            "textRange": {
                "startLine": 676,
                "endLine": 676,
                "startOffset": 8,
                "endOffset": 11
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"err\" or rename it to \"_err\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10b",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 685,
            "hash": "c718873c950d2190fcce437d9a0859e8",
            "textRange": {
                "startLine": 685,
                "endLine": 685,
                "startOffset": 5,
                "endOffset": 14
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"errParams\" or rename it to \"_errParams\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        },
        {
            "key": "AYFeheY6b_-37Ufde_tl",
            "rule": "typescript:S3776",
            "severity": "CRITICAL",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 692,
            "hash": "3d3996daf375fe446092bb2329abcdc1",
            "textRange": {
                "startLine": 692,
                "endLine": 692,
                "startOffset": 39,
                "endOffset": 41
            },
            "flows": [
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 696,
                                "endLine": 696,
                                "startOffset": 3,
                                "endOffset": 5
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 718,
                                "endLine": 718,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 744,
                                "endLine": 744,
                                "startOffset": 6,
                                "endOffset": 10
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 719,
                                "endLine": 719,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 740,
                                "endLine": 740,
                                "startOffset": 7,
                                "endOffset": 11
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 720,
                                "endLine": 720,
                                "startOffset": 6,
                                "endOffset": 8
                            },
                            "msg": "+4 (incl. 3 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 732,
                                "endLine": 732,
                                "startOffset": 7,
                                "endOffset": 9
                            },
                            "msg": "+5 (incl. 4 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 735,
                                "endLine": 735,
                                "startOffset": 9,
                                "endOffset": 13
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 732,
                                "endLine": 732,
                                "startOffset": 37,
                                "endOffset": 38
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 751,
                                "endLine": 751,
                                "startOffset": 4,
                                "endOffset": 10
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 763,
                                "endLine": 763,
                                "startOffset": 4,
                                "endOffset": 6
                            },
                            "msg": "+2 (incl. 1 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 763,
                                "endLine": 763,
                                "startOffset": 94,
                                "endOffset": 96
                            },
                            "msg": "+1"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 766,
                                "endLine": 766,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 769,
                                "endLine": 769,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 773,
                                "endLine": 773,
                                "startOffset": 5,
                                "endOffset": 7
                            },
                            "msg": "+3 (incl. 2 for nesting)"
                        }
                    ]
                },
                {
                    "locations": [
                        {
                            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
                            "textRange": {
                                "startLine": 784,
                                "endLine": 784,
                                "startOffset": 249,
                                "endOffset": 251
                            },
                            "msg": "+1"
                        }
                    ]
                }
            ],
            "status": "OPEN",
            "message": "Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed.",
            "effort": "24min",
            "debt": "24min",
            "author": "jose.cruz5@chubb.com",
            "tags": [
                "brain-overload"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-04-27T06:41:31+0000",
            "updateDate": "2022-06-21T19:11:46+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": false
        },
        {
            "key": "AYFyn1qbb_-37Ufdg10c",
            "rule": "typescript:S1172",
            "severity": "MAJOR",
            "component": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "project": "angularTest",
            "line": 692,
            "hash": "3d3996daf375fe446092bb2329abcdc1",
            "textRange": {
                "startLine": 692,
                "endLine": 692,
                "startOffset": 31,
                "endOffset": 37
            },
            "flows": [],
            "status": "OPEN",
            "message": "Remove the unused function parameter \"reject\" or rename it to \"_reject\" to make intention explicit.",
            "effort": "5min",
            "debt": "5min",
            "author": "e-eralopez@neoris.com",
            "tags": [
                "unused"
            ],
            "transitions": [
                "confirm",
                "resolve",
                "falsepositive",
                "wontfix"
            ],
            "actions": [
                "set_type",
                "set_tags",
                "comment",
                "set_severity",
                "assign"
            ],
            "comments": [],
            "creationDate": "2022-06-17T17:02:40+0000",
            "updateDate": "2022-06-17T17:02:40+0000",
            "type": "CODE_SMELL",
            "scope": "MAIN",
            "quickFixAvailable": true
        }
    ],
    "components": [
        {
            "key": "angularTest:src/app/infrastructure/httpErrors.interceptor.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "httpErrors.interceptor.ts",
            "longName": "src/app/infrastructure/httpErrors.interceptor.ts",
            "path": "src/app/infrastructure/httpErrors.interceptor.ts"
        },
        {
            "key": "angularTest:src/app/infrastructure/repositories/api/api-repository.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "api-repository.ts",
            "longName": "src/app/infrastructure/repositories/api/api-repository.ts",
            "path": "src/app/infrastructure/repositories/api/api-repository.ts"
        },
        {
            "key": "angularTest:src/app/core/guards/auth.guard.service.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "auth.guard.service.ts",
            "longName": "src/app/core/guards/auth.guard.service.ts",
            "path": "src/app/core/guards/auth.guard.service.ts"
        },
        {
            "key": "angularTest:src/app/core/services/catalog.service.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "catalog.service.ts",
            "longName": "src/app/core/services/catalog.service.ts",
            "path": "src/app/core/services/catalog.service.ts"
        },
        {
            "key": "angularTest:src/app/core/util/format.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "format.ts",
            "longName": "src/app/core/util/format.ts",
            "path": "src/app/core/util/format.ts"
        },
        {
            "key": "angularTest:src/app/modules/prospects/constants/const-patterns.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "const-patterns.ts",
            "longName": "src/app/modules/prospects/constants/const-patterns.ts",
            "path": "src/app/modules/prospects/constants/const-patterns.ts"
        },
        {
            "key": "angularTest:src/app/core/util/focus-control.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "focus-control.ts",
            "longName": "src/app/core/util/focus-control.ts",
            "path": "src/app/core/util/focus-control.ts"
        },
        {
            "key": "angularTest:src/app/modules/prospects/class/tax-calculation-class.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "tax-calculation-class.ts",
            "longName": "src/app/modules/prospects/class/tax-calculation-class.ts",
            "path": "src/app/modules/prospects/class/tax-calculation-class.ts"
        },
        {
            "key": "angularTest:src/app/app.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "app.component.ts",
            "longName": "src/app/app.component.ts",
            "path": "src/app/app.component.ts"
        },
        {
            "key": "angularTest:src/app/core/util/filter.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "filter.ts",
            "longName": "src/app/core/util/filter.ts",
            "path": "src/app/core/util/filter.ts"
        },
        {
            "key": "angularTest:src/app/core/util/form-utils.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "form-utils.ts",
            "longName": "src/app/core/util/form-utils.ts",
            "path": "src/app/core/util/form-utils.ts"
        },
        {
            "key": "angularTest:src/app/domain/use-cases/quotation.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "quotation.ts",
            "longName": "src/app/domain/use-cases/quotation.ts",
            "path": "src/app/domain/use-cases/quotation.ts"
        },
        {
            "key": "angularTest:src/app/layout/sidebar/sidebar.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "sidebar.component.ts",
            "longName": "src/app/layout/sidebar/sidebar.component.ts",
            "path": "src/app/layout/sidebar/sidebar.component.ts"
        },
        {
            "key": "angularTest:src/app/core/util/controls-utils.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "controls-utils.ts",
            "longName": "src/app/core/util/controls-utils.ts",
            "path": "src/app/core/util/controls-utils.ts"
        },
        {
            "key": "angularTest:src/app/domain/use-cases/user.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "user.ts",
            "longName": "src/app/domain/use-cases/user.ts",
            "path": "src/app/domain/use-cases/user.ts"
        },
        {
            "key": "angularTest:src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "form-prospects.component.ts",
            "longName": "src/app/modules/prospects/form-prospects/form-prospects.component.ts",
            "path": "src/app/modules/prospects/form-prospects/form-prospects.component.ts"
        },
        {
            "key": "angularTest:src/app/core/services/quotation.service.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "quotation.service.ts",
            "longName": "src/app/core/services/quotation.service.ts",
            "path": "src/app/core/services/quotation.service.ts"
        },
        {
            "key": "angularTest:src/app/modules/maintenance/translations/catalog-translation/catalog-translation.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "catalog-translation.component.ts",
            "longName": "src/app/modules/maintenance/translations/catalog-translation/catalog-translation.component.ts",
            "path": "src/app/modules/maintenance/translations/catalog-translation/catalog-translation.component.ts"
        },
        {
            "key": "angularTest:src/app/core/services/loader.service.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "loader.service.ts",
            "longName": "src/app/core/services/loader.service.ts",
            "path": "src/app/core/services/loader.service.ts"
        },
        {
            "key": "angularTest:src/app/modules/maintenance/translations/label-translation/label-translation.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "label-translation.component.ts",
            "longName": "src/app/modules/maintenance/translations/label-translation/label-translation.component.ts",
            "path": "src/app/modules/maintenance/translations/label-translation/label-translation.component.ts"
        },
        {
            "key": "angularTest:src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "aditional-actions-sidebar.component.ts",
            "longName": "src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts",
            "path": "src/app/modules/prospects/aditional-actions-sidebar/aditional-actions-sidebar.component.ts"
        },
        {
            "key": "angularTest:src/app/infrastructure/mappers/translation.mapper.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "translation.mapper.ts",
            "longName": "src/app/infrastructure/mappers/translation.mapper.ts",
            "path": "src/app/infrastructure/mappers/translation.mapper.ts"
        },
        {
            "key": "angularTest:src/app/infrastructure/mappers/quotation.mapper.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "quotation.mapper.ts",
            "longName": "src/app/infrastructure/mappers/quotation.mapper.ts",
            "path": "src/app/infrastructure/mappers/quotation.mapper.ts"
        },
        {
            "key": "angularTest:src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "catalog.component.ts",
            "longName": "src/app/modules/maintenance/catalogs/catalog/catalog.component.ts",
            "path": "src/app/modules/maintenance/catalogs/catalog/catalog.component.ts"
        },
        {
            "key": "angularTest:src/app/infrastructure/api.interceptor.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "api.interceptor.ts",
            "longName": "src/app/infrastructure/api.interceptor.ts",
            "path": "src/app/infrastructure/api.interceptor.ts"
        },
        {
            "key": "angularTest:src/app/core/redux/selectors/search.selectors.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "search.selectors.ts",
            "longName": "src/app/core/redux/selectors/search.selectors.ts",
            "path": "src/app/core/redux/selectors/search.selectors.ts"
        },
        {
            "key": "angularTest:src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "catalog-form.component.ts",
            "longName": "src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts",
            "path": "src/app/modules/maintenance/catalogs/catalog-form/catalog-form.component.ts"
        },
        {
            "key": "angularTest:src/app/layout/header/header.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "header.component.ts",
            "longName": "src/app/layout/header/header.component.ts",
            "path": "src/app/layout/header/header.component.ts"
        },
        {
            "key": "angularTest:src/app/modules/maintenance/catalogs/naic-lob-risk-type/naic-lob-risk-type.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "naic-lob-risk-type.component.ts",
            "longName": "src/app/modules/maintenance/catalogs/naic-lob-risk-type/naic-lob-risk-type.component.ts",
            "path": "src/app/modules/maintenance/catalogs/naic-lob-risk-type/naic-lob-risk-type.component.ts"
        },
        {
            "key": "angularTest",
            "enabled": true,
            "qualifier": "TRK",
            "name": "angularTest",
            "longName": "angularTest"
        },
        {
            "key": "angularTest:src/app/modules/maintenance/catalogs/roles/roles.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "roles.component.ts",
            "longName": "src/app/modules/maintenance/catalogs/roles/roles.component.ts",
            "path": "src/app/modules/maintenance/catalogs/roles/roles.component.ts"
        },
        {
            "key": "angularTest:src/app/core/redux/effects/quote.effects.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "quote.effects.ts",
            "longName": "src/app/core/redux/effects/quote.effects.ts",
            "path": "src/app/core/redux/effects/quote.effects.ts"
        },
        {
            "key": "angularTest:src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "product-configuration.component.ts",
            "longName": "src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts",
            "path": "src/app/modules/maintenance/catalogs/product-configuration/product-configuration.component.ts"
        },
        {
            "key": "angularTest:src/app/core/redux/reducers/catalog.reducer.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "catalog.reducer.ts",
            "longName": "src/app/core/redux/reducers/catalog.reducer.ts",
            "path": "src/app/core/redux/reducers/catalog.reducer.ts"
        },
        {
            "key": "angularTest:src/app/core/redux/selectors/quote.selectors.ts",
            "enabled": true,
            "qualifier": "FIL",
            "name": "quote.selectors.ts",
            "longName": "src/app/core/redux/selectors/quote.selectors.ts",
            "path": "src/app/core/redux/selectors/quote.selectors.ts"
        }
    ],
    "rules": [
        {
            "key": "typescript:S101",
            "name": "Class names should comply with a naming convention",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S3504",
            "name": "Variables should be declared with \"let\" or \"const\"",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S6325",
            "name": "Regular expression literals should be used when possible",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S4144",
            "name": "Functions should not have identical implementations",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S4043",
            "name": "Array-mutating methods should not be used misleadingly",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S1874",
            "name": "Deprecated APIs should not be used",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S1788",
            "name": "Function parameters with default values should be last",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S1301",
            "name": "\"switch\" statements should have at least 3 \"case\" clauses",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S4138",
            "name": "\"for of\" should be used with Iterables",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S108",
            "name": "Nested blocks of code should not be left empty",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S107",
            "name": "Functions should not have too many parameters",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S125",
            "name": "Sections of code should not be commented out",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S1172",
            "name": "Unused function parameters should be removed",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S1854",
            "name": "Unused assignments should be removed",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S3358",
            "name": "Ternary operators should not be nested",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S1186",
            "name": "Functions should not be empty",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S1128",
            "name": "Unnecessary imports should be removed",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S1125",
            "name": "Boolean literals should not be used in comparisons",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S1488",
            "name": "Local variables should not be declared and then immediately returned or thrown",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S4624",
            "name": "Template literals should not be nested",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S3776",
            "name": "Cognitive Complexity of functions should not be too high",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        },
        {
            "key": "typescript:S5869",
            "name": "Character classes in regular expressions should not contain the same character twice",
            "lang": "ts",
            "status": "READY",
            "langName": "TypeScript"
        }
    ],
    "users": [
        {
            "login": "admin",
            "name": "Administrator",
            "active": true
        }
    ],
    "languages": [
        {
            "key": "py",
            "name": "Python"
        },
        {
            "key": "kotlin",
            "name": "Kotlin"
        },
        {
            "key": "go",
            "name": "Go"
        },
        {
            "key": "terraform",
            "name": "Terraform"
        },
        {
            "key": "cloudformation",
            "name": "CloudFormation"
        },
        {
            "key": "js",
            "name": "JavaScript"
        },
        {
            "key": "ts",
            "name": "TypeScript"
        },
        {
            "key": "css",
            "name": "CSS"
        },
        {
            "key": "ruby",
            "name": "Ruby"
        },
        {
            "key": "scala",
            "name": "Scala"
        },
        {
            "key": "cs",
            "name": "C#"
        },
        {
            "key": "java",
            "name": "Java"
        },
        {
            "key": "web",
            "name": "HTML"
        },
        {
            "key": "jsp",
            "name": "JSP"
        },
        {
            "key": "xml",
            "name": "XML"
        },
        {
            "key": "flex",
            "name": "Flex"
        },
        {
            "key": "php",
            "name": "PHP"
        },
        {
            "key": "text",
            "name": "Text"
        },
        {
            "key": "vbnet",
            "name": "VB.NET"
        },
        {
            "key": "yaml",
            "name": "YAML"
        },
        {
            "key": "json",
            "name": "JSON"
        }
    ],
    "facets": []
}
];
