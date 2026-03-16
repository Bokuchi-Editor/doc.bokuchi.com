// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://doc.bokuchi.com',
	integrations: [
		starlight({
			title: 'Bokuchi Docs',
			logo: {
				src: './src/assets/bokuchi-icon.png',
				replacesTitle: false,
			},
			favicon: '/bokuchi-icon.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Bokuchi-Editor/bokuchi' },
			],
			editLink: {
				baseUrl: 'https://github.com/Bokuchi-Editor/doc.bokuchi.com/edit/main/',
			},
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				},
			},
			sidebar: [
				{
					label: 'Getting Started',
					translations: { ja: 'はじめに' },
					items: [
						{ label: 'Installation', slug: 'getting-started/installation', translations: { ja: 'インストール' } },
						{ label: 'First Document', slug: 'getting-started/first-document', translations: { ja: 'はじめてのドキュメント作成' } },
						{ label: 'UI Overview', slug: 'getting-started/ui-overview', translations: { ja: '画面の見方' } },
					],
				},
				{
					label: 'Guides',
					translations: { ja: '使い方ガイド' },
					items: [
						{ label: 'Markdown Basics', slug: 'guides/markdown-basics', translations: { ja: 'Markdown 基本記法' } },
						{ label: 'File Operations', slug: 'guides/file-operations', translations: { ja: 'ファイル操作' } },
						{ label: 'Tabs', slug: 'guides/tabs', translations: { ja: 'タブ管理' } },
						{ label: 'Editor & Preview', slug: 'guides/editor-and-preview', translations: { ja: 'エディタとプレビュー' } },
						{ label: 'Search & Replace', slug: 'guides/search-and-replace', translations: { ja: '検索と置換' } },
						{ label: 'Markdown Toolbar', slug: 'guides/markdown-toolbar', translations: { ja: 'Markdown ツールバー' } },
						{ label: 'Outline Panel', slug: 'guides/outline', translations: { ja: 'アウトライン' } },
						{ label: 'Folder Tree', slug: 'guides/folder-tree', translations: { ja: 'フォルダツリー' } },
						{ label: 'Table Conversion', slug: 'guides/table-conversion', translations: { ja: 'テーブル変換' } },
						{ label: 'Variables', slug: 'guides/variables', translations: { ja: '変数システム' } },
						{ label: 'Themes', slug: 'guides/themes', translations: { ja: 'テーマの変更' } },
						{ label: 'Zoom', slug: 'guides/zoom', translations: { ja: 'ズーム操作' } },
						{ label: 'Export', slug: 'guides/export', translations: { ja: 'エクスポート' } },
						{ label: 'Settings', slug: 'guides/settings', translations: { ja: '設定のカスタマイズ' } },
					],
				},
				{
					label: 'Reference',
					translations: { ja: 'リファレンス' },
					items: [
						{ label: 'Keyboard Shortcuts', slug: 'reference/keyboard-shortcuts', translations: { ja: 'キーボードショートカット一覧' } },
						{ label: 'Supported Languages', slug: 'reference/supported-languages', translations: { ja: '対応言語一覧' } },
						{ label: 'Markdown Cheatsheet', slug: 'reference/markdown-cheatsheet', translations: { ja: 'Markdown チートシート' } },
						{ label: 'System Requirements', slug: 'reference/system-requirements', translations: { ja: '動作環境' } },
					],
				},
				{
					label: 'FAQ',
					translations: { ja: 'よくある質問' },
					items: [
						{ label: 'FAQ', slug: 'faq', translations: { ja: 'よくある質問' } },
					],
				},
				{
					label: 'Changelog',
					translations: { ja: '更新履歴' },
					items: [
						{ label: 'Changelog', slug: 'changelog', translations: { ja: '更新履歴' } },
					],
				},
			],
		}),
	],
});
