/* Reader controls only. Source artwork, story text and player state are never rewritten here. */
(() => {
  'use strict';
  const languages = ['zh','en','ja','ko','ru','fr'];
  const rows = {
    documentTitle:['Just Cuz · 会转动的故事书','Just Cuz · A Turning Storybook','Just Cuz · 回せる絵本','Just Cuz · 돌려 보는 이야기책','Just Cuz · Книга с разных сторон','Just Cuz · Le livre à faire tourner'],
    eyebrow:['翻开今天的小故事','Open a little story today','今日の小さな物語を開こう','오늘의 작은 이야기를 펼쳐요','Откройте маленькую историю','Ouvrez une petite histoire'],
    bookTitle:['会转动的故事书','A Turning Storybook','回せる絵本','돌려 보는 이야기책','Книга с разных сторон','Le livre à faire tourner'],
    intro:['从合集首页出发，和 Mandy、Cuz 一起读完三个小故事。','Start at the cover and read three little stories with Mandy and Cuz.','表紙から Mandy、Cuz と三つの物語を読もう。','표지부터 Mandy, Cuz와 세 가지 이야기를 읽어요.','Начните с обложки и прочтите три истории с Mandy и Cuz.','Depuis la couverture, lisez trois histoires avec Mandy et Cuz.'],
    bookCount:['{total} 页 · 含合集首页','{total} pages · including the cover','全{total}ページ · 表紙を含む','총 {total}쪽 · 표지 포함','{total} стр. · с обложкой','{total} pages · couverture comprise'],
    independentDrag:['独立拖动','Drag each panel','コマごとにドラッグ','각 칸을 드래그','Перетаскивайте каждый кадр','Faites glisser chaque case'],
    doubleReset:['双击还原','Double-click to reset','ダブルクリックで戻す','두 번 클릭하여 복원','Двойной щелчок — сброс','Double-clic pour rétablir'],
    prev:['← 上一页','← Previous','← 前へ','← 이전','← Назад','← Précédente'],
    next:['下一页 →','Next →','次へ →','다음 →','Далее →','Suivante →'],
    pagePrefix:['第','Page','ページ','쪽','Страница','Page'],
    pageNumber:['页码','Page number','ページ番号','쪽 번호','Номер страницы','Numéro de page'],
    pageOf:['/ {total} 页','/ {total}','/ {total}','/ {total}','/ {total}','/ {total}'],
    go:['前往','Go','移動','이동','Перейти','Aller'],
    language:['阅读语言','Reading language','読む言語','읽기 언어','Язык чтения','Langue de lecture'],
    chapter:['选择章节','Choose a chapter','章を選ぶ','장 선택','Выберите главу','Choisir un chapitre'],
    directory:['目录','Contents','目次','목차','Содержание','Sommaire'],
    readingNav:['阅读导航','Reading navigation','読書ナビゲーション','읽기 탐색','Навигация по книге','Navigation de lecture'],
    comicPage:['完整漫画页','Full comic page','漫画の全ページ','전체 만화 페이지','Полная страница комикса','Page entière de la BD'],
    viewport:['漫画阅读区，可放大后滚动查看','Comic reader; zoom and scroll to explore','漫画の読書領域。拡大してスクロールできます','만화 읽기 영역. 확대 후 스크롤할 수 있어요','Область чтения: увеличивайте и прокручивайте','Zone de lecture : zoomez puis faites défiler'],
    pageLabel:['第 {n} 页','Page {n}','{n}ページ','{n}쪽','Страница {n}','Page {n}'],
    pageProgress:['第 {n} / {total} 页','Page {n} / {total}','{n} / {total}ページ','{n} / {total}쪽','Страница {n} / {total}','Page {n} / {total}'],
    retryInteraction:['重新准备','Retry interaction','もう一度準備','다시 준비','Подготовить заново','Réessayer'],
    openingPage:['正在打开原页…','Opening the original page…','原画ページを開いています…','원화 페이지를 여는 중…','Открываем оригинал страницы…','Ouverture de la page originale…'],
    pageError:['这一页暂时没有打开，请重新尝试。','This page could not open. Please try again.','このページを開けませんでした。再試行してください。','이 페이지를 열 수 없어요. 다시 시도해 주세요.','Не удалось открыть страницу. Попробуйте снова.','Cette page ne peut pas s’ouvrir. Réessayez.'],
    reopen:['重新打开','Open again','開き直す','다시 열기','Открыть снова','Rouvrir'],
    zoom:['缩放控制','Zoom controls','ズーム操作','확대 및 축소','Масштаб','Commandes de zoom'],
    zoomOut:['缩小','Zoom out','縮小','축소','Уменьшить','Réduire'],
    zoomIn:['放大','Zoom in','拡大','확대','Увеличить','Agrandir'],
    fit:['适合整页','Fit page','ページ全体','전체 페이지 맞춤','Вся страница','Page entière'],
    focus:['沉浸阅读','Focus reading','集中して読む','집중 읽기','Режим чтения','Lecture immersive'],
    exitFocus:['退出沉浸','Exit focus','集中表示を終了','집중 읽기 종료','Выйти из режима чтения','Quitter le mode immersif'],
    viewOriginal:['查看原画','View original','原画を見る','원화 보기','Посмотреть оригинал','Voir l’original'],
    panelSources:['分格原画','Original panels','コマの原画','칸별 원화','Оригиналы кадров','Cases originales'],
    panelSourcesCount:['分格原画（{count}）','Original panels ({count})','コマの原画（{count}）','칸별 원화 ({count})','Оригиналы кадров ({count})','Cases originales ({count})'],
    reset:['复位本页','Reset this page','このページを戻す','이 페이지 복원','Сбросить эту страницу','Rétablir cette page'],
    help:['拖动一格，发现另一面 ✦ 松手缓缓停下 · 双击回到原画','Drag a panel to discover another side ✦ Release to ease to a stop · Double-click to reset','コマをドラッグして別の面へ ✦ 離すとゆっくり停止 · ダブルクリックで原画へ','한 칸을 드래그해 다른 면을 보세요 ✦ 놓으면 천천히 멈춰요 · 두 번 클릭하면 원화로','Перетащите кадр, чтобы увидеть другую сторону ✦ Отпустите для плавной остановки · Двойной щелчок — оригинал','Faites glisser une case pour voir un autre angle ✦ Relâchez pour ralentir · Double-clic pour revenir à l’original'],
    previewNote:['互动体验草稿，画面仍在优化中。','Interactive preview, artwork still being refined.','インタラクティブ体験版。画面は引き続き調整中です。','인터랙티브 미리보기이며 그림은 계속 다듬고 있어요.','Интерактивный предпросмотр, изображения ещё дорабатываются.','Aperçu interactif, illustrations encore en cours d’amélioration.'],
    footer:['JUST CUZ ✦ 会转动的故事书','JUST CUZ ✦ A Turning Storybook','JUST CUZ ✦ 回せる絵本','JUST CUZ ✦ 돌려 보는 이야기책','JUST CUZ ✦ Книга с разных сторон','JUST CUZ ✦ Le livre à faire tourner'],
    about:['阅读说明','Reading guide','読み方','읽기 안내','Как читать','Guide de lecture'],
    returnNote:['下次打开，接着这一页读','Continue from this page next time','次回もこのページから','다음에도 이 페이지부터','В следующий раз продолжите с этой страницы','Reprenez à cette page la prochaine fois'],
    directoryTitle:['三集故事 · {total} 页','Three stories · {total} pages','三つの物語 · {total}ページ','세 가지 이야기 · {total}쪽','Три истории · {total} стр.','Trois histoires · {total} pages'],
    close:['关闭','Close','閉じる','닫기','Закрыть','Fermer'],
    fullOriginal:['第 {n} 页完整原画','Page {n} · Complete original','{n}ページの原画全体','{n}쪽 전체 원화','Страница {n} · Полный оригинал','Page {n} · Original complet'],
    originalAlt:['Just Cuz 第 {n} 页完整原画','Just Cuz · Page {n} original artwork','Just Cuz · {n}ページの原画','Just Cuz · {n}쪽 원화','Just Cuz · Оригинал страницы {n}','Just Cuz · Illustration originale de la page {n}'],
    fullPage:['完整原页','Complete original page','原画ページ全体','전체 원화 페이지','Полная оригинальная страница','Page originale complète'],
    saveOriginal:['保存完整原画','Save original page','原画全体を保存','전체 원화 저장','Сохранить оригинал страницы','Enregistrer la page originale'],
    fullPanels:['完整分格原画','Complete original panels','コマの原画全体','전체 칸별 원화','Полные оригиналы кадров','Cases originales complètes'],
    sourcesNote:['这里保留每一格的完整原画和原文字，可以和互动视角一起看。','Each panel keeps its complete original artwork and lettering, alongside the interactive views.','各コマの原画と原文を残しています。動かせる視点と見比べられます。','각 칸의 원화와 원문을 온전히 보존하여 인터랙티브 시점과 함께 볼 수 있어요.','Здесь сохранены полные оригиналы кадров и надписи для сравнения с интерактивными ракурсами.','Chaque case conserve son illustration et son texte d’origine, à comparer avec les vues interactives.'],
    sourcesPage:['第 {n} 页 · {count} 格原画','Page {n} · {count} original panels','{n}ページ · 原画{count}コマ','{n}쪽 · 원화 {count}칸','Страница {n} · Оригинальных кадров: {count}','Page {n} · {count} cases originales'],
    aboutTitle:['一起读故事','Read together','一緒に物語を読もう','함께 이야기를 읽어요','Читаем вместе','Lisons ensemble'],
    aboutDrag:["单指左右拖动单格换视角；双指缩放并移动书页。松手会缓缓停下，双击或按 Home 回到原画。","Drag a panel with one finger to change views. Use two fingers to zoom and move the page. Release to ease to a stop; double-click or press Home to reset.","1本指でコマを左右に動かして視点を変更。2本指でページを拡大・移動できます。離すとゆっくり停止。ダブルクリックか Home で原画へ戻ります。","한 손가락으로 칸을 좌우로 드래그해 시점을 바꾸세요. 두 손가락으로 페이지를 확대하고 이동할 수 있어요. 놓으면 천천히 멈추며, 두 번 클릭하거나 Home을 누르면 원화로 돌아가요.","Одним пальцем вращайте кадр, двумя — увеличивайте и перемещайте страницу. Отпустите для плавной остановки; двойной щелчок или Home вернёт оригинал.","Faites glisser une case avec un doigt pour changer d’angle. Deux doigts permettent de zoomer et de déplacer la page. Relâchez pour ralentir ; double-clic ou Home pour revenir à l’original."],
    aboutOriginal:["静止和复位时展示完整原画。先准备轻量全角度预览，再按角度补清晰画面；快网空闲时会预备下一页。","The complete original remains visible at rest and on reset. Lightweight all-angle previews load first, followed by detail for the chosen view. A fast idle connection can prepare the next page.","静止時とリセット時は原画全体を表示します。全角度の軽量プレビューを先に読み込み、選んだ視点を高精細化します。高速回線の空き時間には次のページも準備します。","정지 및 복원 시 전체 원화를 보여 줘요. 가벼운 전체 각도 미리보기를 먼저 열고 선택한 시점의 선명한 그림을 준비해요. 빠른 연결이 한가할 때 다음 페이지를 미리 준비할 수 있어요.","В покое и после сброса виден полный оригинал. Сначала загружаются лёгкие ракурсы, затем детали выбранного вида. При быстром свободном соединении может готовиться следующая страница.","L’original complet reste visible au repos et après réinitialisation. Les aperçus légers arrivent d’abord, puis les détails de l’angle choisi. Une connexion rapide au repos peut préparer la page suivante."],
    aboutRefining:['本合集仍在优化中，部分环绕视角有人物和环境细节偏差。','This collection is still being refined. Some orbit views have character or environment detail differences.','この作品集は調整中です。一部の回転視点では人物や背景の細部に差があります。','이 모음집은 개선 중이며 일부 회전 시점에서 인물이나 배경의 세부 차이가 있어요.','Сборник ещё дорабатывается. На некоторых ракурсах детали персонажей и окружения могут отличаться.','Ce recueil est encore en cours d’amélioration. Certains angles présentent des différences dans les détails des personnages ou du décor.'],
    musicGroup:['背景音乐控制','Background music controls','BGM操作','배경 음악 설정','Управление фоновой музыкой','Commandes de musique'],
    musicVolume:['背景音乐音量','Background music volume','BGM音量','배경 음악 음량','Громкость фоновой музыки','Volume de la musique'],
    musicOn:['♫ 音乐已开启','♫ Music on','♫ BGM オン','♫ 음악 켜짐','♫ Музыка включена','♫ Musique activée'],
    musicClick:['♫ 点击开启音乐','♫ Click for music','♫ クリックでBGM','♫ 눌러서 음악 켜기','♫ Нажмите для музыки','♫ Cliquez pour la musique'],
    musicStart:['♫ 开启音乐','♫ Start music','♫ BGMを再生','♫ 음악 켜기','♫ Включить музыку','♫ Activer la musique'],
    musicPause:['暂停背景音乐','Pause background music','BGMを一時停止','배경 음악 일시 정지','Приостановить музыку','Mettre la musique en pause'],
    musicEnable:['开启背景音乐','Start background music','BGMを再生','배경 음악 켜기','Включить фоновую музыку','Activer la musique de fond'],
    musicError:['音乐暂时无法打开','Music is unavailable','BGMを再生できません','음악을 열 수 없어요','Музыка недоступна','Musique indisponible'],
    musicLoop:['循环播放中','Playing on repeat','リピート再生中','반복 재생 중','Повторное воспроизведение','Lecture en boucle'],
    musicGesture:['点一下页面即可播放','Tap the page to play','ページをタップして再生','페이지를 누르면 재생돼요','Нажмите на страницу для запуска','Touchez la page pour lancer'],
    musicPaused:['音乐已暂停','Music paused','BGM一時停止中','음악 일시 정지됨','Музыка приостановлена','Musique en pause'],
    musicPreparing:['正在准备音乐','Preparing music','BGMを準備中','음악 준비 중','Подготовка музыки','Préparation de la musique'],
    chapterCover:['合集首页','Collection cover','作品集の表紙','모음집 표지','Обложка сборника','Couverture du recueil'],
    chapterBirthday:['第一集 · 生日派对','Episode 1 · Birthday Party','第1話 · 誕生日パーティー','1화 · 생일 파티','Эпизод 1 · День рождения','Épisode 1 · Fête d’anniversaire'],
    chapterTrip:['第二集 · 校外旅行','Episode 2 · Field Trip','第2話 · 校外学習','2화 · 현장 학습','Эпизод 2 · Школьная экскурсия','Épisode 2 · Sortie scolaire'],
    chapterCamping:['第三集 · 露营之旅','Episode 3 · Camping Trip','第3話 · キャンプ','3화 · 캠핑 여행','Эпизод 3 · Поход с палатками','Épisode 3 · Camping'],
    chapterRange:['{title} · {start}–{end} 页','{title} · pp. {start}–{end}','{title} · {start}–{end}ページ','{title} · {start}–{end}쪽','{title} · стр. {start}–{end}','{title} · p. {start}–{end}'],
    openPage:['打开第 {n} 页','Open page {n}','{n}ページを開く','{n}쪽 열기','Открыть страницу {n}','Ouvrir la page {n}'],
    readyReset:['可以拖动 · 双击还原原画','Drag to explore · Double-click to reset','ドラッグで回転 · ダブルクリックで原画へ','드래그하여 보기 · 두 번 클릭하여 복원','Тяните для обзора · Двойной щелчок — сброс','Faites glisser · Double-clic pour rétablir'],
    readyWarming:['可以拖动 · 其他角度继续准备','Drag to explore · More angles are loading','ドラッグできます · 他の角度を準備中','드래그 가능 · 다른 각도 준비 중','Можно вращать · Другие ракурсы загружаются','Faites glisser · Autres angles en chargement'],
    someReady:['{count} 个画面可以拖动，其余正在准备…','{count} panels can be dragged; preparing the rest…','{count}コマはドラッグ可能。他は準備中…','{count}칸은 드래그 가능, 나머지는 준비 중…','Можно вращать кадров: {count}; остальные готовятся…','{count} cases peuvent tourner ; préparation des autres…'],
    someFailed:['{count} 个画面可以拖动，其他画面请重新准备','{count} panels can be dragged; retry the others','{count}コマはドラッグ可能。他は再試行してください','{count}칸은 드래그 가능, 나머지는 다시 준비해 주세요','Можно вращать кадров: {count}; повторите загрузку остальных','{count} cases peuvent tourner ; relancez les autres'],
    interactionPreparing:['正在准备本页互动，原画可以先读','Preparing interaction; read the original meanwhile','操作を準備中。原画は読めます','인터랙션 준비 중, 먼저 원화를 읽을 수 있어요','Готовим взаимодействие; пока можно читать оригинал','Préparation des interactions ; l’original reste lisible'],
    orbitPreparing:['正在准备环绕画面，原画可以先读','Preparing orbit views; read the original meanwhile','回転する画像を準備中。原画は読めます','회전 화면 준비 중, 먼저 원화를 읽을 수 있어요','Готовим ракурсы; пока можно читать оригинал','Préparation des angles ; l’original reste lisible'],
    interactionUnavailable:['互动暂未打开，原画仍可阅读','Interaction is unavailable; the original is readable','操作を開けません。原画は読めます','인터랙션을 열 수 없지만 원화는 읽을 수 있어요','Взаимодействие недоступно; оригинал можно читать','Interactions indisponibles ; l’original reste lisible'],
    interactionRetry:['互动暂未打开，原画仍可阅读。请重新准备。','Interaction is unavailable; the original is readable. Please retry.','操作を開けません。原画は読めます。再試行してください。','인터랙션을 열 수 없지만 원화는 읽을 수 있어요. 다시 준비해 주세요.','Взаимодействие недоступно; оригинал можно читать. Повторите подготовку.','Interactions indisponibles ; l’original reste lisible. Réessayez.'],
    interruptedAngles:['部分环绕角度加载中断，原画和已打开的角度仍可查看。请重新准备。','Some angles stopped loading. The original and loaded angles remain visible. Please retry.','一部の角度の読み込みが中断しました。原画と読み込み済みの角度は見られます。再試行してください。','일부 각도 로딩이 중단되었어요. 원화와 열린 각도는 계속 볼 수 있어요. 다시 준비해 주세요.','Загрузка некоторых ракурсов прервана. Оригинал и загруженные ракурсы доступны. Повторите подготовку.','Le chargement de certains angles a été interrompu. L’original et les angles chargés restent visibles. Réessayez.'],
    openingAngle:['正在打开这个角度…','Opening this angle…','この角度を開いています…','이 각도를 여는 중…','Открываем этот ракурс…','Ouverture de cet angle…'],
    originalNotOpen:['原页尚未打开','Original page is not open','原画ページは未表示です','원화 페이지가 아직 열리지 않았어요','Оригинал страницы ещё не открыт','La page originale n’est pas encore ouverte'],
    originalVisible:['原画完整呈现','Complete original artwork','原画全体を表示','전체 원화 표시','Полный оригинал','Illustration originale complète'],
    sourceCrop:['原画裁切','Original artwork crop','原画の切り出し','원화 잘라 보기','Фрагмент оригинала','Extrait de l’original'],
    sourceLoading:['正在打开原图裁切…','Opening the original crop…','原画の切り出しを開いています…','잘라낸 원화를 여는 중…','Открываем фрагмент оригинала…','Ouverture de l’extrait original…'],
    sourceError:['这一格暂时没有打开，请重新尝试。','This panel could not open. Please try again.','このコマを開けませんでした。再試行してください。','이 칸을 열 수 없어요. 다시 시도해 주세요.','Не удалось открыть кадр. Попробуйте снова.','Cette case ne peut pas s’ouvrir. Réessayez.'],
    sourceInteractive:['可以互动','Interactive','操作できます','인터랙션 가능','Интерактивный кадр','Interactif'],
    keepOriginal:['保留完整原画','Complete original preserved','原画全体を保持','전체 원화 보존','Полный оригинал сохранён','Original complet conservé'],
    savePanel:['保存分格原画','Save original panel','コマの原画を保存','칸별 원화 저장','Сохранить оригинал кадра','Enregistrer la case originale'],
    sourcePanelLabel:['第{n}页 · 第{panel}格完整原画','Page {n} · Panel {panel} original','{n}ページ · {panel}コマ目の原画','{n}쪽 · {panel}칸 원화','Страница {n} · Оригинал кадра {panel}','Page {n} · Original de la case {panel}'],
    panelDragLabel:['第 {n} 页，第 {panel} 格，左右拖动只转动这个小画面，双击或按 Home 还原原画','Page {n}, panel {panel}. Drag left or right to turn this view; double-click or press Home to reset.','{n}ページ、{panel}コマ目。左右にドラッグして回転。ダブルクリックか Home で原画へ。','{n}쪽, {panel}칸. 좌우로 드래그하여 이 화면을 돌려요. 두 번 클릭하거나 Home을 누르면 원화로 돌아가요.','Страница {n}, кадр {panel}. Тяните влево или вправо для вращения. Двойной щелчок или Home — оригинал.','Page {n}, case {panel}. Faites glisser à gauche ou à droite pour tourner cette vue. Double-clic ou Home pour rétablir.'],
    text:['译文','Text','本文','본문','Текст','Texte'],
    textTitle:['第 {n} 页 · 原文与译文','Page {n} · Story text','{n}ページ · 本文と原文','{n}쪽 · 본문과 원문','Страница {n} · Текст и оригинал','Page {n} · Texte et original'],
    loadRecovering:["自动重试中","Retrying automatically","自動で再試行中","자동으로 다시 시도 중","Повторяем автоматически","Nouvelle tentative automatique"],
    loadRecoveryHint:["正在重新准备，请稍候","Preparing again; please wait","もう一度準備しています。お待ちください","다시 준비 중이에요. 잠시 기다려 주세요","Готовим заново. Подождите","Nouvelle préparation, un instant"],
    loadScene:['这个画面','This panel','このコマ','이 칸','Этот кадр','Cette case'],
    loadError:['加载暂时中断','Loading interrupted','読み込みが中断しました','로딩 중단됨','Загрузка прервана','Chargement interrompu'],
    loadPreview:['环绕预览加载中','Loading orbit preview','回転プレビューを読み込み中','회전 미리보기 로딩 중','Загрузка предпросмотра','Chargement de l’aperçu'],
    loadHD:['高清画面加载中','Loading sharper images','高精細画像を読み込み中','고화질 그림 로딩 중','Загрузка чётких изображений','Chargement des images nettes'],
    loadOrbit:['环绕画面加载中','Loading orbit views','回転する画像を読み込み中','회전 화면 로딩 중','Загрузка ракурсов','Chargement des angles'],
    loadRetry:['请点击页面上方「重新准备」','Use “Retry interaction” above the page','ページ上部の「もう一度準備」を押してください','페이지 위의 「다시 준비」를 눌러 주세요','Нажмите «Подготовить заново» над страницей','Appuyez sur « Réessayer » au-dessus de la page'],
    loadFirst:['先准备全角度小预览，再补充高清','Preparing all-angle previews, then sharper images','全角度の軽量プレビューの後に高精細画像を準備','모든 각도 미리보기 후 고화질 그림을 준비해요','Сначала предпросмотр всех ракурсов, затем чёткие изображения','Aperçu de tous les angles, puis images plus nettes'],
    loadDrag:['可拖动试看','Drag to preview','ドラッグして試す','드래그하여 미리보기','Тяните для предпросмотра','Faites glisser pour essayer'],
    loadTab:['加载中','Loading','準備中','로딩 중','Загрузка','Chargement'],
    loadTry:['左右拖动看看','Drag left or right','左右にドラッグ','좌우로 드래그','Потяните влево или вправо','Glissez à gauche ou à droite'],
    loadDragHD:['预览可拖动，高清加载中','Preview ready; sharper images are loading','プレビューはドラッグ可能。高精細画像を読み込み中','미리보기는 드래그 가능, 고화질 로딩 중','Предпросмотр можно вращать; чёткие изображения загружаются','Aperçu prêt ; images plus nettes en chargement'],
    loadLast:['正在准备最后的画面，请稍候','Preparing the final images; please wait','最後の画像を準備しています。お待ちください','마지막 그림을 준비 중이에요. 잠시 기다려 주세요','Готовим последние изображения. Подождите','Préparation des dernières images, un instant'],
    loadWait:['完成后拖动更流畅，请稍候','Please wait for smoother dragging','滑らかに動かすため、少々お待ちください','원활한 드래그를 위해 잠시 기다려 주세요','Подождите для плавного вращения','Patientez pour un défilement plus fluide'],
    loadDescription:['{title}，{label} {percent}%，{hint}','{title}, {label}: {percent}%. {hint}','{title}、{label} {percent}%。{hint}','{title}, {label} {percent}%. {hint}','{title}, {label}: {percent}%. {hint}','{title}, {label} : {percent} %. {hint}']
  };
  Object.assign(rows, {"directoryStories":["三个小故事","Three little stories","三つの物語","세 가지 이야기","Три истории","Trois petites histoires"],"sharePage":["分享这一页","Share this page","このページを共有","이 페이지 공유","Поделиться страницей","Partager cette page"],"shareInstruction":["链接会保留当前页码和阅读语言。","The link keeps this page and reading language.","今のページと読む言語をリンクに残します。","현재 페이지와 읽기 언어가 링크에 저장돼요.","Ссылка сохранит эту страницу и язык чтения.","Le lien conserve cette page et la langue de lecture."],"shareCopied":["本页链接已复制","Page link copied","ページのリンクをコピーしました","페이지 링크를 복사했어요","Ссылка на страницу скопирована","Lien de la page copié"],"shareCancelled":["已取消分享","Sharing cancelled","共有をキャンセルしました","공유를 취소했어요","Публикация отменена","Partage annulé"],"copyLink":["复制链接","Copy link","リンクをコピー","링크 복사","Копировать ссылку","Copier le lien"],"copyManual":["请选中下面的内容并复制。","Select the text below and copy it.","下の内容を選択してコピーしてください。","아래 내용을 선택하여 복사해 주세요.","Выделите текст ниже и скопируйте его.","Sélectionnez le texte ci-dessous et copiez-le."],"copySuccess":["已复制","Copied","コピーしました","복사했어요","Скопировано","Copié"],"reportTitle":["记录本页问题","Note a page issue","このページの問題を記録","페이지 문제 기록","Записать проблему страницы","Noter un problème de page"],"reportNote":["这份记录留在你的浏览器里。复制后，可自行发送给制作方。","This note stays in your browser. Copy it to send to the creator yourself.","この記録はブラウザ内だけに残ります。コピーして制作者に送れます。","이 기록은 브라우저 안에만 있어요. 복사한 뒤 직접 제작자에게 보낼 수 있어요.","Запись остаётся в браузере. Вы можете скопировать её и сами отправить автору.","Cette note reste dans votre navigateur. Copiez-la pour l’envoyer vous-même au créateur."],"reportPage":["页码","Page","ページ","페이지","Страница","Page"],"reportLanguage":["阅读语言","Reading language","読む言語","읽기 언어","Язык чтения","Langue de lecture"],"reportReady":["可互动画面","Interactive panels ready","操作できるコマ","조작 가능한 칸","Готовые интерактивные кадры","Cases interactives prêtes"],"reportNetwork":["网络状况","Connection","接続状態","네트워크 상태","Соединение","Connexion"],"reportCategory":["问题类型","Issue type","問題の種類","문제 유형","Тип проблемы","Type de problème"],"reportDescription":["补充说明（选填）","Details (optional)","補足（任意）","설명 (선택 사항)","Подробности (необязательно)","Précisions (facultatif)"],"reportPlaceholder":["例如：拖动最下面一格时，画面没有变化。","For example: the bottom panel does not change when I drag it.","例：一番下のコマをドラッグしても画面が変わらない。","예: 맨 아래 칸을 드래그해도 화면이 바뀌지 않아요.","Например: нижний кадр не меняется при перетаскивании.","Exemple : la case du bas ne change pas quand je la fais glisser."],"reportPreview":["问题记录预览","Issue note preview","記録のプレビュー","문제 기록 미리보기","Предпросмотр записи","Aperçu de la note"],"reportLink":["本页链接","Page link","ページのリンク","페이지 링크","Ссылка на страницу","Lien de la page"],"reportEmpty":["无","None","なし","없음","Нет","Aucune"],"networkOnline":["在线","Online","オンライン","온라인","В сети","En ligne"],"networkOffline":["离线","Offline","オフライン","오프라인","Не в сети","Hors ligne"],"networkUnknown":["未提供连接类型","Connection type unavailable","接続の種類は不明","연결 유형 확인 불가","Тип соединения неизвестен","Type de connexion indisponible"],"networkSaveData":["节省流量已开启","Data saving is on","データ節約が有効","데이터 절약 모드 켜짐","Экономия трафика включена","Économie de données activée"],"issueLoading":["加载速度","Loading speed","読み込み速度","로딩 속도","Скорость загрузки","Vitesse de chargement"],"issueRotation":["转动与操作","Turning and controls","回転と操作","회전 및 조작","Вращение и управление","Rotation et commandes"],"issueText":["文字与翻译","Text and translation","文字と翻訳","텍스트 및 번역","Текст и перевод","Texte et traduction"],"issueOther":["其他","Other","その他","기타","Другое","Autre"],"reportCopy":["复制问题记录","Copy issue note","問題の記録をコピー","문제 기록 복사","Копировать запись","Copier la note"]});
  const strings = Object.fromEntries(languages.map((language,index) => [language,Object.freeze(Object.fromEntries(Object.entries(rows).map(([key,values]) => [key,values[index]])))]));
  window.COMIC_UI_STRINGS = Object.freeze(strings);
  const $ = id => document.getElementById(id);
  const selector = $('reading-language');
  let language = languages.includes(selector && selector.value) ? selector.value : 'zh';
  const t = (key, values = {}) => String(strings[language][key] || strings.en[key] || key).replace(/\{(\w+)\}/g, (_,name) => values[name] == null ? '' : String(values[name]));
  const setText = (element,value) => { if (element && element.textContent !== value) element.textContent = value; };
  const setAttr = (element,name,value) => { if (element && element.getAttribute(name) !== value) element.setAttribute(name,value); };
  const chapterKeys = {'collection-cover':'chapterCover',birthday:'chapterBirthday','field-trip':'chapterTrip',camping:'chapterCamping'};
  const sourceKeys = new Map(Object.entries(strings.zh).map(([key,value]) => [value,key]));
  for (const [source,key] of Object.entries({'正在打开漫画…':'openingPage','拖动单格 · 双击还原视角':'readyReset','复位视角':'reset','♫ 背景音乐':'musicStart'})) sourceKeys.set(source,key);
  const memory = new WeakMap();
  function translatedSource(source) {
    const direct = sourceKeys.get(source);
    if (direct) return t(direct);
    let match;
    if ((match = source.match(/^(\d+) 个画面可以拖动，其余正在准备…$/))) return t('someReady',{count:match[1]});
    if ((match = source.match(/^(\d+) 个画面可以拖动，其他画面请重新准备$/))) return t('someFailed',{count:match[1]});
    if ((match = source.match(/^分格原画（(\d+)）$/))) return t('panelSourcesCount',{count:match[1]});
    if ((match = source.match(/^第\s*(\d+)\s*页\s*·\s*第\s*(\d+)\s*格完整原画$/))) return t('sourcePanelLabel',{n:match[1],panel:match[2]});
    return source;
  }
  function dynamic(element, attribute) {
    if (!element) return;
    const value = attribute ? element.getAttribute(attribute) : element.textContent;
    if (!value) return;
    let fields = memory.get(element); if (!fields) { fields = {}; memory.set(element,fields); }
    const field = attribute || 'text', old = fields[field];
    const raw = old && value === old.output ? old.raw : value;
    const output = translatedSource(raw);
    fields[field] = {raw,output};
    if (attribute) setAttr(element,attribute,output); else setText(element,output);
  }
  function render() {
    if (!selector) return;
    const n = Math.max(1,Number($('page-number') && $('page-number').value) || 1);
    const total = window.COMIC_BOOK && window.COMIC_BOOK.pages && window.COMIC_BOOK.pages.length || Number($('page-number') && $('page-number').max) || 85;
    const vars = {n,total};
    if (document.title !== t('documentTitle')) document.title = t('documentTitle');
    const texts = {'prev-page':'prev','next-page':'next','open-directory':'directory','retry-interaction':'retryInteraction','page-loading':'openingPage','retry-page':'reopen','fit-page':'fit','original-button':'viewOriginal','reset-panels':'reset','book-about':'about','close-directory':'close','close-original':'close','original-download':'saveOriginal','panel-sources-title':'fullPanels','panel-sources-note':'sourcesNote','close-panel-sources':'close','book-about-title':'aboutTitle','close-book-about':'close','close-bilingual':'close','dynamic-note':'previewNote'};
    for (const [id,key] of Object.entries(texts)) setText($(id),t(key));
    for (const [id,key] of Object.entries({'share-page':'sharePage','share-title':'sharePage','share-instruction':'shareInstruction','copy-share-link':'copyLink','close-share':'close','report-page':'reportTitle','report-title':'reportTitle','report-note':'reportNote','close-report':'close','report-category-label':'reportCategory','report-description-label':'reportDescription','report-preview-label':'reportPreview','copy-report':'reportCopy'})) setText($(id),t(key));
    setAttr($('directory-story-cards'),'aria-label',t('directoryStories'));
    setAttr($('report-description'),'placeholder',t('reportPlaceholder'));
    for (const [value,key] of Object.entries({loading:'issueLoading',rotation:'issueRotation',text:'issueText',other:'issueOther'})) setText(document.querySelector(`#report-category option[value="${value}"]`),t(key));
    for (const [query,key] of Object.entries({'.book-title .eyebrow':'eyebrow','.book-title h1':'bookTitle','.intro':'intro','#source-panel-count':'independentDrag','#dynamic-count':'doubleReset','#page-jump label':'pagePrefix','#page-jump .jump-button':'go','.help':'help','.footer-signature':'footer','.return-note':'returnNote','#page-error p':'pageError'})) setText(document.querySelector(query),t(key));
    setText($('book-count'),t('bookCount',vars)); setText(document.querySelector('#page-jump > span'),t('pageOf',vars));
    setText($('current-page-label'),t('pageLabel',vars)); setText($('page-progress'),t('pageProgress',vars));
    setText($('directory-title'),t('directoryTitle',vars));
    setText($('focus-reading'),t(document.body.classList.contains('reading-focus') ? 'exitFocus' : 'focus'));
    const labels = {'reading-language':'language','page-number':'pageNumber','chapter-select':'chapter','zoom-out':'zoomOut','zoom-in':'zoomIn','page-viewport':'viewport'};
    for (const [id,key] of Object.entries(labels)) setAttr($(id),'aria-label',t(key));
    for (const [query,key] of Object.entries({'.music-controls':'musicGroup','#music-volume':'musicVolume','.reader-toolbar':'readingNav','section.reader':'comicPage','.zoom-controls':'zoom','label[for="chapter-select"]':'chapter','.language-switch .sr-only':'language'})) {
      const element = document.querySelector(query); if (element && (element.tagName === 'LABEL' || query.includes('.sr-only'))) setText(element,t(key)); else setAttr(element,'aria-label',t(key));
    }
    for (const id of ['prev-page','next-page','close-directory','close-original','close-panel-sources','close-bilingual']) setAttr($(id),'aria-label',$(id) ? $(id).textContent : '');
    const chapters = window.COMIC_BOOK && window.COMIC_BOOK.chapters || [];
    for (const [index,chapter] of chapters.entries()) {
      const title = chapterKeys[chapter.id] ? t(chapterKeys[chapter.id]) : chapter.title;
      const option = document.querySelector(`#chapter-select option[value="${Number(chapter.start)}"]`);
      setText(option,t('chapterRange',{title,start:chapter.start,end:chapter.end}));
      setText(document.querySelectorAll('#directory-content section > h3')[index],title);
      const card = document.querySelector(`.directory-story[data-chapter="${chapter.id}"]`);
      if (card) { setText(card.querySelector('.directory-story-title'),title); setAttr(card,'aria-label',t('chapterRange',{title,start:chapter.start,end:chapter.end})); }
    }
    document.querySelectorAll('.page-thumb[data-page]').forEach(element => setAttr(element,'aria-label',t('openPage',{n:element.dataset.page})));
    document.querySelectorAll('#book-about-dialog .directory-content > p').forEach((element,index) => { const key = ['aboutDrag','aboutOriginal','aboutRefining'][index]; if (key) setText(element,t(key)); });
    setAttr($('page-image'),'alt',t('originalAlt',vars));
    setText($('original-title'),t('fullOriginal',vars)); setAttr($('original-image'),'alt',t('originalAlt',vars));
    const page = window.COMIC_BOOK && window.COMIC_BOOK.pages && window.COMIC_BOOK.pages[n-1];
    if (page && $('original-size') && $('original-size').textContent) setText($('original-size'),`${page.width} × ${page.height} · ${t('fullPage')}`);
    dynamic($('panel-sources-button'));
    const cards = document.querySelectorAll('#panel-sources-gallery .panel-source-card');
    if ($('panel-sources-page') && $('panel-sources-page').textContent) setText($('panel-sources-page'),t('sourcesPage',{n,count:cards.length}));
    for (const id of ['page-caption','zoom-level','music-toggle','music-status']) dynamic($(id));
    dynamic($('music-toggle'),'aria-label');
    document.querySelectorAll('#panel-sources-gallery .panel-source-caption strong,#panel-sources-gallery .panel-source-caption > span,#panel-sources-gallery .panel-source-loading,#panel-sources-gallery button,#panel-sources-gallery .panel-source-footer > span,#panel-sources-gallery .panel-source-footer > a').forEach(element => dynamic(element));
    cards.forEach(card => { const crop = card.querySelector('img'), title = card.querySelector('.panel-source-caption strong'); if (crop) setAttr(crop,'alt',`Just Cuz · ${title ? title.textContent : t('loadScene')} · ${t('sourceCrop')}`); });
    document.querySelectorAll('#panel-layer > .panel-host').forEach(host => {
      if (host.dataset.backgroundOnly === 'true') return;
      const match = (host.dataset.sourcePanelId || '').match(/^page-(\d+)-panel-(\d+)$/);
      if (match) setAttr(host,'aria-label',t('panelDragLabel',{n:Number(match[1]),panel:Number(match[2])}));
    });
    window.ComicReaderTools?.refresh();
    window.ComicReadingDetails?.refresh();
    // This localizer does not set data-state, hidden, disabled, media or player readiness.
  }
  let queued = false;
  function queue() { if (queued) return; queued = true; Promise.resolve().then(() => {queued = false; render();}); }
  document.addEventListener('comic-language-change',event => { if (languages.includes(event.detail && event.detail.language)) language = event.detail.language; queue(); });
  document.addEventListener('comic-page-original-ready',queue);
  document.addEventListener('comic-panel-status',queue);
  const observer = new MutationObserver(queue);
  for (const id of ['page-caption','music-toggle','music-status','zoom-level','page-number','current-page-label','page-progress','panel-sources-button','panel-sources-page','panel-sources-gallery','original-title','original-size','dynamic-note']) {
    const element = $(id); if (element) observer.observe(element,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:id === 'music-toggle' ? ['aria-label','aria-pressed'] : ['value']});
  }
  if (document.body) observer.observe(document.body,{attributes:true,attributeFilter:['class']});
  if ($('panel-layer')) observer.observe($('panel-layer'),{childList:true});
  document.addEventListener('click',queue);
  window.ComicLocaleUI = Object.freeze({t,refresh:queue,get language(){return language;}});
  render();
})();
