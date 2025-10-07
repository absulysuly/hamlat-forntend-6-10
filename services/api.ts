import { DashboardStats, GovernorateData, GovernorateParticipation, Party, Candidate } from '../types';

// Windsurf Integration Point: Base URL for all API calls.
// This should be configured via environment variables in a real-world scenario.
const API_BASE_URL = 'https://api.windsurf.iraq-election-2025.dev';

/**
 * Simulates a network delay.
 * @param ms - Milliseconds to delay.
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Fetches dashboard statistics.
 * Windsurf Endpoint: GET /api/v1/stats/dashboard
 * Payload Format: Expects a JSON object matching the DashboardStats interface.
 */
export const getDashboardStats = async (): Promise<DashboardStats> => {
    console.log('Fetching dashboard stats from Windsurf...');
    await sleep(1000); // Simulate network latency
    // In a real implementation:
    // const response = await fetch(`${API_BASE_URL}/stats/dashboard`);
    // if (!response.ok) throw new Error('Failed to fetch dashboard stats');
    // return await response.json();
    return {
        totalRegisteredVoters: 25123456,
        expectedTurnoutPercentage: 65,
        turnoutChangeLastWeek: 2,
        approvedCandidatesCount: 8500,
        verifiedViolationsCount: 1245,
        newViolationsChangeLastWeek: -5,
        greenCampaignImpact: {
            treesSaved: 12,
            paperPostersSaved: 245,
            co2EmissionsReducedKg: 50
        },
        candidateDistribution: {
            men: { count: 6120, percentage: 72 },
            women: { count: 2380, percentage: 28 }
        }
    };
};

/**
 * Fetches estimated participation by governorate.
 * Windsurf Endpoint: GET /api/v1/stats/participation
 * Payload Format: Expects a JSON array of objects matching GovernorateParticipation.
 */
export const getGovernorateParticipation = async (): Promise<GovernorateParticipation[]> => {
    console.log('Fetching governorate participation from Windsurf...');
    await sleep(1200);
    // In a real implementation:
    // const response = await fetch(`${API_BASE_URL}/stats/participation`);
    // if (!response.ok) throw new Error('Failed to fetch participation data');
    // return await response.json();
    
    // Generating mock data for demonstration
    const { IRAQ_GOVERNORATES } = await import('../constants');
    return IRAQ_GOVERNORATES.map(gov => ({
        governorateId: gov.id,
        governorateName: gov.name,
        estimatedTurnout: Math.floor(Math.random() * (75 - 45 + 1)) + 45
    }));
};

/**
 * Fetches detailed data for a specific governorate.
 * @param governorateName - The English name of the governorate (e.g., 'baghdad').
 * Windsurf Endpoint: GET /api/v1/governorates/{governorateName}
 * Payload Format: Expects a JSON object matching the GovernorateData interface.
 */
export const getGovernorateData = async (governorateName: string): Promise<GovernorateData> => {
    console.log(`Fetching data for ${governorateName} from Windsurf...`);
    await sleep(1500);
    const { IRAQ_GOVERNORATES } = await import('../constants');
    const governorate = IRAQ_GOVERNORATES.find(g => g.enName.toLowerCase() === governorateName);

    if (!governorate) {
        throw new Error('Governorate not found');
    }
    
    // This is mock data generation. A real API call would be here.
    const mockCandidates: Candidate[] = [
        { id: 1, name: 'أحمد علي', party: 'تحالف النصر', imageUrl: 'https://picsum.photos/200/200?random=1', verified: true, governorate: governorate.enName },
        { id: 2, name: 'فاطمة حسن', party: 'دولة القانون', imageUrl: 'https://picsum.photos/200/200?random=2', verified: true, governorate: governorate.enName },
        { id: 3, name: 'علي كريم', party: 'التيار الصدري', imageUrl: 'https://picsum.photos/200/200?random=3', verified: false, governorate: governorate.enName },
        { id: 4, name: 'مريم جاسم', party: 'الحزب الديمقراطي الكردستاني', imageUrl: 'https://picsum.photos/200/200?random=4', verified: true, governorate: governorate.enName },
    ];
    const mockNews = [
        { id: 1, title: `انطلاق الحملات في ${governorate.name}`, summary: 'بدأ المرشحون حملاتهم الانتخابية مع التركيز على القضايا المحلية والخدمية...', date: '2025-09-15' },
        { id: 2, title: `IHEC تؤكد جاهزيتها في ${governorate.name}`, summary: 'أعلنت المفوضية العليا المستقلة للانتخابات عن استكمال كافة الاستعدادات اللوجستية والفنية...', date: '2025-09-14' },
    ];

    return {
        governorate,
        candidates: mockCandidates,
        news: mockNews,
        localStats: { registeredVoters: Math.floor(Math.random() * 5000000), pollingStations: Math.floor(Math.random() * 1500) }
    };
};

/**
 * Fetches data for a specific political party.
 * @param partyId - The unique identifier/slug for the party.
 * Windsurf Endpoint: GET /api/v1/parties/{partyId}
 * Payload Format: Expects a JSON object with 'party' and 'candidates' keys.
 */
export const getPartyData = async (partyId: string): Promise<{ party: Party; candidates: Candidate[] }> => {
    console.log(`Fetching data for party ${partyId} from Windsurf...`);
    await sleep(1000);
    
    const mockPartyData = {
        party: {
            id: 'tahaleef-al-nasr',
            name: 'تحالف النصر',
            logoUrl: 'https://via.placeholder.com/150/007a3d/FFFFFF?text=Logo',
            leader: 'حيدر العبادي',
            founded: 2018,
            description: 'تحالف النصر هو تحالف سياسي عراقي تأسس لخوض الانتخابات التشريعية. يركز التحالف على تعزيز الأمن، ومحاربة الفساد، وتحسين الخدمات العامة للمواطنين.',
        },
        candidates: [
            { id: 1, name: 'أحمد علي', party: 'تحالف النصر', imageUrl: 'https://picsum.photos/200/200?random=11', verified: true, governorate: 'Baghdad' },
            { id: 10, name: 'سارة محمود', party: 'تحالف النصر', imageUrl: 'https://picsum.photos/200/200?random=12', verified: true, governorate: 'Basra' },
            { id: 11, name: 'يوسف خالد', party: 'تحالف النصر', imageUrl: 'https://picsum.photos/200/200?random=13', verified: true, governorate: 'Anbar' },
        ]
    };
    
    if (partyId !== 'tahaleef-al-nasr') {
        throw new Error('Party not found');
    }

    return mockPartyData;
};


/**
 * Submits an integrity report.
 * Windsurf Endpoint: POST /api/v1/reports/integrity
 * Payload Format: Expects a FormData object with fields: governorate, violationType, description, and an optional 'evidence' file.
 */
export const submitIntegrityReport = async (formData: FormData): Promise<{ success: boolean; trackingId: string }> => {
    console.log('Submitting integrity report to Windsurf...');
    await sleep(1500);
    // In a real implementation:
    // const response = await fetch(`${API_BASE_URL}/reports/integrity`, {
    //     method: 'POST',
    //     body: formData,
    // });
    // if (!response.ok) throw new Error('Failed to submit report');
    // return await response.json();
    return { success: true, trackingId: `IQ-2025-${Math.random().toString(36).substring(2, 9).toUpperCase()}` };
};