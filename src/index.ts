export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Seed Categories
    const categoryCount = await strapi.db.query('api::category.category').count();
    
    if (categoryCount === 0) {
      console.log('📁 Seeding demo categories...');
      
      const demoCategories = [
        { name: 'Eğitim', slug: 'egitim', publishedAt: new Date() },
        { name: 'Sağlık', slug: 'saglik', publishedAt: new Date() },
        { name: 'Sosyal Yardım', slug: 'sosyal-yardim', publishedAt: new Date() },
        { name: 'Altyapı', slug: 'altyapi', publishedAt: new Date() },
        { name: 'Kültür ve Sanat', slug: 'kultur-ve-sanat', publishedAt: new Date() }
      ];

      for (const category of demoCategories) {
        await strapi.entityService.create('api::category.category', {
          data: category
        });
      }
      
      console.log('✅ 5 demo categories created!');
    }

    // Seed Contributors
    const contributorCount = await strapi.db.query('api::contributor.contributor').count();
    
    if (contributorCount === 0) {
      console.log('👥 Seeding demo contributors...');
      
      const demoContributors = [
        {
          name: 'Ahmet Yılmaz',
          slug: 'ahmet-yilmaz',
          bio: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Eğitim alanında 10 yıllık deneyime sahip, gönüllü eğitmen.' }
              ]
            }
          ],
          publishedAt: new Date()
        },
        {
          name: 'Ayşe Demir',
          slug: 'ayse-demir',
          bio: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Sosyal çalışmacı, proje koordinatörü.' }
              ]
            }
          ],
          publishedAt: new Date()
        },
        {
          name: 'Mehmet Kaya',
          slug: 'mehmet-kaya',
          bio: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Sağlık gönüllüsü, doktor.' }
              ]
            }
          ],
          publishedAt: new Date()
        }
      ];

      for (const contributor of demoContributors) {
        await strapi.entityService.create('api::contributor.contributor', {
          data: contributor
        });
      }
      
      console.log('✅ 3 demo contributors created!');
    }

    // Seed Articles
    const articleCount = await strapi.db.query('api::article.article').count();
    
    if (articleCount === 0) {
      console.log('📰 Seeding demo articles...');
      
      const demoArticles = [
        {
          title: 'Yeni Eğitim Merkezimiz Açıldı',
          slug: 'yeni-egitim-merkezimiz-acildi',
          excerpt: 'Ankara\'da yeni eğitim merkezimiz düzenlenen törenle hizmete açıldı. Merkezde 200 öğrenciye ücretsiz eğitim verilecek.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Ankara Çankaya\'da inşa edilen yeni eğitim merkezimiz, düzenlenen görkemli bir törenle hizmete açıldı. Merkezde matematik, fen bilimleri ve yabancı dil eğitimi verilecek.' }
              ]
            }
          ],
          readTime: 5,
          publishedAt: new Date('2024-02-10')
        },
        {
          title: 'Ramazan Ayı Gıda Yardımı Kampanyası',
          slug: 'ramazan-ayi-gida-yardimi-kampanyasi',
          excerpt: 'Ramazan ayına özel olarak başlattığımız gıda yardımı kampanyasıyla 500 aileye ulaşmayı hedefliyoruz.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Mübarek Ramazan ayı öncesinde başlattığımız gıda yardımı kampanyamız büyük ilgi görüyor. Her kolide temel gıda maddeleri bulunuyor.' }
              ]
            }
          ],
          readTime: 3,
          publishedAt: new Date('2024-02-08')
        },
        {
          title: 'Çocuk Oyun Parkı Projesi Tamamlandı',
          slug: 'cocuk-oyun-parki-projesi-tamamlandi',
          excerpt: 'Şanlıurfa\'da inşa ettiğimiz çocuk oyun parkı tamamlanarak çocukların hizmetine sunuldu.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Şanlıurfa\'nın kırsal kesiminde bulunan köyde inşa ettiğimiz çocuk oyun parkı projemiz tamamlandı. Park, modern oyun ekipmanlarıyla donatıldı.' }
              ]
            }
          ],
          readTime: 4,
          publishedAt: new Date('2024-02-05')
        },
        {
          title: 'Gönüllü Eğitim Programı Başladı',
          slug: 'gonullu-egitim-programi-basladi',
          excerpt: 'Yeni gönüllülerimiz için hazırladığımız eğitim programı başladı. 50 gönüllü programa katıldı.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Derneğimize katılan yeni gönüllülerimiz için hazırladığımız kapsamlı eğitim programı başladı. Program 3 hafta sürecek.' }
              ]
            }
          ],
          readTime: 6,
          publishedAt: new Date('2024-02-01')
        },
        {
          title: 'Kütüphane Açılışı Yapıldı',
          slug: 'kutuphane-acilisi-yapildi',
          excerpt: 'İstanbul\'da açtığımız yeni kütüphanede 5000 kitap bulunuyor. Öğrenciler ücretsiz faydalanabilecek.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'İstanbul Pendik\'te açtığımız kütüphanemiz öğrencilerin hizmetine sunuldu. Kütüphanede 5000\'den fazla kitap bulunuyor.' }
              ]
            }
          ],
          readTime: 4,
          publishedAt: new Date('2024-01-28')
        },
        {
          title: 'Kış Giyim Yardımı Dağıtıldı',
          slug: 'kis-giyim-yardimi-dagitildi',
          excerpt: 'Kars\'ta 300 çocuğa kış giyim yardımı ulaştırıldı. Mont, bot ve atkı-bere dağıtıldı.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Soğuk kış günlerinde Kars\'taki ihtiyaç sahibi çocuklara kış giyim yardımı ulaştırdık. Toplam 300 çocuk yardımdan faydalandı.' }
              ]
            }
          ],
          readTime: 3,
          publishedAt: new Date('2024-01-25')
        },
        {
          title: 'Bilgisayar Laboratuvarı Kuruldu',
          slug: 'bilgisayar-laboratuvari-kuruldu',
          excerpt: 'Van\'daki köy okuluna 20 bilgisayarlı laboratuvar kuruldu. Öğrenciler teknoloji ile tanışıyor.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Van\'ın kırsal kesiminde bulunan ilkokuluna kurduğumuz bilgisayar laboratuvarı öğrencilerin teknoloji ile tanışmasını sağlıyor.' }
              ]
            }
          ],
          readTime: 5,
          publishedAt: new Date('2024-01-20')
        },
        {
          title: 'Sağlık Taraması Kampanyası',
          slug: 'saglik-taramasi-kampanyasi',
          excerpt: 'Ücretsiz sağlık taraması kampanyamızla 1000 kişiye ulaştık. Taramalar devam ediyor.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Başlattığımız ücretsiz sağlık taraması kampanyası kapsamında 1000 kişiye sağlık hizmeti sunduk. Kampanya devam ediyor.' }
              ]
            }
          ],
          readTime: 4,
          publishedAt: new Date('2024-01-15')
        },
        {
          title: 'Kadın Girişimciler Destekleniyor',
          slug: 'kadin-girisimciler-destekleniyor',
          excerpt: 'Kadın girişimcilere yönelik başlattığımız destek programı kapsamında 30 kadına eğitim ve sermaye desteği sağlandı.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Kadınların ekonomik olarak güçlenmesi için başlattığımız program çok başarılı geçiyor. 30 kadın girişimci desteklendi.' }
              ]
            }
          ],
          readTime: 6,
          publishedAt: new Date('2024-01-10')
        },
        {
          title: 'Yeni Yıl Şenliği Düzenlendi',
          slug: 'yeni-yil-senligi-duzenlendi',
          excerpt: 'Çocuklar için düzenlediğimiz yeni yıl şenliğine 500 çocuk katıldı. Eğlenceli bir gün geçirdik.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Yeni yılı çocuklarla birlikte kutladık. Düzenlediğimiz şenlikte oyunlar, yarışmalar ve hediyeler vardı. 500 çocuk mutlu bir gün geçirdi.' }
              ]
            }
          ],
          readTime: 3,
          publishedAt: new Date('2024-01-05')
        }
      ];

      for (const article of demoArticles) {
        await strapi.entityService.create('api::article.article', {
          data: article
        });
      }
      
      console.log('✅ 10 demo articles created!');
    }

    // Seed Pages
    const pageCount = await strapi.db.query('api::page.page').count();
    
    if (pageCount === 0) {
      console.log('📄 Seeding demo pages...');
      
      const demoPages = [
        {
          title: 'Hakkımızda',
          slug: 'about',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Zirve Dayanışma Ağı, 2024 yılında insanlığa hizmet etmek amacıyla kurulmuştur. Vizyonumuz, her bireyin eşit fırsatlara sahip olduğu, adil ve sürdürülebilir bir dünya yaratmaktır.' }
              ]
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Misyonumuz, eğitim, sağlık ve sosyal destek alanlarında ihtiyaç sahibi ailelere ulaşarak onların hayat kalitesini yükseltmektir. Bugüne kadar 12,000\'den fazla aileye ulaştık ve 48 aktif proje ile çalışmalarımızı sürdürüyoruz.' }
              ]
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Gönüllülerimizle birlikte, her gün yeni dayanışma köprüleri kuruyoruz. Çünkü biz, birlikte daha güçlü olduğumuza inanıyoruz.' }
              ]
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Sizler de bu ağın bir parçası olmak isterseniz, bizimle iletişime geçebilirsiniz. Her destek, bir başkasının hayatına dokunuyor.' }
              ]
            }
          ],
          publishedAt: new Date()
        }
      ];

      for (const page of demoPages) {
        await strapi.entityService.create('api::page.page', {
          data: page
        });
      }
      
      console.log('✅ Demo pages created!');
    }

    // Seed Projects
    const projectCount = await strapi.db.query('api::project.project').count();
    
    if (projectCount === 0) {
      console.log('📦 Seeding demo projects...');
      
      // Create demo projects
      const demoProjects = [
        {
          title: 'Eğitim Yardımı Projesi',
          slug: 'egitim-yardimi-projesi',
          description: '500 öğrenciye kırtasiye ve kitap desteği sağlıyoruz. Her çocuğun eğitim hakkına erişmesi için çalışıyoruz.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Eğitim, her çocuğun temel hakkıdır. Bu proje ile ihtiyaç sahibi 500 öğrenciye kırtasiye malzemesi, ders kitabı ve okul çantası desteği sağlıyoruz.' }
              ]
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Proje kapsamında Ankara genelinde 5 farklı okulda çalışmalarımız devam ediyor.' }
              ]
            }
          ],
          projectStatus: 'active',
          progress: 75,
          targetAmount: 100000,
          collectedAmount: 75000,
          beneficiaries: 500,
          location: 'Ankara',
          startDate: '2024-01-15',
          publishedAt: new Date()
        },
        {
          title: 'Gıda Kolisi Dağıtımı',
          slug: 'gida-kolisi-dagitimi',
          description: 'İhtiyaç sahibi 300 aileye gıda kolisi ulaştırıyoruz. Temel gıda maddelerini içeren paketler hazırlıyoruz.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Ramazan ayı öncesinde başlattığımız gıda yardımı projemiz ile 300 aileye ulaşmayı hedefliyoruz.' }
              ]
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Her kolide pirinç, bulgur, makarna, yağ, şeker ve temel gıda maddeleri bulunmaktadır.' }
              ]
            }
          ],
          projectStatus: 'active',
          progress: 60,
          targetAmount: 50000,
          collectedAmount: 30000,
          beneficiaries: 300,
          location: 'İstanbul',
          startDate: '2024-02-01',
          publishedAt: new Date()
        },
        {
          title: 'Temiz Su Kuyusu Projesi',
          slug: 'temiz-su-kuyusu-projesi',
          description: 'Kırsal bölgedeki köy okullarına temiz su kuyusu açıyoruz. 1200 kişiye temiz içme suyu erişimi sağladık.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Şanlıurfa bölgesinde 3 köy okuluna temiz su kuyusu açma projemiz başarıyla tamamlandı.' }
              ]
            },
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Toplam 1200 öğrenci ve köy halkı artık temiz içme suyuna erişebiliyor.' }
              ]
            }
          ],
          projectStatus: 'completed',
          progress: 100,
          targetAmount: 150000,
          collectedAmount: 150000,
          beneficiaries: 1200,
          location: 'Şanlıurfa',
          startDate: '2023-09-01',
          endDate: '2024-01-31',
          publishedAt: new Date()
        },
        {
          title: 'Kış Giyim Yardımı',
          slug: 'kis-giyim-yardimi',
          description: 'Soğuk kış aylarında ihtiyaç sahibi çocuklara kış giyim yardımı yapıyoruz.',
          content: [
            {
              type: 'paragraph',
              children: [
                { type: 'text', text: 'Kış mevsiminde çocukların sağlıklı ve sıcak bir şekilde eğitime devam edebilmeleri için mont, bot ve kışlık kıyafet yardımı yapıyoruz.' }
              ]
            }
          ],
          projectStatus: 'planning',
          progress: 20,
          targetAmount: 80000,
          collectedAmount: 16000,
          beneficiaries: 400,
          location: 'Kars',
          startDate: '2024-10-01',
          publishedAt: new Date()
        }
      ];

      for (const project of demoProjects) {
        await strapi.entityService.create('api::project.project', {
          data: project
        });
      }
      
      console.log('✅ 3 demo projects created!');
    }
    
    // Set Public permissions
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      console.log('🔓 Setting public permissions...');
      
      const actionsToEnable = [
        'api::article.article.find',
        'api::article.article.findOne',
        'api::project.project.find',
        'api::project.project.findOne',
        'api::page.page.find',
        'api::page.page.findOne',
        'api::contact.contact.create'
      ];

      for (const action of actionsToEnable) {
        const permission = await strapi.query('plugin::users-permissions.permission').findOne({
          where: {
            role: publicRole.id,
            action: action
          }
        });

        if (permission) {
          await strapi.query('plugin::users-permissions.permission').update({
            where: { id: permission.id },
            data: { enabled: true }
          });
        }
      }
      
      console.log('✅ Public permissions set!');
    }
    
    console.log('🎉 Database seeding completed!');
  },
};
