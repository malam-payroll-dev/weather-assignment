export const mock = {
  autocomplete: [
    {
      Version: 1,
      Key: '215854',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Tel Aviv',
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel'
      },
      AdministrativeArea: {
        ID: 'TA',
        LocalizedName: 'Tel Aviv'
      }
    },
    {
      Version: 1,
      Key: '324323',
      Type: 'City',
      Rank: 31,
      LocalizedName: 'Lviv',
      Country: {
        ID: 'UA',
        LocalizedName: 'Ukraine'
      },
      AdministrativeArea: {
        ID: 'LV',
        LocalizedName: 'Lviv'
      }
    }
  ],
  currentConditions: {
    215854: [
      {
        LocalObservationDateTime: '2022-04-19T16:53:00+03:00',
        EpochTime: 1650376380,
        WeatherText: 'Sunny',
        WeatherIcon: 1,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {
            Value: 20.1,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 68,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Metric: {
            Value: 20.8,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Pleasant'
          },
          Imperial: {
            Value: 69,
            Unit: 'F',
            UnitType: 18,
            Phrase: 'Pleasant'
          }
        },
        RealFeelTemperatureShade: {
          Metric: {
            Value: 18.1,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Pleasant'
          },
          Imperial: {
            Value: 65,
            Unit: 'F',
            UnitType: 18,
            Phrase: 'Pleasant'
          }
        },
        RelativeHumidity: 58,
        IndoorRelativeHumidity: 58,
        DewPoint: {
          Metric: {
            Value: 11.5,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 53,
            Unit: 'F',
            UnitType: 18
          }
        },
        Wind: {
          Direction: {
            Degrees: 315,
            Localized: 'NW',
            English: 'NW'
          },
          Speed: {
            Metric: {
              Value: 20.3,
              Unit: 'km/h',
              UnitType: 7
            },
            Imperial: {
              Value: 12.6,
              Unit: 'mi/h',
              UnitType: 9
            }
          }
        },
        WindGust: {
          Speed: {
            Metric: {
              Value: 38,
              Unit: 'km/h',
              UnitType: 7
            },
            Imperial: {
              Value: 23.6,
              Unit: 'mi/h',
              UnitType: 9
            }
          }
        },
        UVIndex: 4,
        UVIndexText: 'Moderate',
        Visibility: {
          Metric: {
            Value: 16.1,
            Unit: 'km',
            UnitType: 6
          },
          Imperial: {
            Value: 10,
            Unit: 'mi',
            UnitType: 2
          }
        },
        ObstructionsToVisibility: '',
        CloudCover: 0,
        Ceiling: {
          Metric: {
            Value: 9144,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 30000,
            Unit: 'ft',
            UnitType: 0
          }
        },
        Pressure: {
          Metric: {
            Value: 1013.2,
            Unit: 'mb',
            UnitType: 14
          },
          Imperial: {
            Value: 29.92,
            Unit: 'inHg',
            UnitType: 12
          }
        },
        PressureTendency: {
          LocalizedText: 'Falling',
          Code: 'F'
        },
        Past24HourTemperatureDeparture: {
          Metric: {
            Value: -3.9,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: -7,
            Unit: 'F',
            UnitType: 18
          }
        },
        ApparentTemperature: {
          Metric: {
            Value: 19.4,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 67,
            Unit: 'F',
            UnitType: 18
          }
        },
        WindChillTemperature: {
          Metric: {
            Value: 20,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 68,
            Unit: 'F',
            UnitType: 18
          }
        },
        WetBulbTemperature: {
          Metric: {
            Value: 14.9,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 59,
            Unit: 'F',
            UnitType: 18
          }
        },
        Precip1hr: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        },
        PrecipitationSummary: {
          Precipitation: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          PastHour: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past3Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past6Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past9Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past12Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past18Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past24Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          }
        },
        TemperatureSummary: {
          Past6HourRange: {
            Minimum: {
              Metric: {
                Value: 17.5,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 63,
                Unit: 'F',
                UnitType: 18
              }
            },
            Maximum: {
              Metric: {
                Value: 22.5,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 72,
                Unit: 'F',
                UnitType: 18
              }
            }
          },
          Past12HourRange: {
            Minimum: {
              Metric: {
                Value: 14.8,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 59,
                Unit: 'F',
                UnitType: 18
              }
            },
            Maximum: {
              Metric: {
                Value: 22.5,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 72,
                Unit: 'F',
                UnitType: 18
              }
            }
          },
          Past24HourRange: {
            Minimum: {
              Metric: {
                Value: 14.8,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 59,
                Unit: 'F',
                UnitType: 18
              }
            },
            Maximum: {
              Metric: {
                Value: 25.8,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 78,
                Unit: 'F',
                UnitType: 18
              }
            }
          }
        },
        MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us'
      }
    ],
    324323: [
      {
        LocalObservationDateTime: '2022-04-19T16:53:00+03:00',
        EpochTime: 1650376380,
        WeatherText: 'Sunny',
        WeatherIcon: 4,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {
            Value: 20.1,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 68,
            Unit: 'F',
            UnitType: 18
          }
        },
        RealFeelTemperature: {
          Metric: {
            Value: 20.8,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Pleasant'
          },
          Imperial: {
            Value: 69,
            Unit: 'F',
            UnitType: 18,
            Phrase: 'Pleasant'
          }
        },
        RealFeelTemperatureShade: {
          Metric: {
            Value: 18.1,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Pleasant'
          },
          Imperial: {
            Value: 65,
            Unit: 'F',
            UnitType: 18,
            Phrase: 'Pleasant'
          }
        },
        RelativeHumidity: 58,
        IndoorRelativeHumidity: 58,
        DewPoint: {
          Metric: {
            Value: 11.5,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 53,
            Unit: 'F',
            UnitType: 18
          }
        },
        Wind: {
          Direction: {
            Degrees: 315,
            Localized: 'NW',
            English: 'NW'
          },
          Speed: {
            Metric: {
              Value: 20.3,
              Unit: 'km/h',
              UnitType: 7
            },
            Imperial: {
              Value: 12.6,
              Unit: 'mi/h',
              UnitType: 9
            }
          }
        },
        WindGust: {
          Speed: {
            Metric: {
              Value: 38,
              Unit: 'km/h',
              UnitType: 7
            },
            Imperial: {
              Value: 23.6,
              Unit: 'mi/h',
              UnitType: 9
            }
          }
        },
        UVIndex: 4,
        UVIndexText: 'Moderate',
        Visibility: {
          Metric: {
            Value: 16.1,
            Unit: 'km',
            UnitType: 6
          },
          Imperial: {
            Value: 10,
            Unit: 'mi',
            UnitType: 2
          }
        },
        ObstructionsToVisibility: '',
        CloudCover: 0,
        Ceiling: {
          Metric: {
            Value: 9144,
            Unit: 'm',
            UnitType: 5
          },
          Imperial: {
            Value: 30000,
            Unit: 'ft',
            UnitType: 0
          }
        },
        Pressure: {
          Metric: {
            Value: 1013.2,
            Unit: 'mb',
            UnitType: 14
          },
          Imperial: {
            Value: 29.92,
            Unit: 'inHg',
            UnitType: 12
          }
        },
        PressureTendency: {
          LocalizedText: 'Falling',
          Code: 'F'
        },
        Past24HourTemperatureDeparture: {
          Metric: {
            Value: -3.9,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: -7,
            Unit: 'F',
            UnitType: 18
          }
        },
        ApparentTemperature: {
          Metric: {
            Value: 19.4,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 67,
            Unit: 'F',
            UnitType: 18
          }
        },
        WindChillTemperature: {
          Metric: {
            Value: 20,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 68,
            Unit: 'F',
            UnitType: 18
          }
        },
        WetBulbTemperature: {
          Metric: {
            Value: 14.9,
            Unit: 'C',
            UnitType: 17
          },
          Imperial: {
            Value: 59,
            Unit: 'F',
            UnitType: 18
          }
        },
        Precip1hr: {
          Metric: {
            Value: 0,
            Unit: 'mm',
            UnitType: 3
          },
          Imperial: {
            Value: 0,
            Unit: 'in',
            UnitType: 1
          }
        },
        PrecipitationSummary: {
          Precipitation: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          PastHour: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past3Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past6Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past9Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past12Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past18Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          },
          Past24Hours: {
            Metric: {
              Value: 0,
              Unit: 'mm',
              UnitType: 3
            },
            Imperial: {
              Value: 0,
              Unit: 'in',
              UnitType: 1
            }
          }
        },
        TemperatureSummary: {
          Past6HourRange: {
            Minimum: {
              Metric: {
                Value: 17.5,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 63,
                Unit: 'F',
                UnitType: 18
              }
            },
            Maximum: {
              Metric: {
                Value: 22.5,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 72,
                Unit: 'F',
                UnitType: 18
              }
            }
          },
          Past12HourRange: {
            Minimum: {
              Metric: {
                Value: 14.8,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 59,
                Unit: 'F',
                UnitType: 18
              }
            },
            Maximum: {
              Metric: {
                Value: 22.5,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 72,
                Unit: 'F',
                UnitType: 18
              }
            }
          },
          Past24HourRange: {
            Minimum: {
              Metric: {
                Value: 14.8,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 59,
                Unit: 'F',
                UnitType: 18
              }
            },
            Maximum: {
              Metric: {
                Value: 25.8,
                Unit: 'C',
                UnitType: 17
              },
              Imperial: {
                Value: 78,
                Unit: 'F',
                UnitType: 18
              }
            }
          }
        },
        MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us'
      }
    ]
  },
  forecast: {
    215854: {
      Headline: {
        EffectiveDate: '2022-04-19T08:00:00+03:00',
        EffectiveEpochDate: 1650344400,
        Severity: 4,
        Text: 'Noticeably cooler Tuesday',
        Category: 'cooler',
        EndDate: '2022-04-19T20:00:00+03:00',
        EndEpochDate: 1650387600,
        MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us'
      },
      DailyForecasts: [
        {
          Date: '2022-04-19T07:00:00+03:00',
          EpochDate: 1650340800,
          Temperature: {
            Minimum: {
              Value: 16.2,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 22.5,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 4,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Partly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us'
        },
        {
          Date: '2022-04-20T07:00:00+03:00',
          EpochDate: 1650427200,
          Temperature: {
            Minimum: {
              Value: 14.6,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 20.9,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Mostly clear',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us'
        },
        {
          Date: '2022-04-21T07:00:00+03:00',
          EpochDate: 1650513600,
          Temperature: {
            Minimum: {
              Value: 15.5,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 21.5,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Partly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us'
        },
        {
          Date: '2022-04-22T07:00:00+03:00',
          EpochDate: 1650600000,
          Temperature: {
            Minimum: {
              Value: 18.2,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 26.5,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 4,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false
          },
          Night: {
            Icon: 38,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us'
        },
        {
          Date: '2022-04-23T07:00:00+03:00',
          EpochDate: 1650686400,
          Temperature: {
            Minimum: {
              Value: 16.9,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 25.1,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 6,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: false
          },
          Night: {
            Icon: 38,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us'
        }
      ]
    },
    324323: {
      Headline: {
        EffectiveDate: '2022-04-19T08:00:00+03:00',
        EffectiveEpochDate: 1650344400,
        Severity: 4,
        Text: 'Noticeably cooler Tuesday',
        Category: 'cooler',
        EndDate: '2022-04-19T20:00:00+03:00',
        EndEpochDate: 1650387600,
        MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us'
      },
      DailyForecasts: [
        {
          Date: '2022-04-19T07:00:00+03:00',
          EpochDate: 1650340800,
          Temperature: {
            Minimum: {
              Value: 16.2,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 22.5,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 8,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false
          },
          Night: {
            Icon: 38,
            IconPhrase: 'Partly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us'
        },
        {
          Date: '2022-04-20T07:00:00+03:00',
          EpochDate: 1650427200,
          Temperature: {
            Minimum: {
              Value: 14.6,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 20.9,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Mostly clear',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us'
        },
        {
          Date: '2022-04-21T07:00:00+03:00',
          EpochDate: 1650513600,
          Temperature: {
            Minimum: {
              Value: 15.5,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 21.5,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Partly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us'
        },
        {
          Date: '2022-04-22T07:00:00+03:00',
          EpochDate: 1650600000,
          Temperature: {
            Minimum: {
              Value: 18.2,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 26.5,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 4,
            IconPhrase: 'Intermittent clouds',
            HasPrecipitation: false
          },
          Night: {
            Icon: 38,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us'
        },
        {
          Date: '2022-04-23T07:00:00+03:00',
          EpochDate: 1650686400,
          Temperature: {
            Minimum: {
              Value: 16.9,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 25.1,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 6,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: false
          },
          Night: {
            Icon: 38,
            IconPhrase: 'Mostly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us'
        }
      ]
    }
  }
}
