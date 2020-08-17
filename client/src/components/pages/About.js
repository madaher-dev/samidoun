import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
  margin: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  par: {
    textAlign: 'left',
  },
  parAr: {
    textAlign: 'right',
  },
  listAR: {
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  title: {
    paddingTop: 30,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} className={classes.title}>
        <Typography variant='h3' gutterBottom>
          About Samidoun
        </Typography>
      </Grid>

      <Grid item xs={12} sm={4}>
        <img
          src={require('../../images/about.jpg')}
          style={{ width: 400 }}
          alt='Beirut Explosion'
        />
      </Grid>

      <Grid item xs={12} sm={8} className={classes.margin}>
        <Typography variant='h4' gutterBottom className={classes.par}>
          Direct support to people affected by the Beirut Explosion
        </Typography>
        <Typography variant='body1' gutterBottom className={classes.par}>
          Samidoun (Anchored), a grassroots humanitarian relief coalition, was
          re-established in response to the catastrophic Beirut blast on August
          4, 2020. As many Lebanese, residents and friends of Lebanon rushed to
          help, a need emerged for a transparent peer to peer initiative, to
          ensure transparency and encourage a wider campaign to help thousands
          repair their homes and their lives. Samidoun provides a direct
          peer-to-peer contribution network for persons in need of humanitarian
          support, through direct cash assistance to beneficiaries following
          field verifications and expert review. Our fast and most efficient
          cash transfers to victims aim to swiftly restore livelihoods in the
          heart of Lebanon’s capital, following this major catastrophe.
        </Typography>
        <Typography variant='body1' gutterBottom className={classes.par}>
          Samidoun provides a direct peer-to-peer contribution network for
          persons in need of humanitarian support, through direct cash
          assistance to beneficiaries following field verifications and expert
          review. Our fast and most efficient cash transfers to victims aim to
          swiftly restore livelihoods in the heart of Lebanon’s capital,
          following this major catastrophe.
        </Typography>
        <Typography variant='h4' gutterBottom className={classes.par}>
          Coalition Member Associations:
        </Typography>
        <List>
          <ListItem>
            <ListItemText>Abaad</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Mouvement Social</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Taqaddom</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Marching Women</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              Association of Independent Professionals – Engineers
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Dawaer</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Me’zaf</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>GreenLine Association</ListItemText>
          </ListItem>
        </List>
        <Typography variant='body1' gutterBottom className={classes.parAr}>
          “صامدون” هو ائتلاف مدني للإغاثة (تأسس عام 2006 لمواجهة آثار الاعتداء
          الإسرائيلي على لبنان). وهو ائتلاف يعتمد العمل القاعدي والتشاركي ويمارس
          الشفافية في كل إجراءاته، وهو تطوعي بالكامل.
        </Typography>
        <Typography variant='body1' gutterBottom className={classes.parAr}>
          أعاد تشكيل صامدون متطوعون ومنظمات قاعدية وأخرى مدنية لمواجهة تداعيات
          التفجير الكارثي في بيروت في الرابع من آب (أغسطس) عام 2020 والناجم عن
          فساد مؤسسات الدولة اللبنانية وعدم كفاءتها.
        </Typography>
        <Typography variant='body1' gutterBottom className={classes.parAr}>
          في غياب الثقة الشعبية والدولية بمؤسسات الدولة اللبنانية، نشأت حاجة إلى
          مبادرة شفافة لإيصال المساعدات مباشرة إلى آلاف المحتاجين دون أي وسيط
          وعبر آليات شفافة وذات مصداقية. من هنا، يُوفر “صامدون” شبكة تبرع مباشرة
          لمن يحتاج إلى مساعدات إنسانية أو لترميم المنازل المدمرة والمتضررة، من
          خلال دفعات نقدية مباشرة بعد إجراء عمليات التمحيص والتدقيق الضرورية على
          أيدي خبراء محليين. وتهدف هذه الدفعات السريعة للضحايا، إلى دعم عملية
          استعادة الحياة الطبيعية للآلاف من سكان العاصمة اللبنانية.
        </Typography>
        <Typography variant='h4' gutterBottom className={classes.parAr}>
          في برامج الدعم
        </Typography>
        <List className={classes.parAr}>
          <ListItem className={classes.parAr}>
            في برنامج الدعم المالي المباشر: وهو على مستويين. مباشر بين المتبرع
            والمستفيد (من مواطن/ة إلى مواطن/ة)، بحيث يختار المتبرع الشخص أو
            العائلة التي يريد التبرع لها والمبلغ الذي يود تقديمه، وتقوم صامدون
            باستقباله وإيصاله. المستوى الثاني هو عام، بحيث يقرر المتبرع المبلغ
            الذي يود تقديمه وتوزع صامدون هذه المبالغ حسب معايير وأولويات محددة
            (راجع أدناه).
          </ListItem>
          <Typography variant='body1' gutterBottom className={classes.parAr}>
            برنامج المتطوعين: تستقطب صامدون المتطوعين من كل الاختصاصات ومن ثم
            تحيلهم إلى المنظمات الأعضاء حسب الحاجة والقدرة{' '}
          </Typography>

          <ListItem className={classes.parAr}>
            برنامج الدعم الموسيقي/ من موسيقي إلى موسيقي: تقوم صامدون بتقديم
            الدعم المالي المباشر للموسيقيين الذين خسروا آلاتهم و أو تجهيزاتهم
            الموسيقية. كما أنها توفر إمكانية وصل الموسيقيين ببعضهم، من لبنان
            والخارج، بحيث يمكن لموسيقي التبرع مباشرة لموسيقي آخر إما بآلة أو
            تجهيز أو بمبلغ مالي
          </ListItem>
        </List>
        <Typography variant='h4' gutterBottom className={classes.parAr}>
          في إجراءات الشفافية والعمل التشاركي
        </Typography>{' '}
        تقوم لجنة تدقيق محاسبي مكونة من 4 أعضاء من الائتلاف بمراقبات الواردات
        والصادرات، المالية والعينية، وتتولى المصادقة على أوامر الصرف والقيام
        بأعمال التدقيق اليومية وإصدار التقارير المالية بشكل دوري. يتم نشر أسماء
        المتبرعين على مواقع الائتلاف، كما وأسماء (من يرغب) من المستفيدين. يجتمع
        أعضاء الائتلاف بصورة دورية (أسبوعياً للجميع) وشبه يومية لفرق العمل. ويتم
        وضع الخطط وتقرير الإجراءات والأنشطة المختلفة بشكل جماعي.
        <Grid item container xs={12} className={classes.listAR}>
          <List className={classes.listAR}>
            <ListItem className={classes.parAr}>
              <ListItemText>أبعاد</ListItemText>
            </ListItem>
            <ListItem className={classes.parAr}>
              <ListItemText>الحركة الاجتماعية</ListItemText>
            </ListItem>
            <ListItem className={classes.parAr}>
              <ListItemText>تقدم</ListItemText>
            </ListItem>
            <ListItem className={classes.parAr}>
              <ListItemText>نساء سائرات</ListItemText>
            </ListItem>
            <ListItem className={classes.parAr}>
              <ListItemText>مهنيون ومهنيات – هندسة</ListItemText>
            </ListItem>
            <ListItem className={classes.parAr}>
              <ListItemText>معزف</ListItemText>
            </ListItem>
            <ListItem className={classes.parAr}>
              <ListItemText>دوائر</ListItemText>
            </ListItem>
            <ListItem className={classes.parAr}>
              <ListItemText>الخط الأخضر</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
