class GoogleAccount {
	name: string;
	timezone: string;
}

class GoogleAdGroup {
	id: number;
	name: string;
	status: string;
}

class GoogleCampaign {
	id: number;
	name: string;
}

class GoogleAd {
	format: string;
	networkType: string[];
}

class GoogleStatistics {
	clicks: number;
	impressions: number;
	ctr: string;
	allConversionRate: string;
	allConversionValue: number;
	averageCost: number;
	averageCpc: number;
	averageCpe: number;
	averageCpv: number;
	averagePosition: number;
	conversionRate: string;
	conversions: number;
	conversionValue: number;
	costPerAllConversion: number;
	costPerConversion: number;
	crossDeviceConversions: string;
	engagementRate: string;
	engagements: number;
	interactionRate: string;
	interactions: number;
	valuePerAllConversion: number;
	valuePerConversion: number;
}

class GoogleTime {
	dayOfWeek: string;
	week: Date;
	month: Date;
	monthOfYear: string;
	quarter: Date;
	year: number;
}

class GoogleVideoStatistics {
	quartile100Rate: string;
	quartile25Rate: string;
	quartile50Rate: string;
	quartile75Rate: string;
	viewRate: string;
	views: number;
	viewThroughConversions: number;
}

export class GoogleKeyword {
	query: string;
	logDate: Date;
	customerId?: string;
	adgroupId?: number;
	campaignId?: number;
	keywordTextMatchingQuery: string;
	queryMatchTypeWithVariant: string;
	queryTargetingStatus: string;
	time: GoogleTime;
	keywordId: number;
	cost: number;
	finalUrl: string;
	trackingUrlTemplate: string;
	externalCustomerId: number;
	destinationUrl: string;
	device: string;
	account: GoogleAccount;
	adGroup: GoogleAdGroup;
	campaign: GoogleCampaign;
	ad: GoogleAd;
	statistics: GoogleStatistics;
	videoStatistics: GoogleStatistics;
}

