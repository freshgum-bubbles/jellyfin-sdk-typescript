/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { Api } from '..';
import { ActivityLogApi, ApiKeyApi, ArtistsApi, AudioApi, BrandingApi, ChannelsApi, CollectionApi, ConfigurationApi, DashboardApi, DevicesApi, DisplayPreferencesApi, DlnaApi, DlnaServerApi, DynamicHlsApi, EnvironmentApi, FilterApi, GenresApi, HlsSegmentApi, ImageApi, ImageByNameApi, InstantMixApi, ItemLookupApi, ItemRefreshApi, ItemsApi, ItemUpdateApi, LibraryApi, LibraryStructureApi, LiveTvApi, LocalizationApi, MediaInfoApi, MoviesApi, MusicGenresApi, NotificationsApi, PackageApi, PersonsApi, PlaylistsApi, PlaystateApi, PluginsApi, QuickConnectApi, RemoteImageApi, ScheduledTasksApi, SearchApi, SessionApi, StartupApi, StudiosApi, SubtitleApi, SuggestionsApi, SyncPlayApi, SystemApi, TimeSyncApi, TrailersApi, TvShowsApi, UniversalAudioApi, UserApi, UserLibraryApi, UserViewsApi, VideoAttachmentsApi, VideoHlsApi, VideosApi, YearsApi } from '../generated-client';

describe('Api', () => {
	it('should return api instances', () => {
		const api = new Api(
			'http://example.com',
			{
				name: 'Api Test',
				version: '1.0.0'
			},
			{
				name: 'Test Device',
				id: 'test-id'
			}
		);

		expect(api.activityLogApi).toBeInstanceOf(ActivityLogApi);
		expect(api.apiKeyApi).toBeInstanceOf(ApiKeyApi);
		expect(api.artistsApi).toBeInstanceOf(ArtistsApi);
		expect(api.audioApi).toBeInstanceOf(AudioApi);
		expect(api.brandingApi).toBeInstanceOf(BrandingApi);
		expect(api.channelsApi).toBeInstanceOf(ChannelsApi);
		expect(api.collectionApi).toBeInstanceOf(CollectionApi);
		expect(api.configurationApi).toBeInstanceOf(ConfigurationApi);
		expect(api.dashboardApi).toBeInstanceOf(DashboardApi);
		expect(api.devicesApi).toBeInstanceOf(DevicesApi);
		expect(api.displayPreferencesApi).toBeInstanceOf(DisplayPreferencesApi);
		expect(api.dlnaApi).toBeInstanceOf(DlnaApi);
		expect(api.dlnaServerApi).toBeInstanceOf(DlnaServerApi);
		expect(api.dynamicHlsApi).toBeInstanceOf(DynamicHlsApi);
		expect(api.environmentApi).toBeInstanceOf(EnvironmentApi);
		expect(api.filterApi).toBeInstanceOf(FilterApi);
		expect(api.genresApi).toBeInstanceOf(GenresApi);
		expect(api.hlsSegmentApi).toBeInstanceOf(HlsSegmentApi);
		expect(api.imageApi).toBeInstanceOf(ImageApi);
		expect(api.imageByNameApi).toBeInstanceOf(ImageByNameApi);
		expect(api.instantMixApi).toBeInstanceOf(InstantMixApi);
		expect(api.itemLookupApi).toBeInstanceOf(ItemLookupApi);
		expect(api.itemRefreshApi).toBeInstanceOf(ItemRefreshApi);
		expect(api.itemUpdateApi).toBeInstanceOf(ItemUpdateApi);
		expect(api.itemsApi).toBeInstanceOf(ItemsApi);
		expect(api.libraryApi).toBeInstanceOf(LibraryApi);
		expect(api.libraryStructureApi).toBeInstanceOf(LibraryStructureApi);
		expect(api.liveTvApi).toBeInstanceOf(LiveTvApi);
		expect(api.localizationApi).toBeInstanceOf(LocalizationApi);
		expect(api.mediaInfoApi).toBeInstanceOf(MediaInfoApi);
		expect(api.moviesApi).toBeInstanceOf(MoviesApi);
		expect(api.musicGenresApi).toBeInstanceOf(MusicGenresApi);
		expect(api.notificationsApi).toBeInstanceOf(NotificationsApi);
		expect(api.packageApi).toBeInstanceOf(PackageApi);
		expect(api.personsApi).toBeInstanceOf(PersonsApi);
		expect(api.playlistsApi).toBeInstanceOf(PlaylistsApi);
		expect(api.playstateApi).toBeInstanceOf(PlaystateApi);
		expect(api.pluginsApi).toBeInstanceOf(PluginsApi);
		expect(api.quickConnectApi).toBeInstanceOf(QuickConnectApi);
		expect(api.remoteImageApi).toBeInstanceOf(RemoteImageApi);
		expect(api.scheduledTasksApi).toBeInstanceOf(ScheduledTasksApi);
		expect(api.searchApi).toBeInstanceOf(SearchApi);
		expect(api.sessionApi).toBeInstanceOf(SessionApi);
		expect(api.startupApi).toBeInstanceOf(StartupApi);
		expect(api.studiosApi).toBeInstanceOf(StudiosApi);
		expect(api.subtitleApi).toBeInstanceOf(SubtitleApi);
		expect(api.suggestionsApi).toBeInstanceOf(SuggestionsApi);
		expect(api.syncPlayApi).toBeInstanceOf(SyncPlayApi);
		expect(api.systemApi).toBeInstanceOf(SystemApi);
		expect(api.timeSyncApi).toBeInstanceOf(TimeSyncApi);
		expect(api.trailersApi).toBeInstanceOf(TrailersApi);
		expect(api.tvShowsApi).toBeInstanceOf(TvShowsApi);
		expect(api.universalAudioApi).toBeInstanceOf(UniversalAudioApi);
		expect(api.userApi).toBeInstanceOf(UserApi);
		expect(api.userLibraryApi).toBeInstanceOf(UserLibraryApi);
		expect(api.userViewsApi).toBeInstanceOf(UserViewsApi);
		expect(api.videoAttachmentsApi).toBeInstanceOf(VideoAttachmentsApi);
		expect(api.videoHlsApi).toBeInstanceOf(VideoHlsApi);
		expect(api.videosApi).toBeInstanceOf(VideosApi);
		expect(api.yearsApi).toBeInstanceOf(YearsApi);
	});
});