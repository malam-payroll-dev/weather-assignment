export type TIndexedObject<T = any> = {
  [key: string]: T;
}

export type TUnit = 'Metric' | 'Imperial'

export interface IPlace {
  Version: number
  Key: string
  Type: string
  Rank: number
  LocalizedName: string
  Country: {
    ID: string
    LocalizedName: string
  }
  AdministrativeArea: {
    ID: string
    LocalizedName: string
  }
}

interface IData {
  Value: number
  Unit: string
  UnitType: number
}

interface IDataPhrase extends IData {
  Phrase: string
}

export interface ICondition {
  LocalObservationDateTime: string
  EpochTime: number,
  WeatherText: string
  WeatherIcon: number
  HasPrecipitation: boolean
  PrecipitationType: unknown
  IsDayTime: boolean
  Temperature: {
    Metric: IData
    Imperial: IData
  }
  RealFeelTemperature: {
    Metric: IDataPhrase
    Imperial: IDataPhrase
  }
  RealFeelTemperatureShade: {
    Metric: IDataPhrase
    Imperial: IDataPhrase
  }
  RelativeHumidity: number
  IndoorRelativeHumidity: number
  DewPoint: {
    Metric: IData
    Imperial: IData
  }
  Wind: {
    Direction: {
      Degrees: number,
      Localized: string
      English: string
    }
    Speed: {
      Metric: IData
      Imperial: IData
    }
  }
  WindGust: {
    Speed: {
      Metric: IData
      Imperial: IData
    }
  }
  UVIndex: number
  UVIndexText: string
  Visibility: {
    Metric: IData
    Imperial: IData
  }
  ObstructionsToVisibility: string
  CloudCover: number
  Ceiling: {
    Metric: IData
    Imperial: IData
  }
  Pressure: {
    Metric: IData
    Imperial: IData
  }
  PressureTendency: {
    LocalizedText: string
    Code: string
  }
  Past24HourTemperatureDeparture: {
    Metric: IData
    Imperial: IData
  }
  ApparentTemperature: {
    Metric: IData
    Imperial: IData
  }
  WindChillTemperature: {
    Metric: IData
    Imperial: IData
  }
  WetBulbTemperature: {
    Metric: IData
    Imperial: IData
  }
  Precip1hr: {
    Metric: IData
    Imperial: IData
  }
  PrecipitationSummary: {
    Precipitation: {
      Metric: IData
      Imperial: IData
    }
    PastHour: {
      Metric: IData
      Imperial: IData
    }
    Past3Hours: {
      Metric: IData
      Imperial: IData
    }
    Past6Hours: {
      Metric: IData
      Imperial: IData
    }
    Past9Hours: {
      Metric: IData
      Imperial: IData
    }
    Past12Hours: {
      Metric: IData
      Imperial: IData
    }
    Past18Hours: {
      Metric: IData
      Imperial: IData
    }
    Past24Hours: {
      Metric: IData
      Imperial: IData
    }
  }
  TemperatureSummary: {
    Past6HourRange: {
      Minimum: {
        Metric: IData
        Imperial: IData
      }
      Maximum: {
        Metric: IData
        Imperial: IData
      }
    }
    Past12HourRange: {
      Minimum: {
        Metric: IData
        Imperial: IData
      }
      Maximum: {
        Metric: IData
        Imperial: IData
      }
    }
    Past24HourRange: {
      Minimum: {
        Metric: IData
        Imperial: IData
      }
      Maximum: {
        Metric: IData
        Imperial: IData
      }
    }
  }
  MobileLink: string
  Link: string
}

export interface IDailyForecast {
  Date: string
  EpochDate: number,
  Temperature: {
    Minimum: IData,
    Maximum: IData
  }
  Day: {
    Icon: number
    IconPhrase: string
    HasPrecipitation: boolean
  }
  Night: {
    Icon: number
    IconPhrase: string
    HasPrecipitation: boolean
  }
  Sources: string[]
  MobileLink: string
  Link: string
}

export interface IForecast {
  Headline: {
    EffectiveDate: string
    EffectiveEpochDate: number
    Severity: number
    Text: string
    Category: string
    EndDate: string
    EndEpochDate: number
    MobileLink: string
    Link: string
  },
  DailyForecasts: IDailyForecast[]
}
