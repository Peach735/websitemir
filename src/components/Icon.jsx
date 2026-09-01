import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Eye,
  Gavel,
  Languages,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  MessageSquare,
  Phone,
  PhoneCall,
  Route,
  Send,
  ShieldCheck,
  Wallet,
  X,
} from 'lucide-react';

const ICONS = {
  'arrow-right': ArrowRight,
  check: Check,
  'clipboard-check': ClipboardCheck,
  eye: Eye,
  gavel: Gavel,
  languages: Languages,
  lock: Lock,
  mail: Mail,
  menu: Menu,
  'message-circle': MessageCircle,
  'message-square': MessageSquare,
  phone: Phone,
  'phone-call': PhoneCall,
  route: Route,
  send: Send,
  'shield-check': ShieldCheck,
  wallet: Wallet,
  x: X,
};

export default function Icon({ name, ...props }) {
  const Cmp = ICONS[name];
  return Cmp ? <Cmp {...props} /> : null;
}
